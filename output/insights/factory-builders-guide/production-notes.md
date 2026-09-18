# Factory builders guide production notes

## Website

Status: ready to publish September 18, 2026.

Canonical URL:

https://www.blackscarab.ai/insights/who-builds-a-factory-siemens-rockwell-fanuc-integrators

The article is Part 4 of Inside the Physical AI Factory. It maps the companies that turn an operating requirement into a working plant, including equipment manufacturers, component suppliers, distributors, automation platform suppliers, machine builders, systems integrators, manufacturing engineering firms, architecture and construction teams, software providers, and contract manufacturers.

One hypothetical robot machine tending cell reconnects the roles through a complete responsibility stack, project delivery sequence, scope matrix, acceptance process, commercial model, and buyer diligence checklist. The worked cell is a teaching framework. It does not claim a real customer project, supplier relationship, quoted price, guaranteed performance, or required bill of materials.

### Original artwork

Cover:

`public/article-images/who-builds-a-factory-ecosystem-cover.png`

The cover was generated with the built in image generation tool using this initial prompt:

> Use case: photorealistic natural. Asset type: editorial cover for a Black Scarab manufacturing deep dive, designed for a wide website hero and social crop. Show one complete robot machine tending cell as the center of a modern factory ecosystem: an unbranded six axis industrial robot loading a compact CNC machine, with a realistic gripper, machine vision, safety fencing or scanner, an electrical cabinet, part infeed, and an inspection station. Around the cell, show a small multidisciplinary team that visibly represents the different roles behind the system: an owner or manufacturing engineer reviewing a tablet, a machine builder or integrator commissioning the cell, an electrical controls specialist at the cabinet, and a facility or maintenance specialist checking utilities. Use a physically plausible clean factory, warm natural light, restrained ivory, charcoal, muted sage, brushed steel, and small copper accents. Keep the composition wide with generous safe space for responsive cropping. No text, labels, logos, company marks, watermarks, branded product resemblance, humanoid robots, unsafe work, or glossy science fiction styling.

The selected image was refined with this edit prompt:

> Preserve the composition, people, robot cell, CNC machine, lighting, palette, and realism. Make the electrical enclosure fully closed with all doors shut and remove every visible internal wire, terminal, or exposed electrical component. Keep the nearby controls specialist safely outside the closed cabinet using a tablet or diagnostic device. Do not add text, labels, logos, watermarks, branded product resemblance, or unsafe work.

It is an original Black Scarab editorial interpretation, not an official product photograph or depiction of a real factory.

Supporting diagrams:

* `public/article-images/factory-builder-ecosystem-map.svg`
* `public/article-images/factory-builder-ecosystem-map-mobile.svg`
* `public/article-images/machine-tending-responsibility-stack.svg`
* `public/article-images/machine-tending-responsibility-stack-mobile.svg`
* `public/article-images/factory-project-delivery-gates.svg`
* `public/article-images/factory-project-delivery-gates-mobile.svg`

### Verification

* Targeted lint passed for all Part 4 source changes.
* TypeScript validation passed.
* The production build passed with Next.js 16.2.1.
* The new canonical route was statically generated.
* Desktop and 390 pixel mobile layouts were visually inspected.
* The cover, caption, article flow, tables, author card, series navigation, and related content rendered correctly.
* All six desktop and mobile analytical SVG files were visually inspected.
* Approximate article length is 6,500 words, including table content.
* The article contains no en dash or em dash punctuation.
* The structured data contains the canonical main entity URL, Rodolfo Garcia Calderoni with CFA as the honorific suffix, an evidence based publication timestamp, and linked citations.

## LinkedIn

Status: publish only after the live website article is verified.

Required identity: Black Scarab company page, company ID `111898269`.

Draft post:

> DEEP DIVE | Who Builds a Factory?
>
> A modern factory is not bought from one company.
>
> Part 4 of Inside the Physical AI Factory maps the equipment manufacturers, component suppliers, distributors, automation platforms, machine builders, systems integrators, engineering firms, contractors, software providers, and contract manufacturers behind industrial production.
>
> One robot machine tending cell shows where Siemens, Rockwell Automation, FANUC, and their partner ecosystems fit, and why the most expensive gaps often sit between excellent components.
>
> The report also includes a responsibility stack, seven delivery gates, commercial scope choices, and the evidence a buyer should request before award.
>
> The full report link is in the comments.
>
> #Manufacturing #IndustrialAutomation #Robotics #PhysicalAI

First comment after the post is live:

https://www.blackscarab.ai/insights/who-builds-a-factory-siemens-rockwell-fanuc-integrators

## X

Status: prepare and publish only after the website article, LinkedIn company post, and first link comment are live and verified.

Required identity: `@BlackScarabAI`.

The native X Article must preserve the existing pinned Insights post and manufacturing series index. Part 4 must be added as the next ordered reply beneath the series index. A forward link must also be added beneath the Part 3 Article. The live Article, header, inline images, alt text, launch post, and both series connections must be verified and recorded in `docs/x-publishing-log.md`.
