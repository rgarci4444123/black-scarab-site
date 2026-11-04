import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";
import sharp from "sharp";

const cache = new Map();
function load(filename) {
  const file = resolve(filename);
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} }; cache.set(file, module);
  const code = ts.transpileModule(readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const require = createRequire(file);
  new Function("require", "module", "exports", code)(id => id.startsWith(".") ? load(resolve(dirname(file), `${id}.ts`)) : require(id), module, module.exports);
  return module.exports;
}
const { getEarningsCalendar, getCalendarWeeks, getMonthGroups } = load("lib/earnings/calendar.ts");
const { calendarIcal } = load("lib/earnings/ical.ts");
const { calendarArtwork, calendarPdf } = load("lib/earnings/export.ts");
const tickers = ["6954.T","6506.T","002747.SZ","TER","6268.T","300124.SZ","6861.T","CGNX","OUST","HSAI","ROK","SIE.DE","NXPI","6383.T","HEXA-B.ST","NVDA","TSLA","688836.SS","9880.HK","277810.KQ","108490.KQ","454910.KS","005380.KS","XPEV","ABBN.SW","SYM","ISRG","DE","6324.T","688017.SS","002050.SZ","601689.SS","6481.T","MOG.A","NOVT"];

test("monthly snapshots preserve the specified universe, index members and month-only reporting dates", async () => {
  for (const id of ["2026-10", "2026-11"]) {
    const calendar = await getEarningsCalendar(id);
    assert.deepEqual(calendar.companies.map(c => c.ticker).sort(), [...tickers].sort());
    assert.deepEqual(calendar.companies.filter(c => c.indexMember).map(c => c.ticker).sort(), tickers.slice(0, 15).sort());
    assert.ok(getMonthGroups(calendar).every(([date]) => date.startsWith(id)));
  }
  assert.equal(await getEarningsCalendar("2026-12"), null);
  assert.equal(await getEarningsCalendar("../../package"), null);
});

test("calendar weekdays match actual dates, including October Saturday results", async () => {
  const november = getCalendarWeeks(await getEarningsCalendar("2026-11"));
  assert.equal(november.length, 5);
  assert.equal(november[0][0].date, "2026-11-01");
  assert.equal(november[0][2].companies[0].ticker, "OUST");
  assert.equal(november[1][3].companies.length, 2);
  assert.equal(november[4][2], null);
  const october = getCalendarWeeks(await getEarningsCalendar("2026-10"));
  assert.equal(october[4][6].day, 31);
  assert.equal(october[4][6].companies[0].ticker, "688017.SS");
});

test("both editions produce exact portrait PNGs and a valid PDF container", async () => {
  for (const id of ["2026-10", "2026-11"]) {
    const artwork = await calendarArtwork(await getEarningsCalendar(id));
    const meta = await sharp(await sharp(artwork).png().toBuffer()).metadata();
    assert.equal(meta.width, 1080); assert.equal(meta.height, 1350);
    const pdf = await calendarPdf(artwork);
    assert.equal(pdf.subarray(0,8).toString(), "%PDF-1.4");
    assert.ok(pdf.toString("latin1").includes("/MediaBox [0 0 540 675]"));
  }
});

test("iCal has one all-day event per monthly report, no undated entries, and tentative estimates", async () => {
  const edition = await getEarningsCalendar("2026-11");
  const ics = calendarIcal(edition);
  const reports = getMonthGroups(edition).flatMap(([,companies]) => companies);
  assert.equal((ics.match(/BEGIN:VEVENT/g) ?? []).length, reports.length);
  assert.equal((ics.match(/STATUS:TENTATIVE/g) ?? []).length, 2);
  assert.ok(!ics.includes("ROBOTIS"));
  assert.ok(!ics.includes("202610"));
  assert.ok(ics.includes("DTSTART;VALUE=DATE:20261103\r\nDTEND;VALUE=DATE:20261104"));
  assert.ok(ics.split("\r\n").every(line => Buffer.byteLength(line) <= 75));
  assert.equal(new Set([...ics.matchAll(/^UID:(.+)$/gm)].map(match=>match[1])).size, reports.length);
});
