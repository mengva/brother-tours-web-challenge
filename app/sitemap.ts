import { destinations } from "@/data/destinations";
import { tours } from "@/data/tour";
import { SITE_URL } from "@/utils/variable";
import type { MetadataRoute } from "next";
// import { db } from "@/db"; // Uncomment when ready for Drizzle

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Normalize base URL to avoid double slashes
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const currentDate = new Date();

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/travel-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // 2. Dynamic Tour Pages (Currently mapped from mock data)
  // --- Future Drizzle ORM Swap:
  // const toursFromDb = await db.query.tours.findMany();
  const tourPages: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.id}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // 3. Dynamic Destination Sub-Pages (Optional: if you have /destinations/[slug])
  const destinationPages: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: `${baseUrl}/destinations/${destination.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...destinationPages, ...tourPages];
}