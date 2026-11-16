import { readFile, writeFile, mkdir, open, unlink, rename } from 'node:fs/promises';
import { createContentLoader } from '../content-source-loader.mjs';
import { fetchPage, linkedPages, normalizeText } from './network.mjs';
import { extractEvents, htmlEvent, toCandidate, feedLinks } from './extract.mjs';
import { braveSearch, discoveryQueries, extractWithOpenAI } from './providers.mjs';
import { parseSchedule } from './schedule.mjs';
const core = createContentLoader()('lib/virtual-events.ts');
const dataDirectory = 'data/virtual-events';
export async function readJson(file) { return JSON.parse(await readFile(file, 'utf8')); }
export async function writeJson(file, value) {
  const temporary = `${file}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`);
  await rename(temporary, file);
}

export { verifyCandidate } from './evidence.mjs';
import { verifyCandidate } from './evidence.mjs';

export async function scan({ mode = 'daily', sourceId, getPage = fetchPage, env = process.env, now = new Date() } = {}) {
  await mkdir(dataDirectory, { recursive: true });
  const lockPath = `${dataDirectory}/.scan.lock`;
  const lock = await open(lockPath, 'wx').catch(() => { throw new Error('Another virtual-events operation is running; remove stale .scan.lock only after checking for an active process'); });
  try {
    const sources = await readJson(`${dataDirectory}/sources.json`);
    const records = await readJson(`${dataDirectory}/events.json`);
    const organizerLeads = await readJson(`${dataDirectory}/organizer-leads.json`);
    const report = { startedAt: now.toISOString(), mode, sourceChecks: [], eventChecks: [], search: { status: 'not-requested', queries: 0 }, extraction: env.OPENAI_API_KEY && env.VIRTUAL_EVENTS_OPENAI_MODEL ? 'configured' : 'not-configured', errors: [] };
    let modelCalls = 0;
    const maxModelCalls = 24;
    const pageCache = new Map();
    const retrieve = url => { if (!pageCache.has(url)) pageCache.set(url, getPage(url)); return pageCache.get(url); };
    const extraPages = new Map();
    if (mode === 'broad') {
      report.search.status = env.BRAVE_SEARCH_API_KEY ? 'ok' : 'not-configured';
      for (const query of env.BRAVE_SEARCH_API_KEY ? discoveryQueries(now) : []) {
        try {
          const result = await braveSearch(query, env); report.search.queries++;
          for (const lead of result.results) {
            let url; try { url = new URL(lead.url); } catch { continue; }
            if (url.protocol !== 'https:') continue;
            const source = sources.find(s => s.domains.some(d => url.hostname === d || url.hostname.endsWith(`.${d}`)));
            if (source) extraPages.set(url.href, source.id);
            else if (!organizerLeads.some(l => l.url === url.href)) organizerLeads.push({ ...lead, discoveredAt: now.toISOString(), status: 'needs-official-organizer-review' });
          }
        } catch (error) { report.search.status = 'failed'; report.errors.push({ stage: 'search', message: error.message }); }
      }
    }
    const selectedSources = sources.filter(s => !sourceId || s.id === sourceId);
    async function scanSource(source) {
      const roots = source.sources.length ? source.sources : [source.website];
      const queue = [...new Set([...roots, ...[...extraPages].filter(([,id]) => id === source.id).map(([url]) => url),
        ...records.filter(e => e.organizer === source.name && !['rejected','expired','canceled'].includes(e.status)).map(e => e.sourceUrl)])];
      const visited = new Set();
      // Bounded depth and count keep the daily scan predictable. Registry URLs are checked first.
      for (let index = 0; index < queue.length && index < 12; index++) {
        const url = queue[index]; if (visited.has(url)) continue; visited.add(url);
        try {
          const page = await retrieve(url);
          const check = { source: source.id, url, status: 'ok', eventsExtracted: 0 }; report.sourceChecks.push(check);
          if (index < roots.length) queue.push(...(/rss|atom|xml/.test(page.contentType) ? feedLinks(page, source.domains) : linkedPages(page.body, page.url, source.domains)).filter(u => !queue.includes(u)).slice(0, 8));
          let details = [...extractEvents(page), ...htmlEvent(page, source)];
          // Model sees retrieved evidence only. Dates are parsed independently from its exact excerpt.
          if (modelCalls < maxModelCalls && env.OPENAI_API_KEY && env.VIRTUAL_EVENTS_OPENAI_MODEL && /webinar|workshop|event|virtual/i.test(page.url) && /<h1\b/i.test(page.body)) {
            modelCalls++;
            const result = await extractWithOpenAI(page, env);
            for (const lead of result.events) {
              const schedule = parseSchedule(lead.schedule, source.timezoneAliases);
              if (!schedule) continue;
              const extracted = { name: lead.title, ...schedule, description: lead.description, editorialSummary: lead.summary,
                scheduleEvidence: lead.schedule, attendanceEvidence: lead.attendance, eventAttendanceMode: /online|webinar|virtual|zoom|teams/i.test(lead.attendance) ? 'OnlineEventAttendanceMode' : '',
                cost: /\bfree\b|no cost/i.test(lead.cost) ? 'free' : /[$€£]|\bpaid\b/i.test(lead.cost) ? 'paid' : 'unknown', price: /[$€£]/.test(lead.cost) ? lead.cost : null, costEvidence: lead.cost || null };
              const structured = details.find(d => normalizeText(d.name) === lead.title);
              if (structured) structured.editorialSummary = lead.summary;
              else details.push(extracted);
            }
          }
          for (const detail of details) {
            const event = toCandidate(detail, source, page, now);
            if (!event) continue;
            const previous = records.find(e => e.duplicateKey === event.duplicateKey || e.sourceUrl === event.sourceUrl || e.aliases.includes(event.sourceUrl));
            // Preserve human editorial fields when organizer facts have not changed.
            if (previous && previous.officialTitle === event.officialTitle && previous.startUtc === event.startUtc
              && previous.endUtc === event.endUtc && previous.cost === event.cost && previous.price === event.price
              && core.canonicalUrl(previous.url) === core.canonicalUrl(event.url)
              && previous.evidence.description === event.evidence.description) {
              event.summary = previous.summary; event.displayTitle = previous.displayTitle; event.category = previous.category; event.format = previous.format;
            }
            await verifyCandidate(event, retrieve, now);
            core.reconcile(records, event); check.eventsExtracted++;
          }
        } catch (error) {
          report.sourceChecks.push({ source: source.id, url, status: 'failed', error: error.message });
          console.warn(JSON.stringify({ source: source.id, url, error: error.message }));
        }
      }
    }
    for (let i = 0; i < selectedSources.length; i += 4) {
      await Promise.all(selectedSources.slice(i, i + 4).map(scanSource));
    }
    for (const event of records.filter(e => (!sourceId || sources.find(s => s.id === sourceId)?.name === e.organizer) && !['expired','rejected','canceled'].includes(e.status))) {
      await verifyCandidate(event, retrieve, now);
      report.eventChecks.push({ id: event.id, verified: core.verified(event, now), error: event.verification.error });
    }
    core.expireEvents(records, now);
    await writeJson(`${dataDirectory}/events.json`, records);
    await writeJson(`${dataDirectory}/organizer-leads.json`, organizerLeads);
    report.modelCalls = modelCalls;
    await writeJson(`${dataDirectory}/scan-status.json`, report);
    console.log(JSON.stringify({ sourcesChecked: report.sourceChecks.length, failedChecks: report.sourceChecks.filter(s => s.status === 'failed').length, candidates: records.filter(e => e.status === 'candidate').length, search: report.search, extraction: report.extraction }));
    return report;
  } finally { await lock.close(); await unlink(lockPath); }
}

export async function reviewBatch(now = new Date()) {
  const records = await readJson(`${dataDirectory}/events.json`);
  const batch = records.filter(e => e.status === 'candidate' && e.score >= 65 && e.reviewNotifiedFingerprint !== core.fingerprint(e))
    .sort((a,b) => b.score - a.score || Date.parse(a.startUtc) - Date.parse(b.startUtc)).slice(0, 20);
  const escape = s => String(s).replace(/[\n\r]/g, ' ').replace(/[<>]/g, '');
  const lines = [`# Virtual events review`, ``, `Prepared ${now.toISOString()}. ${batch.length} new or materially changed candidates.`, ``];
  for (const event of batch) {
    lines.push(`## ${escape(event.displayTitle)}`, '', `ID: \`${event.id}\` · Score: ${event.score}/100 · ${escape(event.organizer)}`, '',
      `${event.startUtc} · Source zone: ${escape(event.sourceTimezone)} · ${event.cost}${event.price ? `: ${escape(event.price)}` : ''}`, '',
      event.summary ? escape(event.summary) : 'Editorial summary required before approval (25 to 45 original words, two sentences).', '',
      `Official source: ${event.sourceUrl}`, '', `Event details: ${event.url}`, '',
      `Verification: ${core.verified(event, now) ? 'passed' : event.verification.error ?? 'incomplete'}`, '',
      ...event.rationale.map(r => `- ${escape(r)}`), '', `Source programme: ${escape(event.evidence.description)}`, '');
    event.reviewNotifiedFingerprint = core.fingerprint(event);
  }
  await writeFile('docs/virtual-events/review-batch.md', `${lines.join('\n')}\n`);
  if (batch.length) await writeJson(`${dataDirectory}/events.json`, records);
  console.log(`Review batch: ${batch.length} new or changed candidates.`);
  return batch;
}
