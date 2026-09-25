import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawlable on purpose so search engines can read the noindex; no sitemap for a demo.
    rules: { userAgent: "*", allow: "/" },
  };
}
