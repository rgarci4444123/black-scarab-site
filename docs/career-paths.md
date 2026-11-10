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


## ML Infrastructure release and Industrial Automation local review · November 9, 2026

Machine Learning Infrastructure Engineer is deployed in commit `eef14e10f8dc29302e2642887291825a87a79189`. The complete user rewrite, cinematic v2 cover, $253,000 estimate, scaling comparison, research downloads, metadata and publication date are live and verified.

Industrial Automation Engineer is the next local draft at `/career-paths/integration-operations/industrial-automation-engineer`. Eight sections cover PLC sequences, HMI/SCADA, industrial communication, commissioning, qualifications and a simulated-workcell portfolio. Ten stored employer sources support the contextual review. The entire ten-ad primary cohort plus two adjacent factory-controls advertisements were screened; only OSARO and Skydio supply verified annual U.S. salary ranges. Their median midpoint is $158,500, rounded to $159,000; this narrow experienced-role basis is stated in the compensation section and documented fully in methodology. Reproduce with `scripts/build-industrial-automation-guide-research.py --archive-root`.

The new server-rendered sequence visual separates normal operation from a completion-timeout fault and returns recovery to Idle, with readiness checks and a separate new start required. It is a software illustration, not a safety architecture. The overhead production-line hero uses neutral materials with selective cyan carriers and panels, following six-cover review. No publication date; local review required.


Industrial Automation user revision, November 9: applied attachment `b1a53e97-2219-4773-a233-5b455ace3d75` in full across eight sections, including three specializations, adjacent-career examples, PLC/HMI/network explanations, education routes, employer applications and the seven-step simulated-workcell project. Preserved the hero, original section fragments, compensation derivation and collapsed methodology. The sequence visual sits within the completion-signal troubleshooting scenario. Added CODESYS and PLCopen references and retained Beckhoff's specific state-machine example. Salary-table labels use verified annual salary rather than asserting base pay for the OSARO structured field. Review remains local.


Industrial Automation Engineer approved for push and deployment November 10, 2026, including the complete user rewrite and redesigned connected state-machine graphic. First publication and final editorial review use November 10. Manufacturing Engineer is next for local drafting.


## Industrial Automation release and Manufacturing Engineer local review · November 10, 2026

Industrial Automation Engineer is deployed in commit `339669d3b14ee7ebd77938d51b7de625345f3993`. The full user revision, connected state-machine redesign, $159,000 estimate, hero, metadata, research downloads, category links and sitemap are live and verified. The newer market-data production commit was fast-forwarded before release.

Manufacturing Engineer is the next local draft at `/career-paths/hardware-manufacturing/manufacturing-engineer`. Eight sections cover production-process ownership, NPI, assembly methods, DFM/DFA, tooling, quality, supplier readiness and a passive sensor-bracket portfolio project. Ten stored employer sources reviewed in full. Salary derivation screens the 67-ad primary cohort, admits seven clean annual U.S. observations across six employers, and yields a $182,000 median-midpoint estimate. Two 1X structured/body pay conflicts are excluded, alongside a battery product-design role and dedicated technician, test and quality roles. Reproduce with `scripts/build-manufacturing-guide-research.py --archive-root`.

The in-article visual compares first-pass and final accepted yield for an illustrative 100-assembly batch: 82 first-time passes, 15 passes after rework and three scrapped units. The responsive unit grid conserves the batch and groups outcomes rather than implying a timeline. The hero shows hands, an alignment fixture and repeated robot assemblies, with neutral materials and selective yellow tooling. No first-publication date; user review required.


Manufacturing Engineer user revision, November 10: applied attachment `1296c5a3-bd07-4aa0-869a-74e0d59fa1be` across nine sections, adding a dedicated quality section and moving the existing first-pass-yield visual there. Expanded manufacturing skills, education routes, employer applications, transitions and the eight-step sensor-bracket project; added the supplied ASQ, NIST and SME resources. Consolidated the supplied outcome table and custom grid markup into the existing responsive visual. Salary labels retain the verified annual-advertised basis and $182,000 estimate. Reviewed eight responsive tables and the yield visual on desktop, tablet and narrow mobile. Local review continues at port 3048.

Manufacturing Engineer approved for publication November 10, 2026, including the full user revision, quality section, yield graphic and eight-step project. First-publication and review dates use November 10. Motion Planning Engineer is next for local drafting.


## Manufacturing release and Motion Planning local review · November 10, 2026

Manufacturing Engineer is deployed in commit `ae8a07f49fb5f3c970fa6b069f480e7b87f475db`. The full user rewrite, nine sections, eight-step project, $182,000 estimate, artwork, first-pass-yield visual, metadata, research downloads, category link and sitemap are live and verified.

Motion Planning Engineer is the next local draft at `/career-paths/intelligence-autonomy/motion-planning-engineer`. Eight sections cover manipulation, autonomous vehicles, flight, collision geometry, search/sampling/optimization, trajectory timing and a repeatable planning benchmark. Ten stored full employer sources reviewed, with two additional boundary reviews. The seven eligible annual U.S. salary observations across five employers yield a $217,500 median midpoint, rounded to a $218,000 estimate. Mission routing and discrete task allocation are excluded. Annual frequency is not assumed from salary amounts or annual-bonus wording. Reproduce with `scripts/build-motion-planning-guide-research.py --archive-root`.

A new server-rendered two-panel graphic explains obstacle inflation for a circular robot, with exact shared geometry and a footprint-valid detour. The opening illustration uses an outdoor architectural obstacle course, neutral concrete, a small rover, ghosted poses and selective coral route accents. No first-publication date; local review required.


Motion Planning Engineer user revision, November 10: applied attachment `09c62f57-4cf4-44f9-baef-1e6136999be4` across eight sections. Expanded accessible explanations of geometry, configuration space, collision detection, search, dynamics and trajectory planning; added the supplied transition table and nine-step portfolio project. The existing clearance graphic replaces the duplicated measurement table. Preserved $218,000 estimate, exact geometry, hero, original fragments and full collapsed methodology. Salary-table labels retain verified annual advertised salary rather than assuming base-pay treatment. Added the supplied Modern Robotics and MoveIt resource entries. Local review continues at port 3050.

Motion Planning Engineer approved for publication November 10, 2026, including the complete user revision, nine-step project and clearance graphic. First publication uses November 10. Verification & Validation Engineer is next for local drafting.


## Motion Planning release and V&V local review · November 10, 2026

Motion Planning Engineer is deployed in commit `ef95ec0e73b5bd487edeaade54f9cfefe38f0bdd`. The complete user rewrite, nine-step project, $218,000 estimate, hero, clearance graphic, metadata, research downloads, category link and sitemap are live and verified. The newer Teradyne news release was fast-forwarded before the career-guide push.

Verification & Validation Engineer is the next local draft at `/career-paths/platforms-simulation/verification-and-validation-engineer`. The native occupation ID and URL retain “and”; the immutable research role ID remains `verification-validation-engineer` through the existing mapping. Eight sections cover requirements and intended use, evaluation methods, test automation, SIL/HIL, scenarios, traceability, qualifications and a simulated-system portfolio.

Thirteen complete employer sources and three boundary sources reviewed. Ten eligible annual U.S. observations across six employers produce an exact $174,750 median midpoint, rounded to a $175,000 estimate. The technician advertisement with USD 30–48/year structured metadata and USD 30–48/hour body text is excluded without annualizing. Browser/API QA, cloud/UI operations testing and specialist component work remain distinct. Reproduce with `scripts/build-verification-validation-guide-research.py --archive-root`.

The server-rendered matrix illustrates three passing executed tests with only two of three requirements linked to tests; the uncovered stale-input requirement stays explicit. No universal coverage or safety conclusion follows from the matrix. A new mostly monochrome cover depicts a humanoid in a controlled rain chamber with cyan accents. No first-publication date; local review required.


V&V user revision, November 10: applied the complete supplied portion of attachment `224752ff-3a4f-4226-9f77-f8a224c1e603` across eight sections, including expanded verification/validation explanations, testing environments, metrics, education, career transitions and the first six portfolio steps. The attachment ends mid-heading at `Step 7: Correct the`; the existing correction, final project steps, portfolio contents and closing resources remain until the user supplies the rest. Consolidated repeated traceability tables and custom grid markup into the existing responsive matrix. Preserved $175,000 estimate, research derivation, hero, canonical route and complete methodology. Local review continues.

V&V complete revision received in attachment `34d937e3-fe65-4d1d-90ce-de953842de83`, superseding the truncated source. Applied the supplied Steps 7–9, portfolio contents, advanced extension and NASA/pytest/ROS closing resources. The prior provisional ending is replaced. The complete rewrite remains in local review.

Verification & Validation Engineer approved for publication November 10, 2026, including the complete user revision, nine-step project, traceability graphic and closing resources. First publication uses November 10. Robot Operations Specialist is next for local drafting.

Verification & Validation Engineer is deployed in commit `a3cf085ab90ea9c0b4b945b7c8a32b64c4cffe2a`, verified November 10, 2026. The revised guide, $175,000 estimate, hero, requirements matrix, research downloads, category link and sitemap are live.

Robot Operations Specialist is the next local draft at `/career-paths/integration-operations/robot-operations-specialist`. Eight sections cover operation, teleoperation, test operations, practical skills, qualifications, hourly pay, employers, transitions and a simulated-shift portfolio. Twelve complete employer sources and five boundary sources were reviewed. Eleven hourly observations across seven employers produce a median hourly midpoint of $27.50; 2,080-hour annualization gives $57,200, rounded to $57,000. The estimate is explicitly full-time equivalent, while employer examples retain hourly units. Part-time, temporary and contract-to-hire terms, repeated pay bands, shift differentials and ambiguous-period exclusions are documented. Reproduce with `scripts/build-robot-operations-guide-research.py --archive-root`.

The in-article visual compares two invented 100-mission runs. Both complete 90 missions, with five assisted completions in one and 30 in the other. Counts and assumptions are downloadable; assistance counts do not measure total intervention time or staffing. The server-rendered graphic uses a common scale, three restrained blue/neutral shades and accessible outcome descriptions. The original cover shows a helmeted shift handoff at a futuristic dispatch terminal, with orange workwear accents. No first-publication date is assigned to the local draft.

Robot Operations user revision, November 10: applied attachment `4c7a7c3a-593b-47a2-8a0e-49544f15ec0b` across nine article sections. Added a standalone teleoperation explanation, employer qualifications, transition routes and all eight project steps. Consolidated repeated mission outcome/rate tables into the retained responsive comparison; Fleet A/B labels now match the supplied copy. Preserved the $57,000 full-time-equivalent estimate, source-derived hourly examples, hero, SEO title and canonical. Added the official LeRobot dataset reference for the recording explanation. Detailed research remains collapsed.

Robot Operations Specialist is deployed in commit `7a3346d32fb75e38a1bf012de4b6cee720e5e2e9`, verified November 10, 2026. The complete nine-section user revision, eight-step portfolio, $57,000 full-time-equivalent estimate, hourly examples, original cover and mission comparison are live. The newer Gemini Robotics report was fast-forwarded before release; the production build verified 177 existing article previews.

Hardware Test Engineer is the next local draft at `/career-paths/hardware-manufacturing/hardware-test-engineer`. Eight sections cover component characterization, reliability, physical production-test engineering, instrumentation, fixtures, automation, qualifications and a virtual sensor-test portfolio. Fourteen complete employer sources and one software-platform boundary source were reviewed. Six explicitly annual U.S. pay observations across four employers yield an exact $182,750 median midpoint, rounded to $183,000. The pay sample is concentrated in experienced manufacturing/electrical test work; its scope is stated in the compensation section. Starting-cash ranges with no verified annual period remain excluded. Reproduce with `scripts/build-hardware-test-guide-research.py --archive-root`.

The in-article visual is a server-rendered dot plot of two invented five-reading setups at a 5.00 V simulated reference. Setup A has mean offset +0.20 V and range 0.04 V; Setup B has mean offset 0.00 V and range 0.08 V. Both use the same 4.90–5.30 V scale. It separates repeatability from reference agreement without claiming real calibration quality or full measurement uncertainty. The original cover uses a close technical cutaway of an invented wrist in a working test rig, with violet accents. No first-publication date is assigned to the local draft.

Hardware Test user revision, November 10: applied attachment `0827bd03-e9fd-43fe-a35f-3a36cc264d06` across all eight sections. Expanded the humanoid hand and overheating-joint examples, instruments, calibration/uncertainty, test reports, qualifications, transitions and the full eight-step sensor-testing project. Retained the measurement graphic in place of the repeated comparison table, all exact readings, the original cover and $183,000 estimate. Added the NIST uncertainty reference and clarified torque and absolute-error terminology. Preserved source-derived annual salary examples and full collapsed methodology. Local review continues.

Hardware Test Engineer is deployed in commit `58a6da6fd4c7c25a91274e18eb7a8109658e197c`, verified November 10, 2026. The complete user rewrite, eight-step project, $183,000 estimate, cover, measurement graphic, research downloads, metadata, category link and sitemap are live. Seventeen guides are published.

## Localization & Mapping local draft, November 10, 2026

Added the eighteenth completed local guide at `/career-paths/intelligence-autonomy/localization-and-mapping-engineer`, retaining the existing native occupation slug and mapping it to research role `localization-mapping-engineer`. Seventeen guides are live; Localization has no publication date and awaits user review. The eight-section draft covers pose/state estimation, SLAM, mapping, calibration, related roles, qualifications, compensation, employer examples and a reproducible recorded-data project.

Ten full stored employer sources across seven employers were reviewed, plus three boundary cases. Eight explicitly annual U.S. ranges across six employers produce the $250,000 median-midpoint estimate. Full source hashes, qualification spans, salary exclusions and the reproducible derivation are saved separately from the concise article presentation. Primary technical references are ROS REP 105, Nav2, SLAM Toolbox and GTSAM.

The new in-article visual compares a translation-only pose graph before and after adding one finite-weight loop closure, using a shared distance scale. Its downloadable model preserves displacements, weights, both estimates and assumptions; regression checks verify the least-squares stationary point and positive remaining gap. The original monochrome architectural/point-cloud cover uses restrained blue accents, with a saved creative brief and built-in generation prompt.

Localization editorial revision, November 10: applied the user’s expanded copy across all eight sections, including eight comparison tables, eight portfolio steps and four learning resources. Restyled the existing loop-closure component from the supplied visual reference: direct Start/End labels, restrained blue/teal paths, coral endpoints and prominent computed gap values. Removed axes, the separate symbol legend and duplicate headings. The original numerical model, salary derivation and cover remain attached to the draft.

Localization & Mapping was approved for production November 10, 2026, including the complete user revision and simplified loop-closure comparison. Assign its first publication to November 10. Robotics Platform Engineer follows for local review.
