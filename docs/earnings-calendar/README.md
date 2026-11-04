# Monthly Physical AI Earnings Calendar

Local preview: http://127.0.0.1:3047/markets/earnings-calendar
October: http://127.0.0.1:3047/markets/earnings-calendar?month=2026-10

The website uses a semantic HTML month grid with selectable company names, issuer-source links and one page title. Mobile keeps readable type with a horizontally scrollable grid. Downloads use a separately composed SVG calendar grid with the real logo, month, title and website. PNG dimensions are exactly 1080 × 1350. PDF uses the same portrait artwork at higher resolution. iCal contains all-day events, with estimates marked tentative; undated entries are excluded. Downloads bundle licensed Liberation Sans fonts and outline their labels with opentype.js, so PNG/JPG/PDF rendering is independent of system fonts.

## Data and monthly workflow

`data/earnings/current.json` retains the exact 35-company universe, including the 15 index members, and research evidence. Update or verify its dates and updatedAt. Optional tbdByMonth maps a month to the company IDs that should appear in a short pending line.

Run `node scripts/prepare-earnings-edition.mjs YYYY-MM`. It creates an edition snapshot, registers the prepared month and retains all earlier editions. Empty months are not registered. The default month does not change automatically. Review the prepared month through `?month=YYYY-MM`, then download PNG, PDF or iCal from the page.

To revise an existing prepared edition, add `--replace-prepared`. It keeps a timestamped copy in data/earnings/revisions. Published snapshots cannot be overwritten by the script. After editorial approval, set the appropriate registry status to published and choose its ID as current. Deployment requires the user's explicit approval. On immutable hosts, updated JSON ships with the next deployment.

The page and all exports read the selected snapshot, so the data agree and live research updates cannot silently change historical dates. Company display names may use familiar shorter names; full names and tickers remain in the source, accessible labels and iCal.

## Validation

`node --test scripts/earnings-calendar.test.mjs` checks the exact universe, index membership, date-to-weekday placement, unavailable months, 1080 × 1350 exports and iCal event dates, estimates, unique IDs and line folding. Run `npx tsc --noEmit` and `npx next build --webpack`. Render PDFs with pdftoppm and review both monthly graphics.

## Research limitations

November contains 13 primary-confirmed and two estimated reporting dates. Rainbow Robotics November 12 and Moog November 20 are estimates. ROBOTIS remains TBD. Deere has an official November 25 call but no separately verified earnings release date. UBTech has no confirmed quarterly release and is retained in the universe without inventing an event. All source evidence remains in the data.

## Production integration

The approved calendar and Markets updates are integrated on production commit 4640758, preserving subsequent news, index and Career Paths changes. October and November are published snapshots, with November selected by default. The calendar page is indexable and listed in the sitemap. Export responses remain noindex. Runtime file tracing includes the monthly JSON snapshots and brand artwork.

## Latest visual refinement

Markets uses a quiet row of links for commentary, earnings calendar and Physical AI 15. The export design uses a bundled sans-serif typeface with a larger month, muted teal weekday labels and compact non-reporting weekend columns. Weekends expand when they contain announcements. Exported company names use familiar short names while formal names, tickers and evidence remain in the data. PNG/JPG stay 1080 × 1350. The optional image/jpeg endpoint is ?format=jpg. Latest visual and file checks are recorded in refinement-qa.json.

## Company marks in share artwork

The November JPG/PNG artwork now includes small original company marks beside tickers, sourced from official company sites and their rendered page assets. The web calendar uses HTML with the same local marks. Source evidence, originals and a contact sheet are in company-mark-sources/. data/earnings/company-marks.json embeds normalized PNG assets, keeping downloads self-contained and avoiding live image requests. The normalization script prepares the registry; missing future marks leave a clean text-only ticker. PNG and JPEG with the marks are retained separately from the earlier refined versions.

## Approved-direction webpage refinement

The HTML calendar now includes the small company logos, smaller tickers, and more spacing between companies on the same date. Keep the year and weekday labels black on the webpage. The bottom-right URL was removed from the webpage; the approved download artwork keeps its own teal year and styled website URL. Preserve the centered month with arrows and the teal Markets back link. TypeScript and desktop/mobile visual checks passed for this draft.

## October visual parity

October uses the shared webpage styling and now has original company marks for all 17 reporting companies. The export artwork uses the same design as November, including compact tickers and spaced company entries. Official asset evidence is recorded in company-mark-sources/manifest-2026-10.json. TypeScript, all four calendar checks, logo loading and page/PNG visual checks passed.

## Portable export typography

All SVG labels are converted to vector outlines before rasterization. Liberation Sans regular/bold and their SIL Open Font License ship in lib/earnings/fonts. Serverless file tracing includes both font files. The export regression check rejects live SVG text nodes so a host with no installed fonts cannot silently produce blank labels or replacement glyphs.
