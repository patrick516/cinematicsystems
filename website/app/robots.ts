import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/maintenance/",
        "/favicon.ico",
        "/icons/",
      ],
    },
    sitemap: "https://www.cinematicsystems.co.za/sitemap.xml",
  };
}
