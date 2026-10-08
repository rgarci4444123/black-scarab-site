import { test } from "node:test";
import { strict as assert } from "node:assert";
import { createContentLoader } from "./content-source-loader.mjs";
const load = createContentLoader();
const { assertArticleTaxonomy, filterPublications, industryArchivePath, industryRegistry, articleTaxonomySchema } = load("lib/content-taxonomy.ts");
const manufacturing = { primaryIndustry: "manufacturing", relevantIndustries: ["mining"], technologies: ["humanoid-robotics"], applications: ["inspection"] };
const cross = { primaryIndustry: "cross-industry", technologies: ["humanoid-robotics"], applications: [] };
const records = [
  { slug: "factory", taxonomy: manufacturing, publishedAt: "2026-10-07T09:00:00-04:00", author: { name: "author" } },
  { slug: "platform", taxonomy: cross, publishedDate: "2026-10-06" },
  { slug: "external", taxonomy: cross },
];

test("reject incomplete, malformed and uncontrolled classification", () => {
  assert.doesNotThrow(() => assertArticleTaxonomy(cross));
  for (const value of [undefined, [], {}, { ...cross, primaryIndustry: ["mining", "manufacturing"] }, { ...cross, primaryIndustry: "Cross Industry" }, { ...cross, primaryIndustry: "constructor" }, { ...cross, technologies: ["NVIDIA"] }, { ...cross, applications: ["invented-task"] }, { ...cross, industries: [] }, { ...cross, technologies: ["humanoid-robotics", "humanoid-robotics"] }, { ...manufacturing, relevantIndustries: ["manufacturing"] }]) {
    assert.throws(() => assertArticleTaxonomy(value));
  }
});

test("industry relevance, combined facets, and Cross-Industry isolation", () => {
  assert.deepEqual(filterPublications(records, { industries: ["mining"] }), [records[0]]);
  assert.deepEqual(filterPublications(records, { industries: ["manufacturing"], technologies: ["humanoid-robotics"], applications: ["inspection"] }), [records[0]]);
  assert.deepEqual(filterPublications(records, { industries: ["manufacturing"], technologies: ["simulation"] }), []);
  assert.deepEqual(filterPublications(records, { industries: ["consumer-home", "mining"] }), [records[0]]);
  assert.deepEqual(filterPublications(records, { industries: ["construction"] }), []);
  assert.deepEqual(filterPublications(records, { industries: ["cross-industry"] }), records.slice(1));
});

test("date bounds are inclusive, retain object identities, and skip undated records", () => {
  const result = filterPublications(records, { publishedFrom: "2026-10-07", publishedThrough: "2026-10-07" });
  assert.deepEqual(result, [records[0]]);
  assert.equal(result[0], records[0]);
  assert.equal(result[0].author, records[0].author);
  assert.deepEqual(filterPublications(records), records);
  assert.deepEqual(filterPublications(records, { publishedThrough: "2026-10-06" }), [records[1]]);
  assert.throws(() => filterPublications(records, { publishedFrom: "bad-date" }));
  assert.throws(() => filterPublications(records, { publishedFrom: "2026-10-08", publishedThrough: "2026-10-07" }));
});

test("route identities stay stable and schema follows registry vocabulary", () => {
  assert.equal(industryArchivePath("warehousing-logistics"), "/industry/warehousing-logistics");
  assert.ok(Object.values(industryRegistry).every((industry) => !industry.archiveEnabled));
  assert.deepEqual(articleTaxonomySchema().properties.primaryIndustry.enum, Object.keys(industryRegistry));
});
