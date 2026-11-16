import { zonedIso } from './schedule.mjs';

export function calendarEvents(body) {
  // Accept UTC or explicit TZID; reject floating/all-day times and recurring series.
  const unfolded = body.replace(/\r?\n[ \t]/g, '');
  const out = [];
  for (const block of unfolded.matchAll(/BEGIN:VEVENT([\s\S]*?)END:VEVENT/g)) {
    if (/\nRRULE:/.test(block[1])) continue;
    const fields = {};
    for (const line of block[1].split(/\r?\n/)) {
      const index = line.indexOf(':');
      if (index > 0) fields[line.slice(0, index)] = line.slice(index + 1).replace(/\\n/g, ' ').replace(/\\([,;\\])/g, '$1');
    }
    const startKey = Object.keys(fields).find(k => k === 'DTSTART' || k.startsWith('DTSTART;'));
    const endKey = Object.keys(fields).find(k => k === 'DTEND' || k.startsWith('DTEND;'));
    const parse = key => {
      if (!key) return null;
      const value = fields[key];
      const m = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/);
      if (!m) return null;
      const local = `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}`;
      if (m[7]) return { iso: `${local}Z`, zone: 'UTC' };
      const zone = key.match(/TZID=([^;:]+)/)?.[1];
      if (!zone) return null;
      try {
        const iso = zonedIso(Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4]), Number(m[5]), zone);
        return iso ? { iso, zone } : null;
      } catch { return null; }
    };
    const start = parse(startKey); if (!start) continue;
    const attendance = /^\s*(?:online|virtual|webinar|https:\/\/(?:[a-z0-9.-]+\.)?(?:zoom\.us|teams\.microsoft\.com|meet\.google\.com))\b/i.test(fields.LOCATION ?? '') ? fields.LOCATION
      : fields.DESCRIPTION?.match(/(?:held|attend|join|participate)\s+(?:entirely\s+)?(?:online|virtually)|(?:online|virtual)\s+(?:attendance|participation|webinar|workshop|event)/i)?.[0];
    if (!attendance) continue;
    out.push({ name: fields.SUMMARY, startDate: start.iso, endDate: parse(endKey)?.iso, sourceTimezone: start.zone,
      url: fields.URL, description: fields.DESCRIPTION, eventStatus: fields.STATUS === 'CANCELLED' ? 'EventCancelled' : 'EventScheduled',
      eventAttendanceMode: 'OnlineEventAttendanceMode', attendanceEvidence: attendance,
      location: { '@type': 'VirtualLocation', url: fields.URL }, uid: fields.UID, rawSchedule: fields[startKey] });
  }
  return out;
}

