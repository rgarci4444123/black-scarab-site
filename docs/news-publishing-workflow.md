# Physical AI news publishing workflow

Use this workflow whenever Rodolfo provides a short news snippet.

## Editorial process

1. Treat the snippet as a lead, not as finished copy.
2. Search for the original announcement, product page, filing, research paper, or other primary source.
3. Confirm the story with at least two additional credible sources when they are available.
4. Build a fact list before drafting. Separate verified facts, company claims, outside reporting, and analysis.
5. Write an original article that takes about five to ten minutes to read.
6. Keep the connection to physical AI implicit in the reporting. Do not add a section explaining why the story belongs in physical AI news.
7. Use clear sentences, short paragraphs, descriptive section headings, and concrete numbers with context.
8. Do not use dash punctuation in headlines, summaries, captions, section headings, or article prose.
9. Credit every article to Rodolfo Garcia Calderoni, CFA, and use the same portrait in the byline and author card.
10. Include linked sources and identify performance figures that have not been independently verified.

## Image process

1. Create one original editorial cover image for each article.
2. Match the Black Scarab palette with warm ivory, charcoal, muted sage, and restrained industrial materials.
3. Do not add logos, company marks, text, labels, numbers, or watermarks.
4. Do not present an invented image as an official product photograph. Describe it as an editorial illustration or interpretation in the caption.
5. Save the final image in `public/images/news` and add useful alternative text.

## Publishing checks

1. Add the article to `lib/news.ts` with a unique slug, publication date, evidence based publication timestamp, summary, reading time, image, key points, sections, and sources. Use an ISO 8601 timestamp with the correct timezone for `publishedAt`. Add `modifiedAt` only when the published article is materially updated.
2. Confirm the article appears on `/news` and opens at its individual route.
3. Confirm the title, description, author, canonical URL, image, and structured data are present. Keep professional credentials such as CFA outside `author.name` in structured data and use `honorificSuffix` instead.
4. Search the published copy for dash punctuation.
5. Run lint and the production build.
6. Review the news index and article on desktop and mobile widths before considering the article published.
7. Deploy the article before notifying external indexing services.
8. Run `npm run submit:indexnow -- article-slug` after the production URL is live.
9. Confirm the article appears in `/news-sitemap.xml` during its first two days and in `/news/feed.xml` permanently.
10. Run Google's Rich Results Test against the live canonical URL. Confirm that Article and Organization are valid and resolve all date and timezone warnings.
11. Use Google Search Console URL Inspection to request indexing once for the new canonical URL. Do not repeat the request because repeated submissions do not accelerate crawling.

## Discovery endpoints

Submit these endpoints once in Google Search Console and Bing Webmaster Tools:

* `https://www.blackscarab.ai/sitemap.xml`
* `https://www.blackscarab.ai/news-sitemap.xml`

The RSS feed is available for readers, monitoring tools, and aggregators at:

* `https://www.blackscarab.ai/news/feed.xml`

The Google News sitemap contains only stories published during the previous two days. The RSS feed retains the newest 50 stories.

IndexNow notifies participating search engines but does not replace Google Search Console. Google discovers news through its normal crawl and submitted sitemaps, then determines Google News eligibility and placement automatically.
