import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { createContentLoader } from "./content-source-loader.mjs";
const load = createContentLoader();
const policy = load("lib/glossary-publication.ts");
const api = load("lib/glossary.ts");
const deployed = JSON.parse(readFileSync("content/physical-ai-glossary/publication.json", "utf8"));
const original = structuredClone(deployed);
original.enabled = false;
original.approval = null;
original.originVerification = null;
original.cohorts.forEach((cohort) => { cohort.enabled = false; });
Object.values(original.terms).forEach((control) => { control.status = "draft"; control.reviews = {}; control.publishedAt = null; control.modifiedAt = null; });
Object.assign(api.glossaryPublication, structuredClone(original));
const articles = api.glossaryArticles;
const now = new Date("2026-11-13T23:00:00Z");
const clone = (value) => structuredClone(value);

function approvedFixture() {
  const release = clone(original);
  const article = clone(articles.find((article) => article.id === "BSG-317"));
  const control = release.terms[article.id];
  const revision = policy.glossaryRevision(article, control);
  const review = { reviewer: "Test reviewer", reviewedAt: "2026-11-01T12:00:00Z", revision, notes: "Test fixture only" };
  control.reviews = {
    editorial: { ...review }, sources: { ...review, checkedUrls: article.sources.map((source) => source.url) },
    searchIntent: { ...review, decision: "new-term-page", existingCoverage: [] }, links: { ...review },
  };
  control.status = "published";
  control.publishedAt = "2026-11-02T12:00:00Z";
  release.enabled = true;
  release.originVerification = { origin: release.canonicalOrigin, verifiedBy: "Test owner", verifiedAt: "2026-11-01T12:00:00Z", evidence: "Test fixture only" };
  release.approval = { approvedBy: "Test owner", approvedAt: "2026-11-01T12:00:00Z" };
  release.cohorts[0].enabled = true;
  return { release, article, control, entries: articles.map((item) => item.id === article.id ? article : clone(item)) };
}

test("unreleased configuration exposes zero new routes, sitemap URLs, or hub article links", () => {
  assert.equal(articles.length, 444);
  assert.equal(original.enabled, false);
  assert.ok(Object.values(original.terms).every((control) => control.status === "draft"));
  assert.deepEqual(api.getPublishedGlossaryArticles(), []);
  assert.deepEqual(api.getGlossaryStaticParams(), []);
  assert.deepEqual(api.getGlossarySitemapEntries(), []);
  assert.deepEqual(api.getGlossaryHubArticlePaths(), {});
  assert.equal(api.getPublishedGlossaryArticle("repeatability"), undefined);
  assert.equal(api.getPublishedGlossaryArticle("unknown-slug"), undefined);
});

test("source-only audits preserve all submitted prose and bind citations to the intake revision", () => {
  const sourceAudits = JSON.parse(readFileSync("content/physical-ai-glossary/source-overrides.json", "utf8"));
  for (const article of articles) {
    assert.equal(createHash("sha256").update(article.submittedMarkdown).digest("hex"), article.provenance.submittedSha256);
    const submittedBody = article.submittedMarkdown.replace(/^# \d+\. [^\n]+\n+/, "").split(/\n\*\*Sources:\*\*/)[0].trim();
    assert.equal(article.bodyMarkdown, submittedBody);
    assert.ok(article.sources.length > 0);
    const audit = sourceAudits.terms[article.id];
    if (audit) {
      assert.equal(audit.submittedSha256, article.provenance.submittedSha256);
      assert.deepEqual(article.sources, audit.sources);
    } else {
      for (const source of article.sources) assert.ok(article.submittedMarkdown.includes(source.url));
    }
  }
});

test("duplicate IDs, slugs, anchors, and ambiguous acronym routes fail validation", () => {
  for (const key of ["id", "slug", "anchor", "legacyId"]) {
    const data = clone(articles); data[1][key] = data[0][key];
    assert.throws(() => policy.validateGlossary(data, original, now), /Duplicate/);
  }
  assert.equal(articles.find((article) => article.id === "BSG-118").slug, "encoder-robotics");
  assert.equal(articles.find((article) => article.id === "BSG-119").slug, "encoder-machine-learning");
  assert.notEqual(articles.find((article) => article.id === "BSG-366").slug, articles.find((article) => article.id === "BSG-367").slug);
});

test("publication requires matching review evidence for every source", () => {
  const good = approvedFixture();
  assert.deepEqual(policy.publishedGlossaryArticles(good.entries, good.release, now).map((article) => article.id), ["BSG-317"]);
  for (const kind of ["editorial", "sources", "searchIntent", "links"]) {
    const fixture = approvedFixture(); delete fixture.control.reviews[kind];
    assert.throws(() => policy.publishedGlossaryArticles(fixture.entries, fixture.release, now), /review|source|intent/i);
  }
  const fixture = approvedFixture(); fixture.control.reviews.sources.checkedUrls.pop();
  assert.throws(() => policy.publishedGlossaryArticles(fixture.entries, fixture.release, now), /Every supplied source/);
});

test("changed prose, slugs, source URLs, metadata, or related links invalidate reviews", () => {
  for (const mutate of [
    (f) => { f.article.bodyMarkdown += "\n\nChanged claim."; },
    (f) => { f.article.slug = "changed-repeatability"; },
    (f) => { f.article.sources[0].url += "?changed=1"; },
    (f) => { f.control.metaDescription += " Changed."; },
    (f) => { f.control.relatedIds.reverse(); },
  ]) {
    const fixture = approvedFixture(); mutate(fixture);
    assert.throws(() => policy.publishedGlossaryArticles(fixture.entries, fixture.release, now), /current revision|Related links/);
  }
});

test("global switch, cohort switch, owner approval, and verified origin gate release", () => {
  const off = approvedFixture(); off.release.enabled = false;
  assert.deepEqual(policy.publishedGlossaryArticles(off.entries, off.release, now), []);
  const outside = approvedFixture(); outside.release.cohorts[0].enabled = false;
  assert.throws(() => policy.publishedGlossaryArticles(outside.entries, outside.release, now), /outside enabled cohorts/);
  const origin = approvedFixture(); origin.release.canonicalOrigin = "https://blackscarab.ai";
  assert.throws(() => policy.publishedGlossaryArticles(origin.entries, origin.release, now), /hostname/);
  const approval = approvedFixture(); approval.release.approval = null;
  assert.throws(() => policy.publishedGlossaryArticles(approval.entries, approval.release, now), /approval/);
});

test("draft and reviewed terms remain private even with release switches enabled", () => {
  for (const status of ["draft", "reviewed"]) {
    const fixture = approvedFixture(); fixture.control.status = status;
    assert.deepEqual(policy.publishedGlossaryArticles(fixture.entries, fixture.release, now), []);
  }
});

test("future dates and stale modification timestamps block publication", () => {
  const future = approvedFixture(); future.control.publishedAt = "2099-01-01T12:00:00Z";
  assert.throws(() => policy.publishedGlossaryArticles(future.entries, future.release, now), /timestamps/);
  const stale = approvedFixture(); stale.control.reviews.editorial.reviewedAt = "2026-11-03T12:00:00Z";
  assert.throws(() => policy.publishedGlossaryArticles(stale.entries, stale.release, now), /modification/);
});

test("reuse of an existing guide cannot accidentally create a competing term page", () => {
  const fixture = approvedFixture(); fixture.control.reviews.searchIntent.decision = "reuse-existing-guide";
  assert.throws(() => policy.publishedGlossaryArticles(fixture.entries, fixture.release, now), /distinct term page/);
});

test("all public consumers use the same approved article set and original dates", () => {
  const saved = clone(api.glossaryPublication);
  const fixture = approvedFixture();
  Object.assign(api.glossaryPublication, fixture.release);
  try {
    assert.deepEqual(api.getGlossaryStaticParams(), [{ slug: "repeatability" }]);
    assert.deepEqual(api.getGlossaryHubArticlePaths(), { [fixture.article.legacyId]: "/resources/physical-ai-glossary/repeatability" });
    const [entry] = api.getGlossarySitemapEntries();
    assert.equal(entry.url, "https://www.blackscarab.ai/resources/physical-ai-glossary/repeatability");
    assert.equal(entry.lastModified.toISOString(), fixture.control.publishedAt.replace("Z", ".000Z"));
    assert.equal(api.getPublishedGlossaryArticle("accuracy"), undefined);
    assert.ok(api.getGlossaryRelatedTerms(fixture.article).filter((term) => term.href).every((term) => term.href.includes("#")));
    assert.equal(api.getGlossaryMetadata(fixture.article).alternates.canonical, entry.url);
    const schema = api.getGlossarySchema(fixture.article);
    assert.equal(schema["@graph"][0].url, entry.url);
    assert.equal(schema["@graph"][1].dateModified, fixture.control.publishedAt);
  } finally { Object.assign(api.glossaryPublication, saved); }
});

test("pilot has twenty unique, connected terms with no invented inventory IDs", () => {
  const pilot = JSON.parse(readFileSync("content/physical-ai-glossary/pilot.json", "utf8"));
  const ids = new Set(pilot.terms.map((term) => term.id));
  assert.equal(ids.size, 20);
  const inbound = new Set(pilot.terms.flatMap((term) => term.suggestedRelatedIds));
  for (const term of pilot.terms) {
    assert.ok(articles.some((article) => article.id === term.id && article.slug === term.slug));
    assert.ok(inbound.has(term.id), `${term.id} has no suggested incoming link`);
    assert.ok(term.suggestedRelatedIds.every((id) => ids.has(id)));
    assert.equal(term.reviewStatus, "pending");
  }
});


test("authorized release publishes exactly 444 unique canonical routes and matching schemas", () => {
  assert.equal(deployed.enabled, true);
  const published = policy.publishedGlossaryArticles(articles, deployed);
  assert.equal(published.length, 444);
  assert.equal(new Set(published.map((article) => article.slug)).size, 444);
  const saved = clone(api.glossaryPublication);
  Object.assign(api.glossaryPublication, clone(deployed));
  try {
    assert.equal(api.getGlossaryStaticParams().length, 444);
    assert.equal(api.getGlossarySitemapEntries().length, 444);
    for (const article of published) {
      const metadata = api.getGlossaryMetadata(article);
      assert.equal(metadata.alternates.canonical, deployed.canonicalOrigin+api.glossaryArticlePath(article));
      assert.equal(api.getGlossarySchema(article)["@graph"][0].url, metadata.alternates.canonical);
      assert.ok(api.getGlossaryRelatedTerms(article).filter((term) => term.href).every((term) => !term.href.includes("#") && !term.href.includes("/preview/")));
    }
    const repeatability = articles.find((article) => article.id === "BSG-317");
    assert.equal(api.getGlossaryMetadata(repeatability).title.absolute, "Robot Repeatability: Definition and Accuracy | Black Scarab");
    assert.equal(repeatability.headline, "What Is Robot Repeatability? Definition, Measurement, and Accuracy");
  } finally { Object.assign(api.glossaryPublication, saved); }
});
