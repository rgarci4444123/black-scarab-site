import { newsUpdates } from "@/lib/news";
import { escapeXml } from "@/lib/xml";

const baseUrl = "https://www.blackscarab.ai";
const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;

export function GET() {
  const now = Date.now();
  const recentUpdates = newsUpdates.filter((update) => {
    const publishedAt = new Date(update.publishedAt).getTime();
    return publishedAt <= now && publishedAt >= now - twoDaysInMilliseconds;
  });

  const entries = recentUpdates
    .map(
      (update) => `  <url>
    <loc>${escapeXml(`${baseUrl}/news/${update.slug}`)}</loc>
    <news:news>
      <news:publication>
        <news:name>Black Scarab</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${escapeXml(update.publishedAt)}</news:publication_date>
      <news:title>${escapeXml(update.title)}</news:title>
    </news:news>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
