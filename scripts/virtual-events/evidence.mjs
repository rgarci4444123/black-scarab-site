import { normalizeText, fetchPage } from './network.mjs';
import { parseSchedule } from './schedule.mjs';
import { calendarEvents } from './calendar.mjs';

export function jsonLdEvents(html) {
  const result = [];
  const walk = node => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if ([].concat(node['@type'] ?? []).some(t => /^(Event|EducationEvent|BusinessEvent)$/.test(t))) result.push(node);
    Object.entries(node).forEach(([key, value]) => { if (key !== '@context' && value && typeof value === 'object') walk(value); });
  };
  for (const script of html.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { walk(JSON.parse(script[1])); } catch { /* Malformed JSON-LD does not verify an event. */ }
  }
  return result;
}

export async function verifyCandidate(event, getPage = fetchPage, now = new Date()) {
  try {
    if (/T00:00(?::00(?:\.0+)?)?(?:Z|[+-]\d{2}:\d{2})$/.test(event.originalStart) && !/\b(?:12(?::00)?\s*AM|00:00)\b/i.test(event.evidence.schedule.replace(/\d{4}-\d{2}-\d{2}T[^ ]+/g, ''))) throw new Error('Midnight calendar date needs an explicit source start-time quote');
    const source = await getPage(event.sourceUrl);
    const structured = /BEGIN:VCALENDAR/.test(source.body) ? calendarEvents(source.body) : jsonLdEvents(source.body);
    const sourceText = `${normalizeText(source.text)} ${structured.map(d => normalizeText([d.name, d.startDate, d.endDate, d.description, d.eventAttendanceMode, JSON.stringify(d.location)].join(' '))).join(' ')}`;
    if (new URL(source.url).hostname !== new URL(event.sourceUrl).hostname) throw new Error('Official source redirected to a different host; source review required');
    if (!event.evidence.title || !sourceText.includes(normalizeText(event.evidence.title))
      || !event.evidence.schedule || !sourceText.includes(normalizeText(event.evidence.schedule))) throw new Error('Title or schedule changed; fresh extraction and approval required');
    if (!event.evidence.attendance || !sourceText.includes(normalizeText(event.evidence.attendance))) throw new Error('Online attendance evidence no longer present');
    if (!event.evidence.description || !sourceText.includes(normalizeText(event.evidence.description))) throw new Error('Organizer programme changed; editorial review required');
    if (event.evidence.cost && !sourceText.includes(normalizeText(event.evidence.cost))) throw new Error('Organizer pricing evidence changed');
    const target = structured.find(d => normalizeText(d.name) === event.officialTitle);
    if (target && /EventCancelled/.test(target.eventStatus ?? '')) {
      event.status = 'canceled'; throw new Error('Organizer canceled this event');
    }
    const parsedStart = target?.startDate || parseSchedule(event.evidence.schedule)?.startDate;
    if (!parsedStart || Date.parse(parsedStart) !== Date.parse(event.startUtc)) throw new Error('Organizer changed the start time or source time is unverified');
    if (target && (target.offers || target.isAccessibleForFree !== undefined || event.cost !== 'unknown')) {
      const offer = [].concat(target.offers ?? [])[0];
      const free = target.isAccessibleForFree === true || (offer?.price !== undefined && Number(offer.price) === 0);
      const cost = free ? 'free' : offer?.price !== undefined ? 'paid' : 'unknown';
      const price = cost === 'paid' ? `${offer.priceCurrency ?? ''} ${offer.price}`.trim() : null;
      if (cost !== event.cost || price !== event.price) throw new Error('Organizer changed event pricing');
    }
    if (target?.endDate && Date.parse(target.endDate) !== Date.parse(event.endUtc)) throw new Error('Organizer changed the end time');
    const eventContent = normalizeText(source.body.replace(/^[\s\S]*?(<h1\b)/i, '$1'));
    if (/\b(?:event|webinar|session) (?:has been |is )?cancel(?:l)?ed\b|\bregistration (?:is )?closed\b/i.test(eventContent)) {
      event.status = 'canceled'; throw new Error('Organizer canceled event or closed registration');
    }
    if (/\b(?:now available on.demand|watch (?:the )?recording|this (?:webinar|event) has ended)\b/i.test(eventContent.slice(0, 2500))) throw new Error('Event is now on demand or concluded');
    await getPage(event.url);
    event.verification = { ...event.verification, registration: true, checkedAt: now.toISOString(), error: null };
    if (['official','online','schedule','registration','live'].every(k => event.verification[k] === true)) event.lastVerifiedAt = now.toISOString();
  } catch (error) {
    event.verification = { ...event.verification, registration: false, checkedAt: now.toISOString(), error: error.message };
    event.changes = [...new Set([...event.changes, error.message])];
  }
  return event;
}
