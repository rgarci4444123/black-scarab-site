import type { MetadataRoute } from "next";

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
    {
      url: `${baseUrl}/intake`,
      lastModified: new Date(),
    },
  ];
}
