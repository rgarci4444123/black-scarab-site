import { createHash } from 'node:crypto';
import { createContentLoader } from '../content-source-loader.mjs';
import { normalizeText, linkedPages } from './network.mjs';
import { parseSchedule } from './schedule.mjs';
const core = createContentLoader()('lib/virtual-events.ts');
const offsetPattern = /(?:Z|[+-]\d{2}:\d{2})$/;

export { jsonLdEvents } from './evidence.mjs';
import { jsonLdEvents } from './evidence.mjs';

export { calendarEvents } from './calendar.mjs';
import { calendarEvents } from './calendar.mjs';

export function scoreEvent(details, source) {
  const text = `${details.name} ${details.description}`;
  const relevanceTerms = text.match(/robot\w*|physical ai|autonom\w*|industrial|manufactur\w*|digital twin|simulat\w*|machine vision|visual inspection|edge ai|motion control|ros[ -]?2|humanoid/gi) ?? [];
  const relevance = Math.min(35, new Set(relevanceTerms.map(t => t.toLowerCase())).size * 9);
  const education = Math.min(20, (text.match(/demonstrat\w*|hands.on|technical|workshop|case stud\w*|engineer\w*|research|learn|deploy\w*|train\w*/gi) ?? []).length * 5);
  const credibility = source.tier === 1 ? 25 : source.tier === 2 ? 23 : 18;
  const quality = details.performer || details.speakerEvidence ? 10 : education >= 15 ? 6 : 2;
  const accessibility = details.isAccessibleForFree === true ? 10 : details.cost === 'paid' ? 4 : 6;
  const total = relevance + credibility + education + quality + accessibility;
  return { total, relevance, rationale: [`Relevance ${relevance}/35: ${[...new Set(relevanceTerms.map(t => t.toLowerCase()))].join(', ') || 'no direct match'}.`, `Credibility ${credibility}/25: registered Tier ${source.tier} organizer.`, `Education ${education}/20: explicit technical, practical or research terms.`, `Topic and speakers ${quality}/10: ${details.performer || details.speakerEvidence ? 'named presenter in official programme' : 'topic specificity only'}.`, `Accessibility ${accessibility}/10: ${details.isAccessibleForFree === true ? 'confirmed free' : details.cost === 'paid' ? 'paid' : 'price unconfirmed'}.`] };
}

export function toCandidate(details, source, page, now = new Date()) {
  if (!details.name || !details.startDate || !offsetPattern.test(details.startDate)) return null;
  const start = Date.parse(details.startDate);
  if (!Number.isFinite(start) || start <= now.getTime() || start > now.getTime() + 60 * core.DAY) return null;
  const sourceHost = new URL(page.url).hostname;
  const official = source.domains.some(d => sourceHost === d || sourceHost.endsWith(`.${d}`));
  const online = /OnlineEventAttendanceMode|MixedEventAttendanceMode/.test(details.eventAttendanceMode ?? '') || [].concat(details.location ?? []).some(l => l?.['@type'] === 'VirtualLocation');
  const live = !/on.demand|watch (the )?recording|recorded webinar/i.test(`${details.name} ${details.description}`);
  const scoring = scoreEvent(details, source);
  if (!official || !online || !live || scoring.relevance < 18) return null;
  const url = new URL(details.url || details.location?.url || page.url, page.url).href;
  if (!url.startsWith('https://')) return null;
  const offer = [].concat(details.offers ?? [])[0];
  const free = details.isAccessibleForFree === true || (offer?.price !== undefined && Number(offer.price) === 0);
  const cost = free ? 'free' : offer?.price !== undefined ? 'paid' : details.cost ?? 'unknown';
  const startUtc = new Date(start).toISOString();
  const key = core.duplicateKey(source.name, details.name, startUtc);
  const canceled = /EventCancelled/.test(details.eventStatus ?? '');
  const schedule = details.scheduleEvidence || details.rawSchedule || details.startDate;
  const rawText = `${page.text} ${normalizeText(page.body)} ${page.body}`;
  const evidencePresent = details.rawSchedule || rawText.includes(details.startDate) || rawText.includes(schedule);
  // Calendar plugins often encode an all-day date as midnight in the site's default zone.
  // Require an explicit time excerpt before treating such schema timestamps as verified.
  const midnightPlaceholder = /T00:00(?::00(?:\.0+)?)?(?:Z|[+-]\d{2}:\d{2})$/.test(details.startDate) && !details.scheduleEvidence;
  return {
    id: createHash('sha256').update(key).digest('hex').slice(0, 16), officialTitle: normalizeText(details.name), displayTitle: normalizeText(details.name),
    organizer: source.name, organizerWebsite: source.website, category: /digital twin|simulat/i.test(`${details.name} ${details.description}`) ? 'Simulation & Digital Twins' : /autonom/i.test(`${details.name} ${details.description}`) ? 'Autonomous Systems' : /industrial|manufactur|inspection/i.test(`${details.name} ${details.description}`) ? 'Industrial AI' : 'Robotics & Humanoids',
    format: /demo/i.test(details.name) ? 'Live demonstration' : /workshop/i.test(details.name) ? 'Technical workshop' : 'Live webinar',
    originalStart: details.startDate, sourceTimezone: details.sourceTimezone || details.startDate.match(offsetPattern)[0], startUtc,
    endUtc: details.endDate && offsetPattern.test(details.endDate) && Date.parse(details.endDate) > start ? new Date(details.endDate).toISOString() : null,
    url, sourceUrl: page.url, summary: details.editorialSummary ?? '', cost,
    price: offer?.price !== undefined && !free ? `${offer.priceCurrency ?? ''} ${offer.price}`.trim() : details.price ?? null,
    score: scoring.total, rationale: scoring.rationale, status: canceled ? 'canceled' : scoring.total < 65 ? 'rejected' : 'candidate',
    firstDiscoveredAt: now.toISOString(), lastVerifiedAt: null, publishedAt: null, duplicateKey: key, aliases: [],
    evidence: { title: normalizeText(details.name), schedule, attendance: details.attendanceEvidence || details.eventAttendanceMode || 'VirtualLocation', description: normalizeText(details.description), cost: details.costEvidence ?? null },
    verification: { official, online, schedule: Boolean(evidencePresent) && !midnightPlaceholder, registration: false, live, checkedAt: now.toISOString(), error: null },
    approvedFingerprint: null, reviewedBy: null, reviewedAt: null, overrideReason: null, reviewNotifiedFingerprint: null, changes: [],
  };
}

export function extractEvents(page) {
  if (/BEGIN:VCALENDAR/.test(page.body)) return calendarEvents(page.body);
  return jsonLdEvents(page.body);
}

export function feedLinks(page, domains) {
  const out = linkedPages(page.body, page.url, domains);
  for (const m of page.body.matchAll(/<link[^>]*>(https?:[^<]+)<\/link>|<link[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
    try {
      const url = new URL(m[1] || m[2], page.url);
      if (domains.some(d => url.hostname === d || url.hostname.endsWith(`.${d}`))) out.push(url.href);
    } catch { /* Invalid feed entry */ }
  }
  return [...new Set(out)];
}

export function htmlEvent(page, source) {
  const body = page.body.replace(/^[\s\S]*?(<h1\b)/i, '$1');
  const title = body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (!title) return [];
  const text = normalizeText(body);
  const schedule = text.match(/(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+20\d{2}\s*[|·]?\s*\d{1,2}(?::\d{2})?\s*(?:AM|PM)(?:\s*[-–]\s*\d{1,2}(?::\d{2})?\s*(?:AM|PM))?\s+[A-Z]{2,4}\b/i)?.[0];
  const parsed = schedule && parseSchedule(schedule, source.timezoneAliases);
  if (!parsed) return [];
  const description = text.split(/ABOUT THIS WEBINAR|About (?:this|the) (?:webinar|event)/i)[1]?.split(/Key Takeaways|PRESENTER|Exclusive Sponsor|Register to/i)[0]?.trim() ?? '';
  const online = /webinar|online|virtual/i.test(text.slice(0, 1000));
  if (!description || !online) return [];
  const registration = [...body.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].find(m => /Register|Event Details/i.test(normalizeText(m[2])));
  return [{ name: normalizeText(title), ...parsed, scheduleEvidence: schedule, url: registration?.[1] ?? page.url,
    description, eventAttendanceMode: 'OnlineEventAttendanceMode', attendanceEvidence: text.match(/.{0,15}(?:live.{0,20}webinar|webinar|online|virtual).{0,25}/i)?.[0],
    speakerEvidence: /PRESENTER|Speaker:/i.test(text) ? 'Named presenter section' : null }];
}
