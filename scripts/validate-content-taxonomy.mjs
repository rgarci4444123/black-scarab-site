import { strict as assert } from "node:assert";
import { createContentLoader } from "./content-source-loader.mjs";

const load = createContentLoader();
const { assertArticleTaxonomy, industryRegistry, technologyRegistry, applicationRegistry } = load("lib/content-taxonomy.ts");
const { newsUpdates } = load("lib/news.ts");
const { caseStudies } = load("lib/case-studies.ts");
const { insights } = load("app/insights-data.ts");

for (const registry of [industryRegistry, technologyRegistry, applicationRegistry]) {
  for (const [slug, term] of Object.entries(registry)) {
    assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(typeof term.label, "string");
    assert.ok(term.label.trim().length);
  }
}
const keys = new Set();
for (const [type, articles] of [["news", newsUpdates], ["insight", caseStudies]]) {
  for (const article of articles) {
    const key = `${type}:${article.slug}`;
    assert.ok(!keys.has(key), `Duplicate article key ${key}`);
    keys.add(key);
    assertArticleTaxonomy(article.taxonomy, key);
  }
}
const byPath = new Map(caseStudies.map((article) => [`/insights/${article.slug}`, article]));
const paths = new Set();
for (const insight of insights) {
  assert.ok(!paths.has(insight.href), `Duplicate archive URL ${insight.href}`);
  paths.add(insight.href);
  assertArticleTaxonomy(insight.taxonomy, insight.href);
  if (insight.kind === "internal") {
    const article = byPath.get(insight.href);
    assert.ok(article, `Unknown internal Insight ${insight.href}`);
    assert.deepEqual(insight.taxonomy, article.taxonomy, `Lost archive classification ${insight.href}`);
  }
}
assert.equal(insights.filter((article) => article.kind === "internal").length, caseStudies.length);
console.log(`Validated taxonomy for ${newsUpdates.length} News reports, ${caseStudies.length} internal Insights and ${insights.length - caseStudies.length} external archive records.`);
