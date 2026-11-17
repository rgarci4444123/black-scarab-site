import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

export const normalizeText = value => String(value ?? '').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/\s+/g, ' ').trim();

export function isPublicAddress(ip) {
  if (ip.includes(':')) return /^(2|3)/i.test(ip) && !/^2001:(db8|0:)/i.test(ip);
  const [a, b] = ip.split('.').map(Number);
  return !(a === 0 || a === 10 || a === 127 || a >= 224 || (a === 169 && b === 254)
    || (a === 172 && b >= 16 && b <= 31) || (a === 192 && (b === 168 || b === 0)) || (a === 100 && b >= 64 && b <= 127) || (a === 198 && [18, 19].includes(b)));
}

export async function safeUrl(raw) {
  const url = new URL(raw);
  if (url.protocol !== 'https:' || url.username || url.password || (url.port && url.port !== '443')) throw new Error('Only public HTTPS URLs are supported');
  const host = url.hostname.replace(/^\[|\]$/g, '');
  const addresses = isIP(host) ? [{ address: host }] : await lookup(host, { all: true });
  if (!addresses.length || addresses.some(entry => !isPublicAddress(entry.address))) throw new Error('Private network URL blocked');
  return url;
}

export async function fetchPage(raw, options = {}) {
  let url = await safeUrl(raw);
  for (let redirects = 0; redirects <= 4; redirects++) {
    const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': 'BlackScarabEvents/1.0 (+https://www.blackscarab.ai/events/virtual)', Accept: 'text/html,application/ld+json,text/calendar,application/rss+xml,application/atom+xml' }, ...options });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location) throw new Error(`Redirect without Location: ${url}`);
      url = await safeUrl(new URL(location, url).href);
      continue;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
    if (Number(response.headers.get('content-length')) > 2_000_000) throw new Error('Source too large');
    const reader = response.body?.getReader();
    const parts = []; let bytes = 0;
    if (reader) {
      while (true) {
        const part = await reader.read();
        if (part.done) break;
        bytes += part.value.byteLength;
        if (bytes > 2_000_000) { await reader.cancel(); throw new Error('Source too large'); }
        parts.push(part.value);
      }
    }
    const body = Buffer.concat(parts).toString('utf8');
    if (/captcha|access denied|verify you are human/i.test(body.slice(0, 3000))) throw new Error('Source access restricted');
    return { url: url.href, body, text: normalizeText(body), contentType: response.headers.get('content-type') ?? '' };
  }
  throw new Error('Too many redirects');
}

export function linkedPages(html, base, allowedDomains) {
  const links = [];
  for (const match of html.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1].replace(/&amp;/g, '&'), base);
      if (url.protocol !== 'https:') continue;
      url.hash = '';
      for (const key of [...url.searchParams.keys()]) if (/^(utm_|fbclid|gclid)/i.test(key)) url.searchParams.delete(key);
      const originPage = new URL(base); originPage.hash = '';
      if (url.href === originPage.href) continue;
      if (!allowedDomains.some(d => url.hostname === d || url.hostname.endsWith(`.${d}`))) continue;
      if (/webinar|event|workshop|calendar|\.ics|rss|feed/i.test(url.pathname) && !/on-demand|ondemand|recording|\/tag\//i.test(url.pathname)) links.push(url.href);
    } catch { /* Non-URL links are not discovery leads. */ }
  }
  const rank = value => {
    const path = new URL(value).pathname;
    return (/\/(webinars?|events?|workshops?)\/[^/]+/.test(path) ? 10 : 0)
      + (/upcoming|\.ics|rss|feed/.test(path) ? 4 : 0) - (/training|safety|calendar$/.test(path) ? 2 : 0);
  };
  return [...new Set(links)].sort((a,b) => rank(b) - rank(a));
}
