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

Website commit `85735e6` was deployed successfully. The live article and cover returned HTTP 200. The canonical URL, social image metadata, NewsArticle data, publication timestamp, and author credential were verified in production. The main sitemap, news sitemap, and RSS feed all contain the article.

IndexNow accepted the article and news index with status 200. Google Rich Results Test detected two valid items, Article and Organization, after a successful live crawl with no reported errors. Result: https://search.google.com/test/rich-results/result?id=6sjKd_05HrsI1UTb_6Di3A

The recent Black Scarab company feed and repository notes contained no duplicate Agility Digit 5 news post before publication.

The Black Scarab LinkedIn company post was published and verified from company ID 111898269. The final post begins with `NEWS | Agility Robotics and Digit 5`, includes the original editorial cover and descriptive alternative text, and states that the full report link is in the comments. The article URL was published and verified as the first comment by Black Scarab.

LinkedIn post: https://www.linkedin.com/feed/update/urn:li:share:7505612017400016896/?actorCompanyId=111898269

Google Search Console accepted the article URL into its priority crawl queue. This records a successful indexing request, not a guarantee of inclusion in Google Search.

The X edition was prepared only after the website and LinkedIn publications were live and verified. The repository publishing log and a focused live search showed no existing Black Scarab X post for Agility Digit 5. X's public profile page could not be fetched independently, so Rodolfo should perform one final profile check before posting. No X publication was performed.

X handoff: `output/x/agility-digit-5/publication.md`

## LinkedIn draft

NEWS | Agility Robotics and Digit 5

Can a nine minute recharge turn one humanoid into a three shift machine?

Agility unveiled Digit 5, an industrial humanoid designed to repeatedly lift 50 pounds, run for 90 minutes, recharge in nine, and deliver more than 20 productive hours across a 24 hour day.

The bigger change is safety. Agility says the new architecture can detect people and make Digit avoid, stop, or sit, reducing the need for traditional protective barriers.

The reality check matters. Early access is not expected until the first half of 2027. The safety claims still need independent validation, RoboFab's 10,000 robot figure is factory capacity rather than current output, and the reported $300 million order book is conditional multi year value rather than recognized revenue.

Our report explains the hardware, safety system, deployment evidence, and commercial milestones that come next.

Full report link is in the comments.

#HumanoidRobots #Robotics #IndustrialAutomation #PhysicalAI #Manufacturing

Image alternative text: Editorial illustration of a generic industrial humanoid carrying a tote in a distribution facility, with a worker at a safe distance and a charging dock in the background.
