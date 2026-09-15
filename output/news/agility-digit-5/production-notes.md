# Agility Digit 5 news report

## Reporting record

Prepared September 15, 2026 from Agility Robotics' launch announcement, current Digit 5 product page, securities filings, customer materials, and independent reporting. The user supplied summary was treated as a research lead rather than finished copy.

Agility's September 15 release establishes the launch, specifications, safety architecture, planned availability, operating history, and company claims. The SEC filed investor presentation provides the crucial conditions behind the reported order value and distinguishes factory capacity from current production. GXO and Amazon materials clarify that customer relationships span live deployment, evaluation, and testing rather than one uniform commercial category. TechCrunch, the Associated Press, and Business Insider reporting provide outside context on deployments, the planned public listing, and commercial economics.

The report attributes the 50 pound payload, 90 minute runtime, nine minute recharge, daily work estimate, safety behavior, 65,000 operating hours, GXO accuracy, and availability schedule to Agility. It does not present those figures as independent tests.

The $300 million figure is described as conditional multi year value associated with 1,000 robots under a three year robot service contract with one purchaser, including warrants that vest as robots are deployed. It is not described as recognized revenue. RoboFab's 10,000 unit figure is described as designed annual capacity at full scale, not current output.

## Artwork

Original Black Scarab editorial illustration generated with the built in image generation tool. It depicts a fictional industrial humanoid carrying a plain tote near a human worker and charging dock. The robot has generic hardware and does not imitate Agility's Digit design.

Asset: `public/images/news/agility-digit-5-industrial-humanoid.png`

Prompt summary: A wide cinematic editorial illustration of a generic bipedal industrial humanoid carrying a tote in a warm ivory distribution facility, with a worker at a respectful distance and a compact charging dock. Charcoal, muted sage, and restrained amber accents. No text, labels, numbers, logos, brand marks, watermarks, recognizable products, official marketing composition, or unsafe contact.

## Publication sequence

Publish and verify the website article first. Then publish and verify the LinkedIn post from Black Scarab company ID 111898269, with `NEWS | Agility Robotics and Digit 5` at the beginning and the article link placed in the first Black Scarab comment. Prepare the X edition only after both website and LinkedIn are live and verified. Rodolfo publishes X manually.

## Validation status

Targeted lint for `lib/news.ts` passed. The production build passed and generated the new article route.

Full repository lint still reports twelve preexisting CommonJS import errors in artwork scripts under `output/brand` and `output/x`, plus two existing image warnings. No unrelated scripts were changed.

The article and news index were visually reviewed at desktop width and at a 390 pixel mobile viewport. The headline, summary, byline, cover crop, caption, At a glance box, article body, sources, and author card render cleanly. The mobile document has no horizontal overflow.

The canonical URL, description, Open Graph image, Twitter image, publication timestamp, and NewsArticle structured data were verified locally. The structured author name is `Rodolfo Garcia Calderoni`, with `CFA` stored separately in `honorificSuffix`.

The main sitemap, news sitemap, and RSS feed contain the new article locally. Published copy contains no em dash or en dash punctuation.

Deployment, live endpoint verification, IndexNow, Rich Results, Google Search Console, LinkedIn, and X preparation remain pending.
