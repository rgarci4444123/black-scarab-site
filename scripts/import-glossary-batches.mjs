import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import { createHash } from "node:crypto";
import { createContentLoader } from "./content-source-loader.mjs";

const research = process.argv[2];
if (!research) throw new Error("Usage: node scripts/import-glossary-batches.mjs /path/to/glossary/research [--check]");
const check = process.argv.includes("--check");
const inventory = JSON.parse(readFileSync(join(research, "glossary-inventory.json"), "utf8")).rows;
const register = JSON.parse(readFileSync(join(research, "batches/register.json"), "utf8"));
const load = createContentLoader();
const { glossaryTerms, getGlossaryAnchor } = load("lib/physical-ai-glossary.ts");
const legacyByAnchor = new Map(glossaryTerms.map((term) => [getGlossaryAnchor(term), term]));
const submitted = new Map();
for (const batch of register.batches) {
  if (batch.status !== "Received") throw new Error(`Incomplete batch ${batch.batch}`);
  const data = JSON.parse(readFileSync(join(research, "batches", batch.data_file), "utf8"));
  for (const term of data.terms) {
    if (submitted.has(term.inventory_id) || term.status !== "Received") throw new Error(`Repeated or incomplete term ${term.inventory_id}`);
    submitted.set(term.inventory_id, { term, batch: batch.batch, archive: batch.archive });
  }
}
if (submitted.size !== 444 || inventory.length !== 444 || legacyByAnchor.size !== 444) throw new Error("Expected 444 unique inventory, submitted, and legacy terms");
const entries = inventory.map((row) => {
  const { term, batch, archive } = submitted.get(row.id) ?? {};
  const legacy = legacyByAnchor.get(row.existing_anchor);
  if (!term || !legacy) throw new Error(`Cannot map ${row.id} to the existing website`);
  const bodyMarkdown = term.content.replace(/^# \d+\. [^\n]+\n+/, "")
    .split(/\n\*\*Sources:\*\*/)[0].trim();
  const definition = bodyMarkdown.split(/\n\n/).find((part) => !part.startsWith("#"))?.replace(/\*\*/g, "");
  if (!definition) throw new Error(`No definition: ${row.id}`);
  return {
    id: row.id, legacyId: legacy.id, term: legacy.term, displayName: row.term,
    category: legacy.category, anchor: row.existing_anchor, slug: row.proposed_slug,
    aliases: [...new Set([...(legacy.aliases ?? []), ...(legacy.acronym ? [legacy.acronym] : [])])],
    headline: term.supplied_title, definition, bodyMarkdown, submittedMarkdown: term.content,
    sources: term.supplied_sources, suppliedRelatedTerms: term.supplied_related_terms,
    provenance: { batch, archive, submittedSha256: createHash("sha256").update(term.content).digest("hex") },
  };
});
// Source audits can update footer citations while preserving the submitted prose.
const sourceOverridesPath = resolve("content/physical-ai-glossary/source-overrides.json");
if (existsSync(sourceOverridesPath)) {
  const overrides = JSON.parse(readFileSync(sourceOverridesPath, "utf8"));
  if (overrides.version !== 1 || !overrides.terms || typeof overrides.terms !== "object") throw new Error("Invalid source overrides");
  for (const [id, override] of Object.entries(overrides.terms)) {
    const article = entries.find((entry) => entry.id === id);
    if (!article || override.submittedSha256 !== article.provenance.submittedSha256) throw new Error(`Source audit is stale or unknown: ${id}`);
    if (!Array.isArray(override.sources) || !override.sources.length || override.sources.some((source) => {
      try { return !source.label?.trim() || new URL(source.url).protocol !== "https:"; } catch { return true; }
    })) throw new Error(`Invalid source list: ${id}`);
    article.sources = override.sources.map(({ label, url }) => ({ label, url }));
  }
}
const filename = resolve("content/physical-ai-glossary/entries.json");
const output = JSON.stringify(entries, null, 2) + "\n";
if (check) {
  if (readFileSync(filename, "utf8") !== output) throw new Error("Imported glossary differs from archived batches");
} else {
  mkdirSync(resolve("content/physical-ai-glossary"), { recursive: true });
  writeFileSync(filename, output);
}
console.log(`${check ? "Verified" : "Imported"} ${entries.length} drafts; existing anchors and submitted text preserved.`);
