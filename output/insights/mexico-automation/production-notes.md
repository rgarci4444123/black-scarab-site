# Mexico manufacturing deep dive

Article source: lib/mexico-automation.ts

Five original visuals are stored in public/article-images/mexico-automation. The cover was generated using the built-in image generation tool. The four supporting graphics were drawn as SVG and rendered to PNG with Sharp. Their source values and investment calculations are in figure-data.json. Rebuild with node scripts/create-mexico-figures.mjs.

## Cover prompt

Use case: stylized-concept. Original editorial cover for Black Scarab analysis of Mexico manufacturing and automation. Wide 16:9 cinematic editorial illustration, an elegant cutaway Mexican industrial factory at dusk with realistic fixed industrial robot arms, precision manufacturing cells and small human technicians, freight infrastructure receding toward distant mountains. Warm ivory, charcoal and muted sage palette, refined architectural model and tactile paper aesthetic, restrained industrial materials. The visual idea is a working manufacturing base being upgraded, sophisticated and grounded. No humanoids, flags, maps, logos, words, numbers or watermark. This is an editorial interpretation, not a photograph of a real plant.

## Data checks

World Bank API retrieved September 12, 2026: NV.IND.MANF.ZS for MEX in 2024 equals 20.130560879445. API last updated July 13, 2026. Rounded to 20.1 percent in the article.

IFR figures are calendar 2024 observations published in World Robotics 2025. No 2026 installation totals are asserted. Robot density is not used because workforce denominators need separate comparability checks.

All investment amounts are hypothetical. The scripts retain formulas, assumptions and sensitivity values. No company prices, customers or ROI results are invented.

## Publication status

Local article and visuals complete. Production build passed, including TypeScript and all static pages. Full lint found preexisting errors in output rendering scripts; application scoped lint passed with two preexisting image warnings, and all changed files passed targeted lint. Desktop and 390 pixel mobile checks passed with no horizontal overflow. Verified five figures, four full size links, author portrait and card, canonical, Article schema with CFA in honorificSuffix, and Insights index placement. No duplicate article title or slug was found in the live Insights index; the target URL returned 404 before publication.

Website deployment and LinkedIn publication are not yet verified. No X edition has been prepared.
