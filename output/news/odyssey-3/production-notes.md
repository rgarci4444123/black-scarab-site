# Odyssey 3 news report

## Reporting record

Prepared September 15, 2026 from Odyssey's launch announcement, company research and funding materials, partner descriptions, and independent reporting. The supplied social post was treated as a research lead rather than finished copy.

Odyssey's September 15 release establishes the architecture description, selected demonstrations, training data amounts for application policies, relative driving result, partner involvement, and planned public availability. Flexion's site clarifies that the humanoid demonstration sits inside a broader partner autonomy stack. Poke & Wiggle's site confirms its focus on robot policies, while the actual Odyssey 3 benchmark program remains future work. TechCrunch provides independent context on Odyssey's funding, founders, and earlier world model limitations.

The report attributes all task performance to Odyssey. It does not invent model size, pretraining data volume, compute, task success rates, absolute driving distance, robot models, drone hardware, customers, pricing, revenue, or production deployments. The India driving result is described as a test with safety driver interventions, not a driverless commercial deployment. The drone result is described as simulation only.

## Artwork

Original Black Scarab editorial illustration generated with the built in image generation tool. It depicts a fictional shared world model connecting a generic robot arm, humanoid, vehicle, and drone. It does not reproduce Odyssey branding, partner hardware, or an actual deployment.

Asset: `public/images/news/odyssey-3-foundation-world-model.png`

Prompt summary: A wide editorial illustration of one abstract volumetric world model connecting a generic industrial robot arm, humanoid, autonomous vehicle, and drone in a coherent warm ivory research environment. Charcoal, muted sage, and restrained amber palette. No logos, text, labels, numbers, watermarks, recognizable products, or official marketing composition.

## Publication sequence

Publish and verify the website article first. Then publish and verify the LinkedIn post from Black Scarab company ID 111898269, beginning with `NEWS | Odyssey and Odyssey 3`, and place the live article link in the first Black Scarab comment. Prepare the X edition only after the website and LinkedIn are live and verified. Rodolfo publishes X manually because this report is outside the authorized manufacturing series.

## LinkedIn draft

NEWS | Odyssey and Odyssey 3

Can one visual foundation model learn enough about the world to control machines that move in completely different ways?

Odyssey says its new Odyssey 3 model provides a shared backbone for robot arms, humanoids, vehicles, drones, artificial intelligence agents, and video games. Each application keeps the pretrained model frozen and adds a smaller action layer suited to its controls.

The driving result is the clearest number. A policy trained on 20 hours of simulated data reportedly traveled about 77 percent as far between safety driver interventions as comparison policies trained on real footage during tests on roads in India.

The reality check is just as important. Odyssey has not published absolute intervention distances, task success rates, model size, training data details, pricing, or customer deployments. The drone result remains in simulation, the humanoid work includes substantial engineering from Flexion Robotics, and public access is promised in the coming weeks.

Our report separates the shared architecture from the task specific adaptation and explains the evidence still needed.

Full report link is in the comments.

#WorldModels #Robotics #AutonomousVehicles #EmbodiedAI #PhysicalAI

Image alternative text: Editorial illustration of one abstract world model connecting a generic robot arm, humanoid, autonomous vehicle, and drone in a warm ivory research environment.

## Validation status

Targeted lint for `lib/news.ts` passed. The production build passed and generated the new article route.

Full repository lint still reports fifteen preexisting CommonJS import errors in artwork scripts under `output/brand` and `output/x`, plus two existing image warnings. No unrelated scripts were changed.

The article and news index were visually reviewed at desktop width and at a 390 pixel mobile viewport. The headline, summary, byline, cover crops, caption, At a glance box, article body, sources, and author card render cleanly. The mobile document has no horizontal overflow.

The canonical URL, description, Open Graph image, Twitter image, publication timestamp, and NewsArticle structured data were verified locally. The structured author name is `Rodolfo Garcia Calderoni`, with `CFA` stored separately in `honorificSuffix`.

The main sitemap, news sitemap, and RSS feed contain the new article locally. Published copy contains no em dash or en dash punctuation.

Website commit `e43867c` deployed successfully. The live article, cover, and news index returned HTTP 200. The canonical URL, social image metadata, NewsArticle data, publication timestamp, and author credential were verified in production. The main sitemap, news sitemap, and RSS feed all contain the article.

IndexNow accepted the article and news index with status 200. Google Rich Results Test detected two valid items, Article and Organization, after a successful live crawl with no reported errors. Result: https://search.google.com/test/rich-results/result?id=AKja-m6IlKNnsJRT0V-5SQ

Google Search Console reports the new URL as unknown to Google. The one time indexing request is staged but has not been submitted.

The recent Black Scarab company feed and repository notes contained no duplicate Odyssey 3 news post. The LinkedIn draft is staged in the composer for Black Scarab company ID 111898269. Cover upload, publication, and the first link comment remain pending confirmation.
