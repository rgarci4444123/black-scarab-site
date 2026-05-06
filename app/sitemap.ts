import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.blackscarab.ai";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
    },
    ...caseStudies.map((article) => ({
      url: `${baseUrl}/insights/${article.slug}`,
      lastModified: new Date(article.publishedDate),
    })),
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/models`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/intake`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lead-capture`,
      lastModified: new Date(),
    },
    ...products.map((product) => ({
      url: `${baseUrl}/catalog/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
