import { readFile } from "node:fs/promises";
import path from "node:path";

export type EarningsCompany = {
  id: string;
  name: string;
  ticker: string;
  indexMember: boolean;
  date: string | null;
  status: "confirmed" | "estimated" | "pending" | "no-quarterly-release";
  sourceUrl: string | null;
  sourceTitle: string | null;
  checkedDate: string;
  note: string;
};
export type EarningsCalendar = {
  id: string;
  year: number;
  month: number;
  label: string;
  updatedAt: string;
  tbdCompanyIds: string[];
  companies: EarningsCompany[];
};
export type EditionRegistry = {
  current: string;
  editions: { id: string; label: string; status: "prepared" | "published" }[];
};
const dataPath = path.join(process.cwd(), "data/earnings");

export async function getEditionRegistry(): Promise<EditionRegistry> {
  return JSON.parse(await readFile(path.join(dataPath, "editions.json"), "utf8"));
}

// Archived snapshots are shared by the website, image and PDF. No live date lookup
// can silently rewrite an earlier edition.
export async function getEarningsCalendar(id?: string): Promise<EarningsCalendar | null> {
  const registry = await getEditionRegistry();
  const selected = id ?? registry.current;
  if (!registry.editions.some(edition => edition.id === selected)) return null;
  const calendar: EarningsCalendar = JSON.parse(await readFile(path.join(dataPath, "editions", `${selected}.json`), "utf8"));
  const source: { companies: EarningsCompany[] } = JSON.parse(await readFile(path.join(dataPath, "current.json"), "utf8"));
  const expected = source.companies.map(c => c.id).sort().join(",");
  if (calendar.id !== selected || calendar.companies.length !== 35 || new Set(calendar.companies.map(c => c.id)).size !== 35 || calendar.companies.map(c => c.id).sort().join(",") !== expected || calendar.companies.filter(c => c.indexMember).length !== 15) {
    throw new Error("An edition must preserve all 35 unique companies and 15 index constituents.");
  }
  for (const company of calendar.companies) {
    if (company.date && (!/^\d{4}-\d{2}-\d{2}$/.test(company.date) || !["confirmed", "estimated"].includes(company.status) || !company.sourceUrl)) throw new Error(`Invalid date evidence: ${company.ticker}`);
  }
  return calendar;
}

export function getMonthGroups(calendar: EarningsCalendar) {
  const groups = new Map<string, EarningsCompany[]>();
  for (const company of calendar.companies.filter(c => c.date?.startsWith(`${calendar.id}-`)).sort((a,b) => a.date!.localeCompare(b.date!))) {
    const date = company.date!;
    groups.set(date, [...(groups.get(date) ?? []), company]);
  }
  return [...groups.entries()];
}

export function getCalendarWeeks(calendar: EarningsCalendar) {
  const firstWeekday = new Date(Date.UTC(calendar.year, calendar.month - 1, 1)).getUTCDay();
  const lastDay = new Date(Date.UTC(calendar.year, calendar.month, 0)).getUTCDate();
  const byDate = new Map(getMonthGroups(calendar));
  const cells = Array.from({ length: Math.ceil((firstWeekday + lastDay) / 7) * 7 }, (_, index) => {
    const day = index - firstWeekday + 1;
    if (day < 1 || day > lastDay) return null;
    const date = `${calendar.id}-${String(day).padStart(2, "0")}`;
    return { day, date, companies: byDate.get(date) ?? [] };
  });
  return Array.from({ length: cells.length / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7));
}

const displayNames: Record<string, string> = {
  "6506.T": "Yaskawa", "300124.SZ": "Inovance", "ISRG": "Intuitive",
  "688017.SS": "Leader Drive", "002050.SZ": "Sanhua", "601689.SS": "Tuopu",
  "NXPI": "NXP", "002747.SZ": "Estun", "6324.T": "Harmonic Drive", "688836.SS": "Unitree", "005380.KS": "Hyundai", "ROK": "Rockwell",
};
export function calendarDisplayName(company: EarningsCompany) { return displayNames[company.ticker] ?? company.name; }
