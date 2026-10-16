# FCC robotics supply chain reference

This is an independently editable reference for the guide at `/insights/fcc-covered-list-robotics-supply-chain`.

* `article.json` contains the narrative, section anchors, tool placements and numbered evidence references.
* `covered-list.json` records official equipment/service descriptions separately from editorial explanations, producer aliases, production location categories, use restrictions, source URLs and verification dates. The UAS row is split into its location entry and the two named statutory producers. The dataset is not an exhaustive affiliate registry.
* `providers.json` records provider documented capabilities, the practical evaluation question and primary evidence. An unverified FCC 26-50 capability must not become a confirmed capability through inference.
* `resources.json` contains the official resource library and questions each resource helps answer.

To refresh: read the live Covered List and its conditional approvals, check the current final rules and agency guidance, preserve evidence in a dated research bundle, update the affected record and its verification date, and verify the reference search, category filter, official handoffs and supplier request download in the browser. Preserve entry identities. Check the definition and exceptions rather than inferring coverage from nationality or a producer name alone. Recheck provider service pages and the exact lab or TCB recognition when needed for a particular authorization.

The official FCC consolidated CSV and the public compilation repository are separate resources. The October 14 downloaded CSV did not contain FCC Covered List source rows, and the repository's raw output directory contained only `.gitkeep`. This article's Covered List reference was transcribed and checked against the live FCC Covered List instead. Do not replace it with a raw consolidated export without checking source coverage and legal descriptions.

Publication authorized October 16, 2026. Registered through the normal Insights collection, index and sitemap. The FCC Covered List was refreshed against the live October 9 list on October 16.

## Founder guide redesign, October 16, 2026

The page is now a short guide: context and history, the complete robot,
electronic assemblies, supplier lookup, supplier records and expert handoffs.
The BOM screening form and redesign calculator are no longer rendered or shipped
as page interactions. Their earlier utilities and tests remain as historical local
work and are not evidence that the new guide has been verified.

`components/fcc-supply-chain/tools.tsx` renders static guidance and native
expandable sections on the server. Only `covered-list.tsx` is a client component.
The supplier request is a plain text download at
`public/data/fcc-supply-chain/supplier-request.txt`.

Producer records were checked October 16. Provider records retain their October 14 verification dates.
This redesign introduces no additional companies or investor relationships; the
existing Intelligence reconciliation receipt remains the intake record.

History evidence added: the FCC March 2021 first-list public notice
(DA 21-309) and the November 2022 authorization order (FCC 22-84).
The government security rationale is attributed to the robotics determination
and FCC 26-50, rather than presented as Black Scarab findings about each supplier.
