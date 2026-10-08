import type { ArticleTaxonomy } from "@/lib/content-taxonomy";
import { caseStudies } from "@/lib/case-studies";

export type Insight = {
  taxonomy: ArticleTaxonomy;
  title: string;
  summary: string;
  published: string;
  href: string;
  image?: string;
  kind: "internal" | "external";
  ctaLabel: string;
  series?: {
    name: string;
    label: string;
  };
};

const externalInsights: Insight[] = [
  {
    title: "Nvidia Jetson Edge Computing: A Catalyst for AI Adoption in Latin America",
    summary:
      "An overview of how NVIDIA Jetson is accelerating practical AI adoption across Latin America through localized edge systems.",
    published: "Published on LinkedIn",
    href: "https://www.linkedin.com/pulse/nvidia-jetson-edge-computing-catalyst-ai-adoption-latin-america-badae/?trackingId=26fz0BvRqWFYa73FiYZEaw%3D%3D",
    image: "/article-images/jetson-latam.png",
    taxonomy: { primaryIndustry: "cross-industry", relevantIndustries: [], technologies: ["edge-ai"], applications: [] },
    kind: "external",
    ctaLabel: "Read on LinkedIn",
  },
  {
    title: "The Reflexive Fleet: Edge AI Compute - Transportation & Logistics in LatAm",
    summary:
      "A look at how edge AI can improve logistics performance, fleet intelligence, and operational responsiveness across LatAm.",
    published: "Published on LinkedIn",
    href: "https://www.linkedin.com/pulse/reflexive-fleet-edge-ai-compute-transportation-logistics-xcbze/?trackingId=DFssRfEFEY1RF3lkp2kHag%3D%3D",
    image: "/article-images/logistics-latam.png",
    taxonomy: { primaryIndustry: "transportation-mobility", relevantIndustries: [], technologies: ["edge-ai"], applications: [] },
    kind: "external",
    ctaLabel: "Read on LinkedIn",
  },
  {
    title: "The Precision Harvest: Edge AI Compute - Agriculture in LatAm",
    summary:
      "A breakdown of the hardware and edge AI stack enabling smarter drones, precision monitoring, and modern agriculture systems.",
    published: "Published on LinkedIn",
    href: "https://www.linkedin.com/pulse/precision-harvest-edge-ai-compute-agriculture-latam-black-scarab-y8m8c/?trackingId=80skTvOUFJOjo5yxFXHHfw%3D%3D",
    image: "/article-images/agriculture-latam.png",
    taxonomy: { primaryIndustry: "agriculture", relevantIndustries: [], technologies: ["edge-ai"], applications: [] },
    kind: "external",
    ctaLabel: "Read on LinkedIn",
  },
  {
    title: "The Autonomous Factory: Edge AI and the Nearshoring Gold Rush",
    summary:
      "An exploration of how factories in LatAm can use edge AI to stay competitive as manufacturing and nearshoring accelerate.",
    published: "Published on LinkedIn",
    href: "https://www.linkedin.com/pulse/autonomous-factory-edge-ai-nearshoring-gold-rush-black-scarab-ria9e/?trackingId=y%2FyXzdJtuCc%2FgZasfy%2FU4w%3D%3D",
    image: "/article-images/manufacturing-latam.png",
    taxonomy: { primaryIndustry: "manufacturing", relevantIndustries: [], technologies: ["edge-ai"], applications: [] },
    kind: "external",
    ctaLabel: "Read on LinkedIn",
  },
  {
    title: "The Life-Saving Reflex: Edge AI & Decentralized Healthcare in LatAm",
    summary:
      "A look at how decentralized healthcare systems can use edge AI to bridge access gaps with portable diagnostics and smart devices.",
    published: "Published on LinkedIn",
    href: "https://www.linkedin.com/pulse/life-saving-reflex-edge-ai-decentralized-healthcare-latam-5ggce/?trackingId=y%2BRddqMXGj2DCeZSlxT5bg%3D%3D",
    image: "/article-images/healthcare-latam.png",
    taxonomy: { primaryIndustry: "healthcare-life-sciences", relevantIndustries: [], technologies: ["edge-ai"], applications: [] },
    kind: "external",
    ctaLabel: "Read on LinkedIn",
  },
  {
    title: "The Responsive Storefront: Edge AI & The Future of Retail in LatAm",
    summary:
      "An exploration of how edge AI can transform retail operations through smarter storefronts, localized intelligence, and more responsive customer experiences.",
    published: "Published on LinkedIn",
    href: "https://www.linkedin.com/pulse/responsive-storefront-edge-ai-future-retail-latam-black-scarab-bzaae/",
    image: "/article-images/retail-latam.png",
    taxonomy: { primaryIndustry: "retail", relevantIndustries: [], technologies: ["edge-ai"], applications: [] },
    kind: "external",
    ctaLabel: "Read on LinkedIn",
  },
];

const internalInsights: Insight[] = [...caseStudies]
  .sort(
    (a, b) =>
      new Date(`${b.publishedDate}T12:00:00`).getTime() -
      new Date(`${a.publishedDate}T12:00:00`).getTime(),
  )
  .map((article) => ({
  taxonomy: article.taxonomy,
  title: article.title,
  summary: article.summary,
  published: article.publishedLabel,
  href: `/insights/${article.slug}`,
  image: article.image,
  kind: "internal",
  ctaLabel: "Read article",
  series: article.series
    ? {
        name: article.series.name,
        label: article.series.label,
      }
    : undefined,
}));

export const insights: Insight[] = [
  ...internalInsights,
  ...externalInsights,
];
