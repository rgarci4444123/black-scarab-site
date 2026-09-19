# Foxglove deep dive production notes

## Article

Canonical path: `https://www.blackscarab.ai/insights/foxglove-robotics-data-platform-deep-dive`

Author: Rodolfo Garcia Calderoni, CFA

Publication date: September 18, 2026

## Editorial position

The report treats Foxglove as a robotics data and observability platform, not a robot manufacturer or autonomy provider. It separates published product capabilities, company supplied customer claims, independent reporting, the Felicis investor thesis, Black Scarab analysis, and a clearly labeled hypothetical pricing example.

The Felicis essay supplied by the reader informed the category framing. The report explicitly identifies it as an investor thesis rather than neutral evidence.

## Cover

Asset: `public/article-images/foxglove-robotics-data-platform-deep-dive.png`

The cover was generated with OpenAI image generation as an original Black Scarab editorial illustration. The prompt requested a modern robotics test floor with several generic machine forms connected to a conceptual observability layer in the site's ivory, charcoal, muted sage, steel, and amber palette. It contains no Foxglove logo, product interface, customer deployment, or claim of being an official image.

## Verification completed before publication

* Confirmed the live site did not already contain this article.
* Reviewed the FieldAI, Persona AI, and Palladyne AI deep dive structure.
* Checked the article for prohibited dash punctuation.
* Passed targeted ESLint for the changed article files.
* Passed the Next.js production build and TypeScript checks.
* Verified desktop and mobile rendering, including mobile page width and table overflow behavior.
* Verified the canonical URL, metadata, social image, Article structured data, BreadcrumbList structured data, source citations, author card, and cover loading.

The repository wide lint command remains blocked by existing `require()` imports in `output/x/plus-one/render.cjs`. That unrelated file was not changed. The new article files pass targeted lint.

## Publication sequence

Website publication and live verification must complete before any LinkedIn work. LinkedIn, if separately requested, must use the Black Scarab company page and place the website link in the first comment. X work is outside this article request and must not begin before both earlier stages are live and verified.
