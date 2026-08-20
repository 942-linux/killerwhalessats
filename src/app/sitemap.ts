import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://killerwhales.sats",
      lastModified: new Date("2026-08-11"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
