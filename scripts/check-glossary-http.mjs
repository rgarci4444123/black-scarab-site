import assert from "node:assert/strict";
import { createContentLoader } from "./content-source-loader.mjs";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:3098");
if (!["127.0.0.1", "localhost", "[::1]"].includes(base.hostname)) throw new Error("This verification command is for local previews only");
const load = createContentLoader();
const api = load("lib/glossary.ts");
const path = "/resources/physical-ai-glossary";
const published = api.getPublishedGlossaryArticles();
const paths = Object.values(api.getGlossaryHubArticlePaths());
const hub = await fetch(new URL(path, base));
assert.equal(hub.status, 200);
const html = await hub.text();
const anchors = Array.from(html.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*class="[^"]*\bglossary-entry\b/g), (match) => match[1]);
assert.equal(anchors.length, 444, "Every hub definition must be in the initial HTML");
assert.deepEqual(new Set(anchors), new Set(api.glossaryArticles.map((article) => article.anchor)));
const hrefs = Array.from(html.matchAll(/<a\b[^>]*href="([^"]+)"/g), (match) => match[1]);
assert.deepEqual(new Set(hrefs.filter((href) => href.startsWith(`${path}/`))), new Set(paths));
const sitemap = await fetch(new URL("/sitemap.xml", base));
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
const termUrls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
  .filter((url) => new URL(url).pathname.startsWith(`${path}/`));
assert.deepEqual(new Set(termUrls), new Set(api.getGlossarySitemapEntries().map((entry) => entry.url)));
for (const article of api.glossaryArticles.filter((article) => !published.includes(article)).slice(0, 2)) {
  assert.equal((await fetch(new URL(`${path}/${article.slug}`, base))).status, 404, `Draft leaked: ${article.slug}`);
}
assert.equal((await fetch(new URL(`${path}/not-a-real-glossary-term`, base))).status, 404);
const glossarySitemap = await fetch(new URL("/glossary-sitemap.xml", base));
assert.equal(glossarySitemap.status, published.length ? 200 : 404);
if (published.length) {
  const article = published[0];
  const response = await fetch(new URL(`${path}/${article.slug}`, base));
  assert.equal(response.status, 200);
  const body = await response.text();
  assert.ok(body.includes(article.headline.replaceAll("&", "&amp;")));
  assert.ok(body.includes(`${api.glossaryPublication.canonicalOrigin}${path}/${article.slug}`));
}
console.log(`HTTP checks passed: 444 hub definitions in initial HTML, ${paths.length} public article links and sitemap URLs, drafts and unknown slugs return 404.`);
