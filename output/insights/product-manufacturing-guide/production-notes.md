# Product manufacturing guide production notes

## Website

Status: ready for publication September 16, 2026.

Canonical URL:

https://www.blackscarab.ai/insights/how-a-product-is-manufactured-bill-of-materials-production-line

The article is Part 3 of Inside the Physical AI Factory. It follows the hypothetical autonomous inspection rover from product architecture through a controlled bill of materials, supplier evidence, make versus buy decisions, production routing, quality, change control, cost, and capacity.

The 10 prototype, 100 unit, and 1,000 unit cases are explicitly illustrative. The article does not claim a real rover specification, supplier relationship, unit cost, labor result, yield, or production rate. Representative supplier examples are supported by official public product information accessed September 16, 2026.

### Original artwork

Cover:

`public/article-images/product-manufacturing-rover-cover.png`

The cover was generated with the built in image generation tool using this final prompt:

> Use case: photorealistic-natural. Asset type: editorial cover for a Black Scarab manufacturing deep dive, designed for a wide website hero and social crop. Show a hypothetical small autonomous industrial inspection rover progressing from separated parts through careful assembly to a complete unit at a final test station. Use a clean modern low volume manufacturing cell, a realistic generic rover, soft workshop light, warm ivory, charcoal, muted sage, restrained brushed aluminum, and small warm copper accents. Keep a wide safe composition. No text, labels, logos, company marks, watermarks, branded product resemblance, humanoid robots, unsafe work, or glossy science fiction styling.

It is an original Black Scarab editorial interpretation, not an official product photograph or depiction of a real factory.

Supporting diagrams:

* `public/article-images/rover-exploded-product-map.svg`
* `public/article-images/rover-exploded-product-map-mobile.svg`
* `public/article-images/rover-bom-supplier-map.svg`
* `public/article-images/rover-bom-supplier-map-mobile.svg`
* `public/article-images/rover-production-routing.svg`
* `public/article-images/rover-production-routing-mobile.svg`

### Verification

* Targeted lint passed for all Part 3 source changes.
* Application source lint passed with two existing image optimization warnings and no errors.
* The production build passed with Next.js 16.2.1.
* The new canonical route was statically generated.
* Desktop and 390 pixel mobile layouts were visually inspected.
* The cover, caption, mobile cards, and responsive article flow rendered correctly.
* All six analytical SVG files were rendered to PNG and visually inspected.
* Approximate article length is 6,135 words, including table content.
* The article contains no en dash or em dash punctuation.
* Repository wide lint remains blocked by preexisting CommonJS rendering scripts under untracked `output` directories. Those unrelated files were preserved.

## LinkedIn

Status: publish only after the live website article is verified.

Required identity: Black Scarab company page, company ID `111898269`.

Draft post:

> DEEP DIVE | How a Product Is Manufactured
>
> A working prototype is not yet a manufacturing system.
>
> Part 3 of Inside the Physical AI Factory takes apart a hypothetical autonomous inspection rover, builds its bill of materials, maps supplier and make versus buy decisions, and creates the route from receiving through final test.
>
> The worked example shows why ten prototypes, the first one hundred commercial units, and capacity for one thousand units per year demand different processes, evidence, and economics.
>
> It also includes an explicit capacity model, a fully labeled illustrative unit cost model, and the configuration controls required when hardware, software, models, calibration, and suppliers all change.
>
> The full report link is in the comments.
>
> #Manufacturing #Robotics #PhysicalAI #IndustrialAutomation

First comment after the post is live:

https://www.blackscarab.ai/insights/how-a-product-is-manufactured-bill-of-materials-production-line

## X

Status: prepare and publish only after the website article, LinkedIn company post, and first link comment are live and verified.

Required identity: `@BlackScarabAI`.

The native X Article must preserve the existing pinned Insights post and manufacturing series index. Part 3 must be added as the next ordered reply beneath the series index. A forward link must also be added beneath the Part 2 Article. The live Article, header, inline images, alt text, launch post, and both series connections must be verified and recorded in `docs/x-publishing-log.md`.
