import { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { resources } from "@/data/resources";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/process",
    "/team",
    "/gallery",
    "/faq",
    "/events",
    "/resources",
    "/success-stories",
    "/destinations",
    "/destinations/compare",
    "/tools/cost-calculator",
    "/tools/course-finder",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${siteConfig.url}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${siteConfig.url}/resources/${r.slug}`,
    lastModified: new Date(r.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...resourceRoutes];
}
