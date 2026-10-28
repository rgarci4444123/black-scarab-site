# Markets publishing

Markets is the public-equities commentary and index entry point. Add approved editions to `lib/market-commentaries.ts`, newest first. Each edition has a canonical `/markets/[slug]` route, publication date, coverage window, reading time, original cover and reviewed static article HTML. The archive appears only when previous published editions exist. Keep the live index summary connected to `physicalAiAdoptionPerformance`; historical figures inside commentary remain fixed to the stated dates.

## October 21, 2026

Rodolfo approved publication of the Markets landing page and the supplied commentary with subsequent edits: centered navigation and article text; collapsible article contents; no fictional archive entries; restrained closing; brief inflation and Ouster profitability context; no bold thesis callouts. Cover is original AI-generated editorial artwork. Sources are listed at the foot of the article. Coverage: October 14 through October 20. Price returns: October 13 close through October 20 close. Source material and image-generation brief are retained in the Black Scarab Weekly Market Commentary workspace.

## October 28, 2026

Approved edition: `/markets/ai-spending-physical-ai-return`, covering October 21 through October 27. Use the supplied waterfront robotics cover without added text, white SVG data figures with blue-cyan headings, the larger `29 cents.` opener and three brief inline points of emphasis. The prior edition remains in the archive. Share from Black Scarab's LinkedIn company page with the live article link in the first comment.

## Shared design

Use `SitePage` and `SiteSurface` from `components/site-frame.tsx` for the main site sections. Keep Markets CSS on its content only; do not wrap the shared header or footer in page-specific resets or link color rules. Match the shared white surfaces, neutral borders, blue link/button accents, frame width and responsive outer gutters. Keep the article reading column centered and narrower within that shared frame.

The homepage commentary card uses `latestMarketCommentary`, so it follows the newest published weekly edition. The Events calendar filters on each event's end date using the current New York calendar date at request time; both the visible calendar and ItemList schema use the same filtered set. Events remain listed through their final day.

Homepage commentary identity: replace the “Featured insight” label above the image with “Weekly Market Commentary” and coverage dates without the year. Keep the edition’s article headline below the image and link to the full edition.
