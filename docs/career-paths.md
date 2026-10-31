# Career Paths

The five routes under `/career-paths` use the existing `SitePage`, `SiteSurface`, header, footer, analytics, and font loading. The main menu includes Career Paths; About is in the footer.

`lib/career-paths/types.ts` defines the family, occupation, compensation, employment, source, and learning-resource models. `families.ts` holds the four guide foundations. `occupations.ts` holds 28 representative roles, each with one primary family. Add secondary specializations without duplicating primary assignments. Cross-functional occupations can have a null primary family and a cross-functional track.

Edit family introductions, examples, skills, qualifications, and introductory pathways in `families.ts`. Add verified sources with stable citation IDs. Populate review dates only after editorial review. Foundation and published families appear in navigation and the sitemap; draft and archived families do not.

Compensation and outlook arrays begin empty. Publish researched records only with geography, dates, methodology, and source IDs. Compensation distinguishes occupation, seniority, currency, pay period, base, bonus, and equity. Empty and draft research is not rendered. Learning resources and richer occupation profiles are typed for later expansion; no occupation-detail routes are generated yet.

All main-section title content is centralized in `lib/section-headers.ts`, rendered by `components/section-hero.tsx`. Scoped CSS gives the five sections subtle accent variations. Guide pages use the same title component and `CareerFamilyCard` as the hub, plus a centered reading column and horizontal contents navigation.

To add individual occupation pages later, create one profile template and generate only approved occupation slugs. Keep row links disabled until those routes exist. The occupation model supports responsibilities, skills, education, certifications, seniority, compensation, applications, employers, pathways, citations, and review status.
