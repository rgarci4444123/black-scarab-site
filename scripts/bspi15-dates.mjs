export function previousCompletedDate(now) {
  const date=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
  const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-1);
  while([0,6].includes(d.getUTCDay()))d.setUTCDate(d.getUTCDate()-1);
  return d.toISOString().slice(0,10);
}
export function pendingTradingDates(after,through,mics,closures) {
  const dates=[];const d=new Date(after+'T12:00:00Z');
  while(true){d.setUTCDate(d.getUTCDate()+1);const date=d.toISOString().slice(0,10);if(date>through)break;
    if([0,6].includes(d.getUTCDay()))continue;
    if([...new Set(mics)].every(mic=>closures.some(c=>c.mic===mic&&c.from<=date&&c.through>=date&&c.sourceUrl&&c.evidence&&c.verifiedAt)))continue;
    dates.push(date);
  }
  return dates;
}
