import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { industries } from "@/lib/industries";
import { products } from "@/lib/products";

const baseUrl = "https://www.blackscarab.ai";
const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...caseStudies.map((article) => ({
      url: `${baseUrl}/insights/${article.slug}`,
      lastModified: new Date(article.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/catalog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/intake`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...industries.map((industry) => ({
      url: `${baseUrl}/industries/${industry.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/catalog/${product.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
