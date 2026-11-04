import { readFile, writeFile, copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const id = process.argv[2];
if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(id ?? "")) throw new Error("Usage: node scripts/prepare-earnings-edition.mjs YYYY-MM [--replace-prepared]");
const base = path.join(process.cwd(), "data/earnings");
const [source, registry] = await Promise.all(["current.json", "editions.json"].map(async file => JSON.parse(await readFile(path.join(base, file), "utf8"))));
const existing = registry.editions.find(edition => edition.id === id);
if (existing?.status === "published") throw new Error("Published editions are preserved. Prepare a new month instead.");
if (existing && !process.argv.includes("--replace-prepared")) throw new Error("Edition already exists. To revise this draft, use --replace-prepared; a versioned copy will be retained.");
if (source.companies.length !== 35 || new Set(source.companies.map(company => company.id)).size !== 35 || source.companies.filter(company => company.indexMember).length !== 15) throw new Error("The source must preserve 35 companies and 15 index constituents.");
const reports = source.companies.filter(company => company.date?.startsWith(`${id}-`));
if (!reports.length) throw new Error("No reporting dates prepared for this month; no empty edition was added.");
for (const company of reports) if (!["confirmed", "estimated"].includes(company.status) || !company.sourceUrl || !company.checkedDate) throw new Error(`Date verification is missing: ${company.ticker}`);
const [year, month] = id.split("-").map(Number);
const label = new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
const destination = path.join(base, "editions", `${id}.json`);
if (existing) {
  await mkdir(path.join(base, "revisions"), { recursive: true });
  await copyFile(destination, path.join(base, "revisions", `${id}-${Date.now()}.json`));
}
const edition = { id, year, month, label, updatedAt: source.updatedAt, tbdCompanyIds: source.tbdByMonth?.[id] ?? [], companies: source.companies };
await writeFile(destination, JSON.stringify(edition, null, 2) + "\n");
if (!existing) registry.editions.push({ id, label, status: "prepared" });
registry.editions.sort((a, b) => a.id.localeCompare(b.id));
await writeFile(path.join(base, "editions.json"), JSON.stringify(registry, null, 2) + "\n");
console.log(`Prepared ${label}. Review /markets/earnings-calendar?month=${id}; PNG, PDF and iCal use this snapshot. The selected current month and publication status have not changed.`);
