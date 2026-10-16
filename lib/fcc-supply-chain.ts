import type { CaseStudyArticle } from "@/lib/case-studies";
import type { FccToolName } from "@/components/fcc-supply-chain/tools";
import sections from "../data/fcc-supply-chain/article.json";
import { complianceProviders } from "@/lib/fcc-reference";

export const fccReviewSlug = "fcc-covered-list-robotics-supply-chain";
export const fccRegulatorySources = [
  { label: "FCC Covered List, October 9, 2026 snapshot and conditional approvals", url: "https://www.fcc.gov/supplychain/coveredlist" },
  { label: "FCC 26-50, adopted order, final rules and Third Further Notice", url: "https://docs.fcc.gov/public/attachments/FCC-26-50A1.pdf" },
  { label: "91 FR 57798, September 11 final rule and compliance dates", url: "https://www.govinfo.gov/content/pkg/FR-2026-09-11/html/2026-18535.htm" },
  { label: "DA 25-1086, UAS and Section 1709 Covered List additions", url: "https://docs.fcc.gov/public/attachments/DA-25-1086A1.pdf" },
  { label: "FCC advanced robotic devices and power inverters FAQs", url: "https://www.fcc.gov/covered-list-faqs-robots-inverters" },
  { label: "DA 26-786, robotics addition and national security determination", url: "https://docs.fcc.gov/public/attachments/DA-26-786A1.pdf" },
  { label: "DA 26-962, Consolidated Prohibited Entity List public notice", url: "https://docs.fcc.gov/public/attachments/DA-26-962A1.pdf" },
  { label: "FCC consolidation repository and methodology limitations", url: "https://github.com/FCC/consolidated-prohibited-entity-list" },
  { label: "Commerce Consolidated Screening List and API resources", url: "https://www.trade.gov/consolidated-screening-list" },
  { label: "OFAC Sanctions List Service and search guidance", url: "https://ofac.treasury.gov/sanctions-list-service" },
  { label: "91 FR 51139, August 7 proposed rulemaking", url: "https://www.govinfo.gov/content/pkg/FR-2026-08-07/html/2026-16197.htm" },
  { label: "47 U.S.C. 1601, Secure Networks Act list criteria", url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title47/html/USCODE-2024-title47-chap15-sec1601.htm" },
  { label: "FY2025 NDAA, Section 1709(a)(1)", url: "https://www.congress.gov/118/plaws/publ159/PLAW-118publ159.pdf" },
  { label: "DA 26-870, revised power inverter definitions", url: "https://docs.fcc.gov/public/attachments/DA-26-870A1.pdf" },
  { label: "Advanced robotics conditional approval guidance and requested evidence", url: "https://www.fcc.gov/sites/default/files/robots-ca.pdf" },
];

export function fccSupplyChainDeepDive(): CaseStudyArticle {
  return {
    slug: "fcc-covered-list-robotics-supply-chain",
    title: "FCC Rules for Robotics: What to Check Before You Build",
    summary: "The rules behind the headlines, the parts worth checking and the records to take to your suppliers and advisers.",
    seoTitle: "FCC Rules for Robotics: A Founder’s Supply Chain Guide",
    seoDescription: "Understand FCC robot and component restrictions, search the Covered List, download a supplier checklist and find help with US equipment approvals.",
    publishedLabel: "October 16, 2026",
    publishedDate: "2026-10-16",
    modifiedAt: "2026-10-16T14:52:53Z",
    publishedAt: "2026-10-16T14:10:23Z",
    typeLabel: "Deep Dive",
    industry: "Robotics",
    taxonomy: { primaryIndustry: "cross-industry", relevantIndustries: ["manufacturing", "warehousing-logistics", "public-safety-government", "energy-utilities"], technologies: ["robotics", "autonomous-mobile-robots", "edge-ai", "sensors", "drones"], applications: ["inspection"] },
    formatLabel: "A practical guide for robot founders",
    image: "/article-images/fcc-robot-supply-chain-cover.png",
    imageAlt: "Overhead editorial interpretation of two open machined robot assemblies separated by a gap bridged by a small red electronic chip.",
    imageCaption: "Editorial illustration by Black Scarab.",
    imageFit: "contain",
    readingMinutes: 9,
    author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
    tags: ["FCC Covered List robotics", "FCC 26-50", "FCC component restrictions", "robotics supply chain compliance", "FCC equipment authorization", "hardware bill of materials compliance", "robotics component traceability", "FCC Covered List manufacturers"],
    sections: sections.map(section => ({ ...section, tool: section.tool as FccToolName | undefined })),

    sources: ["Official FCC list and public notices", "Federal Register final and proposed rules", "US statutes and agency guidance", "Primary provider product and service documentation"],
    sourceLinksPlacement: "bottom",
    sourceLinks: [
      ...fccRegulatorySources.flatMap((source,index) => [1,2,3,4,5,6,12,13,14,15].includes(index+1) ? [{...source,id:`fcc-source-${index+1}`}] : []),
      { label: "2021: FCC publishes the first Covered List", url: "https://docs.fcc.gov/public/attachments/DA-21-309A1_Rcd.pdf" },
      { label: "2022: FCC adopts the equipment authorization prohibition", url: "https://docs.fcc.gov/public/attachments/FCC-22-84A1.pdf" },
      { label: "Reuters, July 28 policy reporting, republished by MarketScreener", url: "https://www.marketscreener.com/news/trump-administration-to-ban-new-chinese-robots-and-inverters-protecting-us-ai-buildout-ce7f51d2d98bff21" },
      ...complianceProviders.map(provider => ({ label: `${provider.name}: ${provider.capabilities.join(" and ")}`, url: provider.sourceUrls[0] })),
    ],
  };
}

