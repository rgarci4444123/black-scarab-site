import { newsUpdates } from "@/lib/news";
import { escapeXml } from "@/lib/xml";

const baseUrl = "https://www.blackscarab.ai";
const feedUrl = `${baseUrl}/news/feed.xml`;

export function GET() {
  const items = newsUpdates
    .slice(0, 50)
    .map((update) => {
      const articleUrl = `${baseUrl}/news/${update.slug}`;
      const publishedAt = new Date(update.publishedAt).toUTCString();

      return `    <item>
      <title>${escapeXml(update.title)}</title>
      <link>${escapeXml(articleUrl)}</link>
      <guid isPermaLink="true">${escapeXml(articleUrl)}</guid>
      <pubDate>${escapeXml(publishedAt)}</pubDate>
      <dc:creator>${escapeXml(update.author.name)}</dc:creator>
      <category>${escapeXml(update.category)}</category>
      <description>${escapeXml(update.summary)}</description>
    </item>`;
    })
    .join("\n");

  const latestPublishedAt = newsUpdates[0]
    ? new Date(newsUpdates[0].modifiedAt ?? newsUpdates[0].publishedAt).toUTCString()
    : new Date(0).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Black Scarab Physical AI News</title>
    <link>${baseUrl}/news</link>
    <description>Timely, sourced reporting on the companies, machines, and markets shaping physical AI.</description>
    <language>en-us</language>
    <lastBuildDate>${escapeXml(latestPublishedAt)}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
