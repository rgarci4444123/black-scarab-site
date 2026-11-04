import { getMonthGroups, type EarningsCalendar } from "./calendar";

const escapeText = (value: string) => value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");

// RFC 5545 lines are folded at 75 octets without splitting UTF-8 characters.
function fold(line: string) {
  const lines: string[] = [];
  let current = "";
  for (const character of line) {
    if (Buffer.byteLength(current + character, "utf8") > 75) { lines.push(current); current = " "; }
    current += character;
  }
  lines.push(current);
  return lines.join("\r\n");
}

export function calendarIcal(calendar: EarningsCalendar) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Black Scarab//Physical AI Earnings Calendar//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", `X-WR-CALNAME:${escapeText(`Black Scarab Earnings: ${calendar.label}`)}`];
  for (const [date, companies] of getMonthGroups(calendar)) {
    const nextDay = new Date(`${date}T00:00:00Z`);
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);
    for (const company of companies) {
      lines.push("BEGIN:VEVENT", `UID:earnings-${company.id}-${date}@blackscarab.ai`, `DTSTAMP:${calendar.updatedAt.replace(/-/g, "")}T000000Z`, `DTSTART;VALUE=DATE:${date.replace(/-/g, "")}`, `DTEND;VALUE=DATE:${nextDay.toISOString().slice(0, 10).replace(/-/g, "")}`, `SUMMARY:${escapeText(`${company.name} (${company.ticker}) earnings${company.status === "estimated" ? " (estimated)" : ""}`)}`, `STATUS:${company.status === "estimated" ? "TENTATIVE" : "CONFIRMED"}`, "TRANSP:TRANSPARENT", `URL:${company.sourceUrl}`, "END:VEVENT");
    }
  }
  lines.push("END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
