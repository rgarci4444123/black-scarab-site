import { readFileSync, writeFileSync } from "node:fs";
import { createContentLoader } from "./content-source-loader.mjs";

// This command can record reviews or mark a draft reviewed. It cannot publish.
const load = createContentLoader();
const { glossaryRevision, glossaryEditorialIssues, validateGlossary } = load("lib/glossary-publication.ts");
const entries = JSON.parse(readFileSync("content/physical-ai-glossary/entries.json", "utf8"));
const filename = "content/physical-ai-glossary/publication.json";
const release = JSON.parse(readFileSync(filename, "utf8"));
const [command, argument] = process.argv.slice(2);
const ids = new Set(entries.map((entry) => entry.id));
if (!argument || !["record", "mark-reviewed"].includes(command)) {
  throw new Error("Usage: node scripts/review-glossary.mjs record /path/to/review.json | mark-reviewed BSG-317");
}
if (command === "record") {
  const evidence = JSON.parse(readFileSync(argument, "utf8"));
  const article = entries.find((entry) => entry.id === evidence.id);
  if (!article || !["editorial", "sources", "searchIntent", "links"].includes(evidence.kind)) throw new Error("Unknown article or review kind");
  const control = release.terms[article.id];
  if (control.status === "published") throw new Error("Return a published article to draft before changing its reviews");
  if (evidence.revision !== glossaryRevision(article, control)) throw new Error("Review refers to a different content revision. Run report:glossary again");
  if (![evidence.reviewer, evidence.notes].every((value) => typeof value === "string" && value.trim())) throw new Error("Reviewer and evidence notes are required");
  const review = { reviewer: evidence.reviewer, notes: evidence.notes, revision: evidence.revision, reviewedAt: new Date().toISOString() };
  if (evidence.kind === "sources") {
    if (!Array.isArray(evidence.checkedUrls) || article.sources.some((source) => !evidence.checkedUrls.includes(source.url))) throw new Error("Explicitly list all verified source URLs");
    review.checkedUrls = evidence.checkedUrls;
  }
  if (evidence.kind === "searchIntent") {
    if (!["new-term-page", "reuse-existing-guide"].includes(evidence.decision) || !Array.isArray(evidence.existingCoverage)) throw new Error("Document the search intent decision and existing coverage checked");
    review.decision = evidence.decision; review.existingCoverage = evidence.existingCoverage;
  }
  control.status = "draft";
  control.reviews[evidence.kind] = review;
} else {
  const article = entries.find((entry) => entry.id === argument);
  if (!article) throw new Error("Unknown glossary ID");
  const control = release.terms[article.id];
  if (control.status === "published") throw new Error("This command cannot change published articles");
  const issues = glossaryEditorialIssues(article, control, ids);
  if (issues.length) throw new Error(issues.join("\n"));
  control.status = "reviewed";
}
validateGlossary(entries, release);
writeFileSync(filename, JSON.stringify(release, null, 2) + "\n");
console.log("Review saved. Publication settings were not changed.");
