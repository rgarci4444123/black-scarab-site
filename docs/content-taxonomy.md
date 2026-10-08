# Article content taxonomy

Approved and implemented October 7, 2026. The approved migration covers 42 News reports, 81 internal Insights articles and six external Insights archive records.

`lib/content-taxonomy.ts` is the authoritative registry for stable industry, technology and application slugs. Display labels are editable independently. All 15 industry archives remain disabled. No industry routes or new interfaces are launched.

## Authoring

Every `NewsUpdate`, `CaseStudyArticle` and derived `Insight` requires a taxonomy object:

```ts
 taxonomy: {
   primaryIndustry: "manufacturing",
   relevantIndustries: [],
   technologies: ["humanoid-robotics", "manipulation"],
   applications: ["material-handling"],
 },
```

Choose one primary industry from the specific article's operating market. Add a secondary industry only when the story substantively covers it. The `cross-industry` slug displays as **Physical AI**, a short label for enabling infrastructure. It does not match every industry when querying. The reviewed assignments also use it for enabling funding ecosystem coverage.

Technology and application arrays may be empty. Add a registry entry before using a new term. Values must be canonical slugs, without duplicates; the primary industry cannot appear in relevant industries. Keep company and product identities, author relationships, series, geography, and commercial context separate from these facets.

Current `category`, `industry` and `tags` fields remain compatibility data for existing presentation, SEO, RSS and search. They are not the controlled taxonomy. Preserve useful original keywords; new facet assignments use canonical terms. The approved tag normalization dispositions are recorded in `output/content-taxonomy/proposed-tag-normalization.json`.

## Future queries

`matchesArticleTaxonomy` combines facets using AND, and selected values inside a facet using OR. An industry match checks both primary and relevant industries.

`filterPublications` supports those facets and optional inclusive `publishedFrom` and `publishedThrough` ISO date bounds. Date-only bounds cover the UTC day. Records without an exact publication date are excluded when date bounds are supplied. Filtering preserves original object identities and source order.

```ts
const reports = filterPublications(newsUpdates, {
  industries: ["mining"],
  applications: ["inspection"],
  publishedFrom: "2026-07-09",
  publishedThrough: "2026-10-07",
});
```

`industryArchivePath` provides stable future URL identities. It does not create a page or enable an archive. `articleTaxonomySchema()` generates a JSON Schema directly from the registry for future export or intake validation. `assertArticleTaxonomy` also enforces cross-field invariants that JSON Schema does not express.

## Validation

- `npm run validate:content-taxonomy` checks vocabulary references, uniqueness, article coverage, and derived archive consistency. This runs automatically before the Next.js production build.
- `npm run test:content-taxonomy` exercises invalid inputs, combined facets, secondary industry matches, Cross-Industry isolation, date bounds, object identity and future route identities.
- Run TypeScript, source lint and the production build for content-model changes.

## Migration verification

All original fields of all 123 internal articles and six external records compare equal to the pre-migration content. The 123 internal taxonomies match the approved backfill exactly. All 140 built HTML pages, including rendered markup and SEO structured data, compare equal after excluding build-specific JavaScript loaders. Presentation source files and public assets are unchanged. RSS and News sitemap responses and headers compare equal.

The production build, TypeScript, taxonomy validation, four taxonomy tests, and source lint pass. Source lint retains one existing image warning in the Insights archive. Repository-wide lint has seven existing errors in generated QA scripts under `output/`.

No deployment was performed. The approved review and detailed mappings remain in [the migration review](content-taxonomy-migration-review.md); implementation verification records are in `output/content-taxonomy/implementation-*-validation.json`.

## Release reconciliation

The remote release inventory includes two already published reports absent from the original local inventory, bringing coverage to 44 News reports and 81 internal Insights articles. The six external Insights archive records are also classified.

| Additional report | Primary Industry |
| --- | --- |
| RobCo reaches a $1 billion valuation and puts Alfie on the launch calendar | Manufacturing |
| Bonsai World puts the next farm inside a simulator before the robot arrives | Agriculture |

RobCo is classified by its factory automation story. Bonsai World is classified by its agricultural autonomy deployment focus; prospective mining and defense markets are not assigned as secondary industries. Article content and metadata remain unchanged.
