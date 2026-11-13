import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createContentLoader } from "./content-source-loader.mjs";
const load = createContentLoader();
const { glossaryArticles, glossaryPublication, getGlossaryReadinessReport, getGlossaryHubArticlePaths, getGlossarySitemapEntries, getGlossaryStaticParams } = load("lib/glossary.ts");
const { glossaryTerms, getGlossaryAnchor } = load("lib/physical-ai-glossary.ts");
const { caseStudies } = load("lib/case-studies.ts");
const { newsUpdates } = load("lib/news.ts");
const pilot = JSON.parse(readFileSync("content/physical-ai-glossary/pilot.json", "utf8"));
const knownCoverage = new Set([...caseStudies.map((article) => `/insights/${article.slug}`), ...newsUpdates.map((article) => `/news/${article.slug}`)]);
if (glossaryArticles.length !== 444 || glossaryTerms.length !== 444) throw new Error("Expected 444 glossary entries");
const articlesByLegacyId = new Map(glossaryArticles.map((article) => [article.legacyId, article]));
for (const term of glossaryTerms) {
  const article = articlesByLegacyId.get(term.id);
  if (!article || article.anchor !== getGlossaryAnchor(term) || article.category !== term.category) throw new Error(`Legacy term mapping changed: ${term.id}`);
}
for (const article of glossaryArticles) {
  for (const path of glossaryPublication.terms[article.id].coveragePaths) {
    if (!knownCoverage.has(path)) throw new Error(`Unknown coverage link: ${path}`);
  }
}
const cohort = glossaryPublication.cohorts.find((cohort) => cohort.id === pilot.id);
if (!cohort || pilot.terms.length !== 20 || JSON.stringify(cohort.termIds) !== JSON.stringify(pilot.terms.map((term) => term.id))) throw new Error("Pilot and release cohort disagree");
const sitemap = getGlossarySitemapEntries(), paths = Object.values(getGlossaryHubArticlePaths());
if (sitemap.length !== paths.length || paths.length !== getGlossaryStaticParams().length) throw new Error("Hub, sitemap, and static routes disagree");
const report = getGlossaryReadinessReport();
if (process.argv.includes("--report")) {
  mkdirSync("output/glossary", { recursive: true });
  writeFileSync("output/glossary/readiness.json", JSON.stringify(report, null, 2) + "\n");
}
console.log(`Glossary valid: ${glossaryArticles.length} drafts, ${pilot.terms.length} pilot candidates, ${report.publicArticleCount} public articles.`);
console.log(`Release: ${glossaryPublication.enabled ? "enabled" : "disabled"}. Pilot: ${cohort.enabled ? "enabled" : "disabled"}.`);
