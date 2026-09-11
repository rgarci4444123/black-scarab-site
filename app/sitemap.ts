import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { newsUpdates } from "@/lib/news";

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
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(newsUpdates[0].modifiedAt ?? newsUpdates[0].publishedAt),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...newsUpdates.map((update) => ({
      url: `${baseUrl}/news/${update.slug}`,
      lastModified: new Date(update.modifiedAt ?? update.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...caseStudies.map((article) => ({
      url: `${baseUrl}/insights/${article.slug}`,
      lastModified: new Date(article.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/intake`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
