import { test } from "node:test";
import assert from "node:assert/strict";
import { createContentLoader } from "./content-source-loader.mjs";
const load = createContentLoader();
const { allowsLocalGlossaryPreview, getDraftGlossaryArticle, getDraftGlossaryRelatedTerms } = load("lib/glossary-preview.ts");
const api = load("lib/glossary.ts");
// Exercise unreleased-target behavior without changing the on-disk release.
api.glossaryPublication.enabled = false;
api.glossaryPublication.cohorts.forEach((cohort) => { cohort.enabled = false; });
Object.values(api.glossaryPublication.terms).forEach((control) => { control.status = "draft"; });

test("draft preview requires explicit local development and never permits production", () => {
  const local = { nodeEnv: "development", enabled: "1", host: "127.0.0.1:3099" };
  assert.equal(allowsLocalGlossaryPreview(local), true);
  for (const change of [{ nodeEnv: "production" }, { enabled: undefined }, { host: "www.blackscarab.ai" }, { host: "localhost.evil.test" }, { host: null }, { vercel: "1" }]) {
    assert.equal(allowsLocalGlossaryPreview({ ...local, ...change }), false);
  }
});

test("all 444 drafts can be previewed without changing public eligibility", () => {
  for (const article of api.glossaryArticles) assert.equal(getDraftGlossaryArticle(article.slug).submittedMarkdown, article.submittedMarkdown);
  assert.ok(getDraftGlossaryArticle("repeatability").bodyMarkdown.includes("Consider the Universal Robots UR5e."));
  assert.equal(getDraftGlossaryArticle("unknown-slug"), undefined);
  assert.deepEqual(api.getGlossaryStaticParams(), []);
  assert.deepEqual(api.getGlossarySitemapEntries(), []);
});

test("draft related links retain supplied labels and do not guess ambiguous meanings", () => {
  const related = getDraftGlossaryRelatedTerms("repeatability");
  assert.deepEqual(related.map((term) => term.name), ["Accuracy", "Pose", "Calibration", "Backlash", "Position Control", "Acceptance Testing"]);
  assert.equal(related.find((term) => term.name === "Calibration").href, null);
  assert.ok(related.filter((term) => term.href).every((term) => term.href.startsWith("/preview/physical-ai-glossary/")));
});
