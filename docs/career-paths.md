# Career Paths

The homepage, four category hubs, assessment and profession guides under `/career-paths` use the existing `SitePage`, `SiteSurface`, header, footer and font loading. The November 3 release adds the discovery assessment and four comprehensive profession guides. The main menu includes Career Paths; About is in the footer.

`lib/career-paths/types.ts` defines the family, occupation, compensation, employment, source, and learning-resource models. `families.ts` holds the four guide foundations. `occupations.ts` holds 20 starting roles, five per category, each with one primary family. Add secondary specializations without duplicating primary assignments. Cross-functional occupations can have a null primary family and a cross-functional track.

Edit family introductions, examples, skills, qualifications, and introductory pathways in `families.ts`. Add verified sources with stable citation IDs. Populate review dates only after editorial review. Foundation and published families appear in navigation and the sitemap; draft and archived families do not.

Publish researched records only with geography, dates, methodology and source IDs. The discovery hubs reuse the public November 2 snapshot through `research.ts`: 1,029 screened advertisements from 46 employers. Coverage is purposive and uneven; counts are not hires, growth or live vacancies. Skills are automatically coded, with required-or-option, preferred and contextual wording kept separate. Pay examples retain the advertised title, location, currency, period and source. They are not salary averages or consistently identified as base pay.

All main-section title content is centralized in `lib/section-headers.ts`, rendered by `components/section-hero.tsx`. Discovery CSS is scoped to Career Paths. The homepage has one assessment invitation and the four category cards. Employer research is available within the category hubs.

`CareerGuideContent` and `guides.ts` distinguish comprehensive profession guides from occupation summaries. The nested `[slug]/[profession]` template and sitemap generate only completed guides marked published with populated sections and citations. This content visibility flag does not deploy or push the local implementation. Completed guides cover Mechanical Engineer, Robot Learning Engineer, Robotics Simulation Engineer and Robotics Integration Engineer. Other professions retain unlinked descriptions. Category role anchors remain usable destinations.

## Assessment

`assessment-questions.ts` contains ten questions about everyday activities, practical experience, problem-solving, learning and working preferences. No question requires robotics vocabulary. School, university, home and work experience count. Starting choices describe career stage rather than list occupations. Visual design and communication are recognized as transferable experience without implying technical qualifications. `assessment-engine.ts` caps each question’s contribution at four points per field, uses interests as the main signal and treats starting situation as unscored context. Learning commitment does not affect ranking. Only explicitly reported experience populates the experience list; an interest never becomes a claimed qualification. Broad answers suggest fields and examples of roles to explore, rather than establish suitability for a particular job.

The local results redesign presents one primary category, two careers, one secondary category and explore/retake actions. Profession links use the published-guide registry; unpublished roles remain plain text. Ties retain the matching engine’s existing field order. Entirely undecided interests show a concise four-field chooser. The questionnaire, validation and matching logic are unchanged. Results omit answer explanations, skills reports, project/resource directories and employer evidence. The server-rendered quiz introduction is supplied as children and is shown only while answering. Answers and retake behavior remain in React memory.

## Curated resources

`resources.ts` is an explicit, reviewed registry with publication status, category and profession associations, level and an editorial rationale. There is no automated keyword matching. Three Black Scarab explainers are included: actuators for hardware components and trade-offs; robot policies for observations, actions and learned behavior; industrial automation for the factory control loop. Broad company, funding and industry stories are excluded. External resources point to specific official learning material. Omit a section when it has no qualifying resources.

Run `node --test scripts/career-discovery.test.mjs` for scoring, novice and trade profiles, answer validation, research integrity and response-handling checks. Also verify complete questionnaire runs, keyboard navigation and mobile layouts in the local preview.

## Phase 2: short categories and the first profession guide

Category pages now contain a compact introduction and assessment link, the five profession descriptions, one dated hiring snapshot and text links to the other fields. Only a profession with a completed registry entry gets a Read career guide link. The larger research, education, project and resource sections are no longer rendered there. Their content remains in `families.ts`, `discovery.ts`, `resources.ts`, `research.ts`, the public research export and the original research components for future editorial use.

`mechanical-engineer-guide.ts` holds seven primary researched sections plus introduction, overview and next steps, source associations, six skill-frequency rows, three captured California salary examples and a bounded hand-actuated gripper project. The reusable `CareerGuideBlock` union supports paragraphs, subheadings, lists, tables, figures and a short resource list; `career-profession-guide.tsx` renders the editorial template. It includes compact breadcrumbs, an expandable contents list, responsive tables and a return to the category’s profession list. Article and breadcrumb structured data contain no salary or FAQ schema and do not invent a publication date for this preview.

Research scope matters: the 132-posting mechanical family includes aircraft, marine and supporting infrastructure work, not just robot mechanisms. Four role assignments were analyst reviewed; skill counts are machine coded. Counts distinguish required-or-option, preferred and contextual mentions. Salary examples retain exact roles and locations and do not form a level-based pay ladder. The external BLS reference is the May 2025 US national mechanical-engineering median, across industries and experience levels, and is labeled separately from employer advertisements.

No existing Black Scarab editorial article is linked from the Phase 2 category or mechanical guide. The guide’s learning links are the official archived FreeCAD introduction and MIT’s open 2009 design course, selected for CAD foundations and design exercises. The source list also identifies the exact employer evidence, BLS, ASME and SMC references. There is no automated related-content selection.

Run `node --test scripts/career-discovery.test.mjs scripts/career-guides.test.mjs`. Guide checks cover publication gates, references, source-backed table values and resource destinations. Verify all seven implemented Career Paths routes, the sitemap, an unfinished profession’s 404, desktop/mobile navigation, the gripper diagram and horizontal keyboard scrolling of the skill table. No production deployment, Git push or other guide generation is part of this phase.

## Editorial reference layout

The mechanical guide now has a short introduction, an optional four-item career overview, seven primary sections and separate next steps. Existing section fragments are retained, including `the-role`, `day-to-day`, `skills`, `education`, `salary`, `employers`, `transition`, `portfolio` and `next-steps`. Its URL, metadata, citations and original November 2 snapshot remain unchanged.

`career-guide-elements.tsx` provides server-rendered overview, navigation, skill-mention chart, compensation table and source-note components. The structured model also supports concise definition-list summaries and calculation examples. These are optional editorial blocks, not a required sequence for every future profession. The chart scales each count against the full role denominator and exposes the same counts as text. Coding states remain in a native expandable detail with a keyboard-scrollable table. The contents list is initially expanded and can be collapsed on desktop or mobile. References are grouped in a separate disclosure below the methodology.

The gripper illustration distinguishes actual static friction `f` from capacity `μF`. For the stated stationary, symmetrical case, `2f = mg` and `f ≤ μF`; the chosen-margin calculation remains `F ≥ S × m × g / (2μ)`, yielding 24.5 N per jaw for the stated example. The portfolio section retains the target, core workflow and deliverables in a shorter form. No standalone tutorial is linked or generated.

The full preceding guide is preserved in `research/career-guides/mechanical-engineer/before-editorial-refinement.json` for editorial reference and possible future tutorial development. Tests compare retained research and salary values, source references and metadata, and verify the per-jaw calculation. `career-guide-editorial.css` scopes the new presentation to the profession template; homepage, category and assessment components are unchanged.

## Phase 3: four guides and pinned evidence

The guide registry contains Mechanical Engineer, Robot Learning Engineer, Robotics Simulation Engineer and Robotics Integration Engineer. Category profession rows and the sitemap read this registry. The assessment receives only a small occupation-to-guide-URL map; its matching engine does not import publication state. Unfinished roles retain their category anchors.

Search-intent research was completed before the new guide drafts. See `research/seo/2026-11-03/README.md`, `decisions.json` and the saved Google SERP/autocomplete observations. Volume, keyword difficulty and Search Console performance are unavailable. Observed suggestions and editorial coverage candidates are explicitly separate. The Mechanical Engineer URL is preserved.

### Research boundaries

1. Raw employer responses remain in the existing Black Scarab Intelligence archive, `research/physical-ai/2026-11-02/raw/`. Do not copy them into page components or replace them with live URLs.
2. Normalized source records and section/clause evidence remain in that archive's `postings.jsonl` and `skill-evidence.jsonl`. Original collection/review flags are preserved.
3. The unchanged aggregate `public/research/physical-ai-careers-2026-11-02.json` holds cohort counts, skill wording classes and original pay examples. Its SHA256 is `65a83512b9998d7d17a0cd1be5aaad273dc57eed13fab66180bd7c81877467e7`.
4. `public/research/career-guide-evidence-2026-11-02.json` adds a compact selected-source review layer: employer/record IDs, locations/countries, conditional qualifications, application scope, source/raw hashes and selected compensation. It references the aggregate and archive rather than duplicating full source text. Detailed original evidence memos are under `research/career-guides/{roleId}/evidence-audit.json`.
5. Guide modules contain editorial interpretation and explicit immutable snapshot IDs. Numeric counts, skill rows and compensation blocks consume structured data. `research.ts` checks the snapshot/role mapping. No runtime fetch or automatic rewrite occurs.

The simulation cohort includes out-of-scope CPU/circuit work; Systems Integration includes adjacent deployments, internal bring-up, pre-sales and a training-product false positive. Both guides use contextual source comparisons rather than frequency charts. Their broad cohort totals appear only with scope limitations. The assessment suppresses skill-frequency callouts for those two cohorts. Selected full-source checks do not silently change original role-review statuses or establish clean population denominators.

Qualifications are source-context paraphrases, not an aggregated degree-frequency claim. Automated extraction missed degree/experience clauses and sometimes captured pay as experience. The annual integration comparison omits a Skild observation whose full text did not state a period. The simulation comparison preserves two different assignments rather than merging NVIDIA's level-specific ranges. No growth, hires, live opening totals or industry-wide salary average is inferred.

### Validation and update review

Run:

```sh
node scripts/validate-career-research.mjs
node scripts/validate-career-research.mjs --archive-root '/path/to/existing/Black Scarab Intelligence project'
node scripts/validate-career-research.mjs --candidate '/path/to/candidate-export.json'
node --test scripts/career-discovery.test.mjs scripts/career-guides.test.mjs
```

The optional archive audit checks selected normalized text and raw-response hashes without downloading or modifying records. The candidate command accepts the existing aggregate schema, validates denominators/classes and prints affected guides and changed fields. It makes no file, editorial or publication changes. Changed sampling/coding invalidates naive trend comparisons; differences are review signals, not demand growth.

For a future snapshot: preserve raw inputs and manifests, validate normalized role boundaries and review exceptions, regenerate aggregates and selected evidence, compare coverage/definitions, review every affected claim and pay/degree context, then explicitly register the new snapshot/evidence and change approved guide pins. Keep prior exports available. Approve publication separately. This phase adds no ingestion scheduler or automated deployment.

`reviewedAt` is the editorial date; `research.snapshotId` identifies the separate employer collection date. `publishedAt` records the four guides’ first publication on November 3, 2026. The existing `published` content status gates complete preview routes, links and sitemap entries; it is not evidence of a production deployment.

### Search Console review

`node scripts/review-career-search-console.mjs` prints the four canonical production URLs and an input contract. With an actual Search Analytics JSON export, pass its path to validate and list observed page/query rows. Required wrapper fields are `siteUrl`, `dateRange`, `searchType`, `dimensions` and unmodified API `rows`; include `page` and `query` dimensions, optionally date/country/device. No account is connected by this script and no data is invented. Credentials do not belong in the repository.

Review genuine impressions/clicks/CTR/average-position observations using matched periods and filters after publication/indexing. Inspect high-impression relevant queries with few clicks before editing titles or coverage; compare pages and emerging queries over time. Query privacy, row limits and omitted zero-impression rows mean exported query totals are not complete site totals. Average position is not a stable rank. There are no present traffic forecasts or measured SEO outcomes.

### Research gaps to address before expansion

Prioritize manual role-boundary corrections and representative employer/country coverage before multiplying records. Preserve the original cohort and record corrections in a versioned successor. Add labeled qualification alternatives, seniority, salary basis/period/location and fuller source-span provenance; audit automatic skill wording against a reviewed sample. Track collection failures and comparable repeated cohorts before estimating changes over time. Future tutorials should be linked only after publication and only when they materially extend the guide project.

### Phase 3 local review and QA

The final built preview is available at `http://127.0.0.1:3004/career-paths`. The existing development server on port 3003 remains running; it retained a cached component during this session, so the right-pane guide tabs use the fresh build on 3004. No hosting, production publication or Git push occurred.

Validation completed November 3, 2026:

- Fifteen career discovery/guide tests pass; type checking and scoped career-code lint pass.
- Full production build passes, including all four generated guide routes and verification of 166 existing article previews.
- Source audit verifies 37 selected posting text hashes and 25 raw-response hashes against the existing archive.
- A synthetic candidate contract check confirms changed collection dates flag all four guides for editorial review, malformed skill partitions fail validation and original files remain unchanged.
- Final-build HTTP checks pass for guide/category links, unique descriptions/canonicals, Article/breadcrumb data, section fragments, research downloads and sitemap inclusion. Unfinished guides return 404.
- Mobile checks at 390 px show no page overflow across all four guides. Three-column comparisons stack with visible field labels; salary amounts stay intact; skill details remain keyboard-scrollable. Desktop checks cover contents, comparisons and compensation.
- A ten-question beginner assessment walkthrough reaches the Robot Learning guide directly while unfinished recommendations retain category anchors. Scoring remains independent of published content.
- The homepage component, category template, original aggregate and route/schema source retain their pre-Phase-3 hashes.

Full `npm run lint` still reports three pre-existing CommonJS import errors in the tracked, unchanged `output/x/plus-one/render.cjs`, plus the existing image warning in `app/insights/page.tsx`. Lint excluding generated `output/**` completes with only that warning; focused career-code lint is clean. These unrelated files were not modified.

### Editorial restraint refinement

The project-wide standard is recorded in `AGENTS.md`: precision in the research, simplicity in the presentation. The four guides now use shorter salary/skill notes and a dedicated, collapsed Research methodology disclosure. Full methodology text, source references, research values, snapshot pins and SEO metadata are retained. Source-specific education and salary distinctions remain beside findings when they affect interpretation.

The revised local preview runs on port 3005. Fifteen existing tests, type checking, focused lint and the full build pass.


### November 3 release

The four guides use distinct visible headlines and exact SEO titles, one concise description and a consistent four-field overview. Research and editorial dates appear in metadata and methodology. The selected user-supplied illustration follows Career at a Glance; optimized WebP assets retain the original proportions and include descriptive alternative text. The hub assessment button uses black text and a two-pixel outline in the existing link blue.

Robot Learning, Simulation and Integration show Black Scarab estimates of $275,000, $183,000 and $158,000 per year. Each estimate links to its own versioned derivation containing eligible observations, source hashes, exclusions and the median range-midpoint calculation. Mechanical Engineering shows the identified Ambi Robotics employer example. Original snapshot and reviewed evidence exports are unchanged.

Production uses the existing GitHub `main` to Vercel workflow. Validate the career routes, four guide images, assessment flow, exact SEO titles, canonicals, Article/Breadcrumb structured data, public research downloads and sitemap after deployment.


### Quiz results presentation

The completed quiz presents one prominent category, two careers, a quieter secondary field and explore/retake actions. Only published profession guides are linked. The questionnaire and matching engine retain their previous source hashes. Validation covers the regular match, deterministic tie, undecided-interest state, retake reset, publication-gated career links and responsive rendering.

### Sequential guide expansion, November 9

The Electrical Engineer guide is the next completed local preview at `/career-paths/hardware-manufacturing/electrical-engineer`. It reuses the existing editorial template. The existing four guides, quiz questions, scoring and original research exports remain unchanged. A completed local registry entry exposes the preview through category links, assessment links and the local sitemap; it does not publish the page to production. No first-publication date is assigned before deployment.

The new evidence layer is `/research/electrical-engineer-evidence-2026-11-09.json`, pinned to the original November 2 snapshot. Eight contextual employer-source reviews retain qualification spans and original source hashes. Skills are presented qualitatively because the broad electrical cohort also includes adjacent work. The $181,000 Black Scarab compensation estimate uses 28 eligible U.S. advertisements across 11 employers; its separate derivation preserves inclusion decisions, exclusions, salary basis and source provenance. Reproduce it with `python3 scripts/build-electrical-guide-research.py --archive-root '/path/to/Black Scarab Career Paths'`. The research validator resolves each guide's evidence path, preserving older exports.

Continue in the order recorded in `docs/career-guide-queue.json`: complete research, draft, local implementation and responsive review for one profession before moving to the next. Perception Engineer follows Electrical Engineer, then Robotics Data Engineer and Field Service Engineer.

The November 9 user revision supplies the Electrical Engineer headline, seven expanded article sections, four salary examples, a 3.3 V I2C distance-sensor portfolio project and three learning links. The matching source record places the Shield AI example in Dallas. The retained methodology links the verified compensation derivation; the supplied draft’s missing-methodology note is superseded. The source hash and these corrections are recorded in `research/career-guides/electrical-engineer/editorial-revision-2026-11-09.json`.

The user-supplied electrical architecture diagram follows the opening work description. Its 1536 × 1024 proportions are preserved in a lossless WebP asset, with descriptive alternative text and a full-size link. The local development preview on port 3021 updates as edits are made.

### Electrical release and Perception preview, November 9

Electrical Engineer is deployed in commit `5a78b2019b0f927528695f3ba462dd9e1526817b`. Its live guide, dates, images, research downloads, category link, sitemap and assessment were verified. Perception Engineer is the next local review at `/career-paths/intelligence-autonomy/perception-engineer`; it has no first-publication date and has not been pushed. Its separate evidence layer reviews nine full sources, and its $224,000 compensation estimate derives from 27 annual U.S. advertisements across 13 employers. The dated source files remain unchanged. Reproduce the derivation with `scripts/build-perception-guide-research.py --archive-root` using the preserved archive. The local registry exposes the completed draft for review; production still contains only the five approved guides.

The Perception Engineer user revision updates the headline, overview, eight article sections and three learning links. Existing fragments remain, with `perception-vs-computer-vision` added for the new comparison section. The hero, URL, SEO title and compensation derivation are retained. The source hash and qualification/salary-label decisions are recorded in `research/career-guides/perception-engineer/editorial-revision-2026-11-09.json`.

### Perception release and Robotics Data Engineer preview, November 9

Perception Engineer is deployed in commit `6dabb25c40a10c41065e2801c4d8d622a797c4f1`. Production checks confirmed its metadata, images, compensation, research downloads, category link, sitemap and assessment. The workflow image appears in the later comparison section.

Robotics Data Engineer is the next local review at `/career-paths/platforms-simulation/robotics-data-engineer`. It has no first-publication date. Its evidence layer reviews nine full employer sources; the $215,000 estimate derives from nine eligible annual U.S. advertisements across seven employers. Reproduce it with `python3 scripts/build-robotics-data-guide-research.py --archive-root '/path/to/Black Scarab Career Paths'`. Broad-cohort skill frequencies and opening totals are not used.

Guide artwork should vary its subject, perspective and composition. A person is optional; avoid repeatedly defaulting to the same gender or engineer-at-screen scene. Futuristic environments are welcome. Use roughly 80–90% black, white and gray with 10–20% deliberate color accents, reflecting the Black Scarab identity. Main images remain free of editorial titles and explanatory text.

### In-article visual pilot, November 9

Robotics Data Engineer replaces the opening process table with a responsive workflow diagram in the skills section: Record → Align → Check → Release, with flagged recordings branching to review and reprocessing. It uses semantic HTML, selectable text and a vertical mobile layout. The diagram synthesizes the reviewed recording and dataset-quality responsibilities; it is not measured conversion or throughput data. The user is reviewing this pilot before adopting the approach for future guides. Choose future visual formats to suit the profession and evidence rather than repeating one graphic.

Robotics Data Engineer and the in-article visual pilot were approved for push and deployment on November 9, 2026. Set the guide’s first-publication date to November 9. Future guides should include a profession-specific explanatory visual and begin with the full 20-role completion tracker. Field Service Engineer follows next.

### Robotics Data Engineer release and Field Service Engineer review

Robotics Data Engineer is deployed in commit `684d1b5d8a95352c238c258e3d0463a80d25ec50`, verified November 9, 2026. Its hero, workflow, compensation, research downloads, category, sitemap, assessment and structured publication date are live.

Field Service Engineer is the next local draft at `/career-paths/integration-operations/field-service-engineer`. Ten full sources support the editorial review. The $113,000 estimate uses eight explicit annual U.S. salary observations across four employers; hourly roles and overtime-based annualized earnings remain separate. The derivation records a reviewed Indianapolis geography correction without changing the original archive. Reproduce with `scripts/build-field-service-guide-research.py --archive-root`. The new branching diagnostic map is an illustrative hypothesis guide, separate from the hero and the prior sequential workflow. The portfolio project is software-only. No first-publication date is assigned.

The Field Service Engineer user revision expands the guide to eight article sections, including a standalone comparison with integration and operations. Existing fragments are retained, with `field-service-vs-integration` added. The supplied four fault categories now use the diagnostic visual in the warehouse scenario. The hero, SEO title and verified compensation derivation are retained. The source hash and precise salary-label decisions are recorded in `research/career-guides/field-service-engineer/editorial-revision-2026-11-09.json`.

Field Service Engineer’s revised copy, hero and four-category diagnostic map were approved for push and deployment November 9, 2026. Assign its first-publication date to November 9. Embedded Software Engineer is next in the local review queue.

### Field Service release and Embedded Software Engineer review

Field Service Engineer is deployed in commit `1e512545df4adc29c15ba9bae3182cbdcb3dc1c6`, verified November 9, 2026. The revised eight-section guide, four-branch diagnostic map, hero, $113,000 estimate, evidence downloads, metadata, category, sitemap and assessment are live.

Embedded Software Engineer is the next local draft at `/career-paths/hardware-manufacturing/embedded-software-engineer`. Ten contextual full-source reviews support the guide. The $205,000 estimate uses 26 eligible annual U.S. observations across 11 employers. Primarily integration, infotainment and testing roles, mixed geography and unverified annual periods are excluded. Reproduce with `scripts/build-embedded-guide-research.py --archive-root`. The timing visual is illustrative elapsed-time arithmetic, not an employer benchmark. The hero uses a high-key macro view of a robot’s embedded electronics with neutral materials and lime accents. The draft has no first-publication date.

The Embedded Software Engineer user revision expands the guide to eight sections, including `embedded-software-vs-other-roles`. Existing fragments, hero, SEO title and compensation derivation are retained. The timing graphic now sits alongside the slow-response scenario. The revised portfolio includes sensor fault cases, simulated timestamps and an optional physical extension. The source hash and salary-label decisions are recorded in `research/career-guides/embedded-software-engineer/editorial-revision-2026-11-09.json`. The FreeRTOS learning link resolves to the official canonical books page.

## Robotics Controls Engineer local draft · November 9, 2026

Local route: `/career-paths/intelligence-autonomy/robotics-controls-engineer`. Eight researched sections, four-field introduction and a monochrome quadruped-on-tilt-platform illustration. A server-rendered response chart compares exact second-order models using the Career Paths blue-violet accent and gray; no new client bundle or chart dependency.

Ten stored employer sources, with duties reviewed across actuator, whole-body, manipulation and vehicle control. Salary derivation uses five eligible annual U.S. observations across three employers, including direct controller-development roles classified originally as robot learning and embedded software. Original research classifications remain unchanged. The median midpoint is $250,000; sample concentration and experienced-role scope are documented in methodology. The route is available locally for review, with no first-publication date.

The complete user rewrite was applied from attachment `6ad52d17-1365-4fd6-a69a-bb097d32e646` on November 9. Added the separate adjacent-career comparison, expanded the simulated-joint exercise and moved the analytical response chart to the shaking-arm example. Annual salary labels retain the verified source basis. Review record contains source hash and editorial adjustments.

## Machine Learning Infrastructure Engineer local draft · November 9, 2026

Local route: `/career-paths/platforms-simulation/machine-learning-infrastructure-engineer`. Eight sections distinguish training systems, experiment platforms, evaluation and model delivery from adjacent careers. New high-key compute-cluster illustration with graphite, white and amber accents. The article includes a numerical scaling comparison showing elapsed time and allocated GPU-minutes under explicit illustrative assumptions, with a reproducible model export.

Twelve stored full employer sources reviewed. Salary derivation uses eight complete annual U.S. ranges across five employers, median midpoint $252,500 rounded to a $253,000 Black Scarab estimate. The methodology records experienced-role scope, employer concentration and exclusions, including an external API product role whose duties differ from its classifier title. No first-publication date; local review required.

User revision, November 9: applied the complete ML Infrastructure rewrite from attachment `b1c2c8d6-d193-47a5-8afc-5da1ec86b571`, including the robotics-specific H1, MLOps comparison, checkpoint scenario and expanded portfolio. Replaced the rejected product-style cutaway with a cinematic compute-hall cover at `public/career-paths/ml-infrastructure-engineer-lab-v2.webp`. Artwork revision record preserves the creative brief, prompt, previous recipe and six-cover review. Salary source basis and numerical scaling values remain unchanged. Local review continues.
