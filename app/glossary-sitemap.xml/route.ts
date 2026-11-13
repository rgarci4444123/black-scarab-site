import { getGlossarySitemapEntries } from "@/lib/glossary";

export const dynamic = "force-static";
const xml = (value: string) => value.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char]!);

export function GET() {
  const entries = getGlossarySitemapEntries();
  if (!entries.length) return new Response(null, { status: 404 });
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map((entry) => `<url><loc>${xml(entry.url)}</loc><lastmod>${entry.lastModified.toISOString()}</lastmod></url>`).join("")}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
