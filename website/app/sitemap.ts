import { MetadataRoute } from "next";

const BASE_URL = "https://www.cinematicsystems.co.za";

// Update a page's date here whenever you change its content.
// Rule: edit a page → bump its date. That's it.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─── HOMEPAGE ────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ─── CONTACT ─────────────────────────────────────────────────
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── SERVICES HUB ────────────────────────────────────────────
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ─── SECURITY ────────────────────────────────────────────────
    {
      url: `${BASE_URL}/services/security`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/security/cctv`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/security/access-control`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/security/biometrics`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/security/intercom`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ─── TV SYSTEMS ───────────────────────────────────────────────
    {
      url: `${BASE_URL}/services/tv-systems`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/tv-systems/dstv`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/tv-systems/tv-mounting`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/tv-systems/projector`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/tv-systems/hdmi-matrix`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // ─── NETWORKING ───────────────────────────────────────────────
    {
      url: `${BASE_URL}/services/networking`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/networking/wifi`,
      lastModified: new Date("2026-05-21"), // updated today
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/networking/cabling`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/networking/access-points`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ─── ENTERTAINMENT ────────────────────────────────────────────
    {
      url: `${BASE_URL}/services/entertainment`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/entertainment/home-theatre`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/entertainment/hifi`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/entertainment/speakers`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
