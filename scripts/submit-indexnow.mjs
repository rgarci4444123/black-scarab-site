import { readFile } from "node:fs/promises";

const baseUrl = "https://www.blackscarab.ai";
const key = "1236d5c01b7fa121d6e83700200c5e67";
const requestedSlug = process.argv[2];
const newsSource = await readFile(
  new URL("../lib/news.ts", import.meta.url),
  "utf8",
);
const slugs = Array.from(newsSource.matchAll(/slug:\s*"([^"]+)"/g), (match) => match[1]);
const slug = requestedSlug ?? slugs[0];

if (!slug || !slugs.includes(slug)) {
  throw new Error(
    `Unknown news slug: ${slug ?? "none"}. Pass a slug found in lib/news.ts.`,
  );
}

const urlList = [`${baseUrl}/news`, `${baseUrl}/news/${slug}`];
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(baseUrl).host,
    key,
    keyLocation: `${baseUrl}/${key}.txt`,
    urlList,
  }),
});

if (!response.ok) {
  const responseText = await response.text();
  throw new Error(`IndexNow returned ${response.status}: ${responseText}`);
}

console.log(`IndexNow accepted ${urlList.length} URLs with status ${response.status}.`);
