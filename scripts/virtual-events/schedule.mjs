const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function zonedIso(year, month, day, hour, minute, zone) {
  const local = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}T${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:00`;
  const naive = Date.parse(`${local}Z`);
  if (!Number.isFinite(naive)) return null;
  try {
    const fmt = new Intl.DateTimeFormat('sv-SE', { timeZone: zone, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23' });
    let utc = naive;
    for (let i=0;i<3;i++) utc += naive - Date.parse(`${fmt.format(new Date(utc)).replace(' ','T')}Z`);
    if (fmt.format(new Date(utc)).replace(' ','T') !== local) return null;
    if ([-3600000,3600000].some(delta => fmt.format(new Date(utc+delta)).replace(' ','T') === local)) return null;
    const offsetMinutes = (naive - utc) / 60000;
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const magnitude = Math.abs(offsetMinutes);
    return `${local}${sign}${String(Math.floor(magnitude/60)).padStart(2,'0')}:${String(magnitude%60).padStart(2,'0')}`;
  } catch { return null; }
}

export function parseSchedule(text, aliases = {}) {
  const iso = text.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})/);
  if (iso) return { startDate: iso[0], sourceTimezone: iso[0].match(/Z|[+-]\d{2}:\d{2}$/)[0] };
  const datePattern = new RegExp(`(${months.join('|')})\\s+(\\d{1,2}),?\\s+(20\\d{2})`, 'i');
  const date = text.match(datePattern); if (!date) return null;
  const afterDate = text.slice(date.index + date[0].length);
  // Only explicit source timezone tokens are accepted. Ambiguous regional abbreviations need registry aliases.
  const time = afterDate.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)(?:\s*[-–]\s*\d{1,2}(?::\d{2})?\s*(?:AM|PM))?\s+([A-Za-z_]+(?:\/[A-Za-z_]+)?)/i);
  if (!time) return null;
  const label = time[4];
  const explicit = { UTC:'UTC', GMT:'UTC', ET:'America/New_York', PT:'America/Los_Angeles', EDT:'Etc/GMT+4', EST:'Etc/GMT+5', PDT:'Etc/GMT+7', PST:'Etc/GMT+8', CET:'Etc/GMT-1', CEST:'Etc/GMT-2' };
  const zone = aliases[label] || explicit[label.toUpperCase()] || (label.includes('/') ? label : null);
  if (!zone) return null;
  const hour12 = Number(time[1]); const minute = Number(time[2] ?? 0);
  if (hour12 < 1 || hour12 > 12 || minute > 59) return null;
  const startDate = zonedIso(Number(date[3]), months.findIndex(m => m.toLowerCase() === date[1].toLowerCase()) + 1, Number(date[2]), hour12%12 + (time[3].toUpperCase() === 'PM' ? 12 : 0), minute, zone);
  return startDate ? { startDate, sourceTimezone: label === 'ET' || label === 'PT' ? zone : label } : null;
}
