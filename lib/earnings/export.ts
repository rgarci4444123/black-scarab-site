import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { getMonthGroups, getCalendarWeeks, calendarDisplayName, type EarningsCalendar } from "./calendar";

const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;", "'": "&apos;" })[char]!);

export const artworkSize = { width: 1080, height: 1350 };

// The website uses its own responsive HTML calendar. This artwork is composed
// separately for sharing and supplies all image formats and the PDF.
export async function calendarArtwork(calendar: EarningsCalendar) {
  const logo = (await readFile(path.join(process.cwd(), "public/black-scarab-mark.png"))).toString("base64");
  const companyMarks: Record<string, { dataUri: string }> = JSON.parse(await readFile(path.join(process.cwd(), "data/earnings/company-marks.json"), "utf8"));
  const parts: string[] = [];
  const text = (value: string, x: number, y: number, size: number, color = "#1d1d1f", extra = "") => parts.push(`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" ${extra}>${escape(value)}</text>`);
  const rule = (y: number) => parts.push(`<path d="M64 ${y}H1016" stroke="#e1e3e6" stroke-width="1"/>`);
  parts.push(`<image x="61" y="48" width="30" height="37" href="data:image/png;base64,${logo}"/>`);
  text("BLACK SCARAB", 105, 75, 20, "#1d1d1f", 'font-weight="600" letter-spacing="1.6"');
  text("Physical AI Earnings Calendar", 64, 137, 27, "#6e6e73", 'letter-spacing="-0.4"');
  const month = new Date(Date.UTC(calendar.year, calendar.month - 1, 1)).toLocaleDateString("en-US", { month: "long", timeZone: "UTC" });
  text(month, 60, 233, 88, "#1d1d1f", 'font-weight="500" letter-spacing="-3.7"');
  text(String(calendar.year), 1016, 231, 36, "#397c78", 'text-anchor="end" letter-spacing="-1"');

  const weeks = getCalendarWeeks(calendar);
  const activeSunday = weeks.some(week => week[0]?.companies.length);
  const activeSaturday = weeks.some(week => week[6]?.companies.length);
  const sundayWidth = activeSunday ? 148 : 40;
  const saturdayWidth = activeSaturday ? 148 : 40;
  const weekdayWidth = (952 - sundayWidth - saturdayWidth) / 5;
  const widths = [sundayWidth, ...Array(5).fill(weekdayWidth), saturdayWidth];
  const starts = widths.map((_, index) => 64 + widths.slice(0, index).reduce((sum, width) => sum + width, 0));
  const measure = (value: string, size: number) => [...value].reduce((sum, char) => sum + (/[ilIjtf]/.test(char) ? 0.29 : /[MWmw]/.test(char) ? 0.79 : char === " " ? 0.27 : /[A-Z]/.test(char) ? 0.66 : 0.52) * size, 0);
  const wrap = (value: string, width: number, size: number) => {
    const lines: string[] = [];
    for (const word of value.split(" ")) {
      const last = lines[lines.length - 1];
      if (last && measure(`${last} ${word}`, size) <= width) lines[lines.length - 1] += ` ${word}`;
      else lines.push(word);
    }
    return lines;
  };
  const companyGap = (companyCount: number) => companyCount > 3 ? 4 : 16;
  const layouts = [28, 26].map(fontSize => {
    const lineHeight = fontSize + 3;
    const tickerSize = 23;
    const heights = weeks.map(week => Math.max(60, ...week.map((day, index) => day?.companies.length ? 54 + day.companies.reduce((sum, company) => sum + wrap(calendarDisplayName(company), widths[index] - 24, fontSize).length * lineHeight + tickerSize + 11, 0) + Math.max(0, day.companies.length - 1) * companyGap(day.companies.length) : 60)));
    return { fontSize, lineHeight, tickerSize, heights, extra: (940 - heights.reduce((sum, height) => sum + height, 0)) / weeks.length };
  });
  const layout = layouts.find(candidate => candidate.extra >= 0);
  if (!layout) throw new Error("This month needs a roomier grid layout before preparing its artwork.");
  const { fontSize, lineHeight, tickerSize, heights, extra } = layout;
  ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].forEach((day, index) => {
    const quiet = widths[index] === 40;
    text(quiet ? day.slice(0, 2) : day, starts[index] + (quiet ? 6 : 12), 292, quiet ? 14 : 18, quiet ? "#a5a5aa" : "#567c78", 'font-weight="500" letter-spacing="0.5"');
  });
  let y = 316;
  weeks.forEach((week, weekIndex) => {
    const height = heights[weekIndex] + extra;
    rule(y);
    week.forEach((day, index) => {
      const x = starts[index];
      const quiet = widths[index] === 40;
      if (index) parts.push(`<path d="M${x} ${y}v${height}" stroke="#f0f1f3"/>`);
      if (!day) return;
      text(String(day.day), x + (quiet ? 5 : 12), y + 32, quiet ? 20 : 24, "#96969b", 'font-weight="400"');
      let baseline = y + 70;
      for (const [companyIndex, company] of day.companies.entries()) {
        if (companyIndex > 0) baseline += companyGap(day.companies.length);
        for (const nameLine of wrap(calendarDisplayName(company), widths[index] - 24, fontSize)) {
          text(nameLine, x + 12, baseline, fontSize, "#1d1d1f", 'font-weight="400" letter-spacing="-0.35"');
          baseline += lineHeight;
        }
        const mark = companyMarks[company.ticker];
        if (mark) parts.push(`<image x="${x + 12}" y="${baseline - 20}" width="23" height="23" href="${mark.dataUri}" opacity="0.88"/>`);
        text(company.ticker + (company.status === "estimated" ? "*" : ""), x + 12 + (mark ? 29 : 0), baseline, mark ? 18 : tickerSize, "#86868b", 'letter-spacing="-0.2"');
        baseline += tickerSize + 11;
      }
    });
    y += height;
  });
  rule(y);
  const groups = getMonthGroups(calendar);
  const footerNotes: string[] = [];
  if (groups.some(([, companies]) => companies.some(company => company.status === "estimated"))) footerNotes.push("* Estimated");
  const tbd = calendar.companies.filter(company => calendar.tbdCompanyIds.includes(company.id));
  if (tbd.length) footerNotes.push(`Dates TBD: ${tbd.map(company => `${company.name} (${company.ticker})`).join(", ")}`);
  text(footerNotes.join(" · "), 64, 1308, 16, "#a1a1a6");
  text("blackscarab.ai", 1016, 1308, 16, "#636369", 'text-anchor="end" font-weight="500" letter-spacing="-0.15"');
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><rect width="1080" height="1350" fill="white"/><g font-family="Helvetica Neue, Arial, sans-serif">${parts.join("")}</g></svg>`);
}

// A small PDF image container avoids adding a PDF library to the application.
// PNG and PDF contain identical artwork, including the original brand mark.
export async function calendarPdf(svg: Buffer) {
  const jpg = await sharp(svg).resize(2160).jpeg({ quality: 95, chromaSubsampling: "4:4:4" }).toBuffer();
  const imageHeight = 2700;
  const pageWidth = 540; const pageHeight = 675;
  const stream = `q ${pageWidth} 0 0 ${pageHeight} 0 0 cm /Calendar Do Q`;
  const objects = [
    Buffer.from("<< /Type /Catalog /Pages 2 0 R >>"),
    Buffer.from("<< /Type /Pages /Kids [3 0 R] /Count 1 >>"),
    Buffer.from(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Calendar 4 0 R >> >> /Contents 5 0 R /Annots [7 0 R] >>`),
    Buffer.concat([Buffer.from(`<< /Type /XObject /Subtype /Image /Width 2160 /Height ${imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`), jpg, Buffer.from("\nendstream")]),
    Buffer.from(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`),
    Buffer.from("<< /Title (Physical AI Earnings Calendar) /Author (Black Scarab) >>"),
    Buffer.from("<< /Type /Annot /Subtype /Link /Rect [452 16 510 31] /Border [0 0 0] /F 4 /Contents (Visit Black Scarab) /A << /S /URI /URI (https://www.blackscarab.ai) >> >>"),
  ];
  const chunks = [Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "binary")];
  const offsets = [0]; let size = chunks[0].length;
  objects.forEach((object, index) => {
    offsets.push(size);
    const chunk = Buffer.concat([Buffer.from(`${index + 1} 0 obj\n`), object, Buffer.from("\nendobj\n")]);
    chunks.push(chunk); size += chunk.length;
  });
  chunks.push(Buffer.from(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map(offset => `${String(offset).padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 6 0 R >>\nstartxref\n${size}\n%%EOF`));
  return Buffer.concat(chunks);
}
