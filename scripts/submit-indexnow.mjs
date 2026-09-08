import { readFile } from "node:fs/promises";

const baseUrl = "https://www.blackscarab.ai";
const key = "1236d5c01b7fa121d6e83700200c5e67";
const requestedEntry = process.argv[2];
const [newsSource, insightsSource, palladyneSource] = await Promise.all([
  readFile(new URL("../lib/news.ts", import.meta.url), "utf8"),
  readFile(new URL("../lib/case-studies.ts", import.meta.url), "utf8"),
  readFile(new URL("../lib/palladyne-ai.ts", import.meta.url), "utf8"),
]);
const newsSlugs = Array.from(
  newsSource.matchAll(/slug:\s*"([^"]+)"/g),
  (match) => match[1],
);
const insightSlugs = new Set(
  Array.from(
    `${insightsSource}\n${palladyneSource}`.matchAll(/slug:\s*"([^"]+)"/g),
    (match) => match[1],
  ),
);

function resolvePaths(entry) {
  if (!entry) {
    return newsSlugs[0]
      ? ["/news", `/news/${newsSlugs[0]}`]
      : [];
  }

  const normalized = entry.startsWith("/") ? entry : null;

  if (normalized?.startsWith("/news/")) {
    const slug = normalized.slice("/news/".length);
    return newsSlugs.includes(slug) ? ["/news", normalized] : [];
  }

  if (normalized?.startsWith("/insights/")) {
    const slug = normalized.slice("/insights/".length);
    return insightSlugs.has(slug) ? ["/insights", normalized] : [];
  }

  if (newsSlugs.includes(entry)) {
    return ["/news", `/news/${entry}`];
  }

  if (insightSlugs.has(entry)) {
    return ["/insights", `/insights/${entry}`];
  }

  return [];
}

const paths = resolvePaths(requestedEntry);

if (paths.length === 0) {
  throw new Error(
    `Unknown article: ${requestedEntry ?? "none"}. Pass a news slug, an insight slug, or a full article path.`,
  );
}

const urlList = paths.map((path) => `${baseUrl}${path}`);
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
