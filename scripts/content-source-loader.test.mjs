import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createContentLoader } from "./content-source-loader.mjs";

test("default JSON imports retain article identity and taxonomy in build validation", () => {
  const root = mkdtempSync(join(tmpdir(), "black-scarab-content-loader-"));
  try {
    mkdirSync(join(root, "data"));
    const article = { slug: "robot-guide", taxonomy: { primaryIndustry: "cross-industry", technologies: ["simulation"], applications: [] } };
    writeFileSync(join(root, "data/article.json"), JSON.stringify(article));
    const source = join(root, "article.ts");
    writeFileSync(source, 'import article from "@/data/article.json"; export const result = { ...article, image: "/cover.png" };');
    const load = createContentLoader(root);
    const { result } = load(source);
    assert.deepEqual(result, { ...article, image: "/cover.png" });
    assert.equal(load(source).result, result);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
