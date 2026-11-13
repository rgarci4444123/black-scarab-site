import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
import { createContentLoader } from "./content-source-loader.mjs";

const load = createContentLoader();
const { createGlossaryRelatedResolver } = load("lib/glossary-linking.ts");
const entries = JSON.parse(readFileSync("content/physical-ai-glossary/entries.json", "utf8"));
const path = "content/physical-ai-glossary/publication.json";
const release = JSON.parse(readFileSync(path, "utf8"));
const resolve = createGlossaryRelatedResolver(entries);
const unresolved = [];
let count = 0;
for (const article of entries) {
  const relatedLinks = resolve(article);
  const relatedIds = [...new Set(relatedLinks.flatMap((link) => link.targetId ? [link.targetId] : []))];
  assert.ok(relatedIds.length, `${article.id} needs relevant related links`);
  if (process.argv.includes("--check")) {
    assert.deepEqual(release.terms[article.id].relatedLinks, relatedLinks, article.id);
    assert.deepEqual(release.terms[article.id].relatedIds, relatedIds, article.id);
  } else {
    release.terms[article.id].relatedLinks = relatedLinks;
    release.terms[article.id].relatedIds = relatedIds;
  }
  count += relatedLinks.filter((link) => link.targetId).length;
  for (const link of relatedLinks) if (!link.targetId) unresolved.push({ id: article.id, term: article.term, label: link.label });
}
if (!process.argv.includes("--check")) writeFileSync(path, JSON.stringify(release, null, 2)+"\n");
const report = { articles: entries.length, relatedLinks: count, unresolvedLabels: unresolved.length,
  unresolvedPolicy: "Keep original labels as plain text when no specific, unambiguous inventory destination is established.", unresolved };
const reportFlag = process.argv.indexOf("--report");
if (reportFlag !== -1) writeFileSync(process.argv[reportFlag+1], JSON.stringify(report, null, 2)+"\n");
console.log(`${process.argv.includes("--check") ? "Verified" : "Configured"} ${count} related links across ${entries.length} terms; ${unresolved.length} supplied labels retained as plain text.`);
