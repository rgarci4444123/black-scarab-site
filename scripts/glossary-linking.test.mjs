import { test } from "node:test";
import assert from "node:assert/strict";
import { createContentLoader } from "./content-source-loader.mjs";

const load = createContentLoader();
const linking = load("lib/glossary-linking.ts");
const api = load("lib/glossary.ts");
// Exercise unreleased-target behavior without changing the on-disk release.
api.glossaryPublication.enabled = false;
api.glossaryPublication.cohorts.forEach((cohort) => { cohort.enabled = false; });
Object.values(api.glossaryPublication.terms).forEach((control) => { control.status = "draft"; });
const policy = load("lib/glossary-publication.ts");
const entries = api.glossaryArticles;
const controls = api.glossaryPublication;
const resolve = linking.createGlossaryRelatedResolver(entries);
const byId = new Map(entries.map((article) => [article.id, article]));

test("all 444 related lists preserve every supplied label and have valid specific destinations", () => {
  for (const article of entries) {
    const related = resolve(article);
    assert.deepEqual(related.map((link) => link.label), article.suppliedRelatedTerms);
    assert.deepEqual(controls.terms[article.id].relatedLinks, related);
    assert.ok(related.some((link) => link.targetId), article.id);
    for (const link of related) if (link.targetId) {
      assert.ok(byId.has(link.targetId));
      assert.notEqual(link.targetId, article.id);
    }
    assert.deepEqual(controls.terms[article.id].relatedIds, [...new Set(related.flatMap((link) => link.targetId ? [link.targetId] : []))]);
  }
});

test("ambiguous encoder and SIL labels resolve only to the relevant sense", () => {
  for (const id of ["BSG-030", "BSG-039", "BSG-244", "BSG-292", "BSG-328", "BSG-363", "BSG-385", "BSG-430"]) {
    assert.equal(resolve(byId.get(id)).find((link) => link.label === "Encoder").targetId, "BSG-118");
  }
  const example = structuredClone(byId.get("BSG-290"));
  example.suppliedRelatedTerms = ["Encoder", "SIL", "No such term"];
  assert.deepEqual(resolve(example).map((link) => link.targetId), ["BSG-119", null, null]);
  example.category = "Industry and Safety";
  assert.deepEqual(resolve(example).map((link) => link.targetId), [null, "BSG-366", null]);
});

test("all draft destinations exist; public destinations use hub anchors until targets are released", () => {
  const anchors = new Set(entries.map((article) => article.anchor));
  for (const article of entries) {
    const draft = api.getGlossaryRelatedTerms(article, true);
    const publicLinks = api.getGlossaryRelatedTerms(article);
    assert.deepEqual(draft.map((link) => link.name), article.suppliedRelatedTerms);
    for (const link of draft) if (link.href) assert.equal(link.href, "/preview/physical-ai-glossary/"+byId.get(link.targetId).slug);
    for (const link of publicLinks) if (link.href) {
      assert.ok(link.href.startsWith("/resources/physical-ai-glossary#"));
      assert.ok(anchors.has(link.href.split("#")[1]));
    }
  }
  assert.equal(controls.enabled, false);
  assert.ok(controls.cohorts.every((cohort) => !cohort.enabled));
  assert.deepEqual(api.getGlossaryStaticParams(), []);
  assert.deepEqual(api.getGlossarySitemapEntries(), []);
});

test("contextual linking preserves exact text, boundaries, acronym case and per-page limits", () => {
  const linker = linking.createGlossaryMentionLinker([
    { id:"can", href:"/can", phrases:["CAN"] },
    { id:"torque", href:"/torque", phrases:["Torque"] },
    { id:"pid", href:"/pid", phrases:["PID Controller"] },
  ], 2);
  const text = "We can read CAN messages, torque and torques, a PID-controller, and torque-controlled motion.";
  const result = linker(text);
  assert.equal(result.map((part) => part.text).join(""), text);
  assert.deepEqual(result.filter((part) => part.href).map((part) => part.text), ["CAN", "torque"]);
  assert.deepEqual(linker("More torque and CAN."), [{ text:"More torque and CAN." }]);
  const punctuation = linking.createGlossaryMentionLinker([{ id:"pid", href:"/pid", phrases:["PID Controller"] }]);
  assert.equal(punctuation("A PID-controller.").find((part) => part.href).text, "PID-controller");
  const ambiguous = linking.createGlossaryMentionLinker([
    { id:"robot",href:"/robot",phrases:["Encoder"] },
    { id:"ml",href:"/ml",phrases:["Encoder"] },
  ]);
  assert.deepEqual(ambiguous("Encoder"), [{text:"Encoder"}]);
});

test("every article's contextual segments preserve its text and use only its configured related targets", () => {
  for (const article of entries) {
    const targets = api.getGlossaryContextTargets(article, true);
    const linker = linking.createGlossaryMentionLinker(targets);
    const output = linker(article.bodyMarkdown);
    assert.equal(output.map((part) => part.text).join(""), article.bodyMarkdown);
    const linked = output.filter((part) => part.href);
    assert.ok(linked.length <= 6);
    assert.equal(new Set(linked.map((part) => part.targetId)).size, linked.length);
    assert.ok(linked.every((part) => targets.some((target) => target.id === part.targetId && target.href === part.href)));
  }
});

test("changing a link destination invalidates an existing editorial revision", () => {
  const article = byId.get("BSG-317");
  const control = structuredClone(controls.terms[article.id]);
  const revision = policy.glossaryRevision(article, control);
  control.relatedLinks[0].targetId = "BSG-002";
  assert.notEqual(policy.glossaryRevision(article, control), revision);
  const changed = structuredClone(controls);
  changed.terms[article.id] = control;
  assert.throws(() => policy.validateGlossary(entries, changed), /Related links/);
});
