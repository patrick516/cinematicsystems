// website/app/services/tv-systems/page.tsx

// ✅ REMOVED "use client" — now a Server Component so metadata and SEO work properly
import type { Metadata } from "next";
import Link from "next/link";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

export const metadata: Metadata = {
  title:
    "TV & Display Systems Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional TV and display system installation in Johannesburg and Pretoria. DStv, TV wall mounting, projector setup, HDMI matrix systems for homes, offices and commercial spaces. Certified installers. Same-day service. Free quote.",
  keywords: [
    "TV installation Johannesburg",
    "DStv installation Pretoria",
    "TV wall mounting Gauteng",
    "projector installation Johannesburg",
    "HDMI matrix Pretoria",
    "TV systems installer Gauteng",
    "display system installation Johannesburg",
    "TV installer near me Pretoria",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/tv-systems",
  },
  openGraph: {
    title:
      "TV & Display Systems Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "DStv, TV mounting, projector and HDMI matrix installation in Johannesburg and Pretoria. Certified installers. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "TV Systems Installation - Cinematic Systems Johannesburg",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TV & Display Systems Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "TV and Display System Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional DStv, TV wall mounting, projector and HDMI matrix installation for homes and businesses in Johannesburg and Pretoria.",
};

const tvServices = [
  {
    title: "DStv Installation",
    description:
      "Accredited DStv installation, Explora setup, extra view configuration and signal fault repairs for homes and businesses across Johannesburg and Pretoria.",
    service: "TV Systems - DSTV",
    href: "/services/tv-systems/dstv",
    features: [
      "Explora setup",
      "Extra view",
      "Signal repair",
      "Dish alignment",
    ],
  },
  {
    title: "TV Wall Mounting",
    description:
      "Safe and professional TV wall mounting for all sizes. Clean cable management, perfect alignment on any wall type including brick, drywall and plaster.",
    service: "TV Systems - TV Mounting",
    href: "/services/tv-systems/tv-mounting",
    features: [
      "All TV sizes",
      "All wall types",
      "Cable concealment",
      "Tilt & swivel mounts",
    ],
  },
  {
    title: "Projector Installation",
    description:
      "Home cinema, office and school projector installation including ceiling mounting, screen setup, calibration and input source configuration.",
    service: "TV Systems - Projector",
    href: "/services/tv-systems/projector",
    features: [
      "Ceiling mounting",
      "Screen setup",
      "4K projectors",
      "Calibration",
    ],
  },
  {
    title: "HDMI Matrix Systems",
    description:
      "Advanced multi-screen video distribution for offices, hotels, conference rooms and entertainment venues. Route any source to any screen.",
    service: "TV Systems - HDMI Matrix",
    href: "/services/tv-systems/hdmi-matrix",
    features: [
      "Multi-screen routing",
      "4K support",
      "Remote control",
      "Commercial venues",
    ],
  },
];

export default function TVSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* HERO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              TV & Display Systems Installation in Johannesburg
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Professional installation • Fast response • Free consultation
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Professional TV installations, satellite systems, and display
              solutions for homes, offices, and commercial spaces across
              Johannesburg and Pretoria. Certified installers, same-day service,
              warranty included.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="TV Systems" />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
              &nbsp;·&nbsp; ✓ Warranty included
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {tvServices.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition"
              >
                <Link href={item.href}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition cursor-pointer">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                <ul className="mt-3 grid grid-cols-2 gap-1">
                  {item.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-xs text-gray-500 flex items-center gap-1"
                    >
                      <span className="text-blue-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3 items-center flex-wrap">
                  <GetQuoteButton service={item.service} />
                  <Link
                    href={item.href}
                    className="text-sm text-blue-600 font-semibold hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Cinematic Systems for TV Installation?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Accredited DStv installers across Gauteng",
                "TV mounting on all wall types including brick and drywall",
                "Same-day installation available for urgent requirements",
                "Clean cable management on every installation",
                "Commercial and residential installations covered",
                "All work backed by warranty and after-sales support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* MAP */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Installation Coverage Area
            </h2>
            <p className="text-gray-600 mb-4">
              TV and display installation services across Johannesburg, Pretoria
              and surrounding Gauteng areas including Sandton, Randburg,
              Midrand, Centurion and Roodepoort.
            </p>
            <div className="overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps?q=-26.031983,27.932502&z=17&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold">
              Need Professional TV Installation?
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Get a fast and affordable installation quote today.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="TV Systems" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
