"use client";

import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

// Note: metadata cannot be exported from "use client" components.
// SEO handled by layout.tsx metadataBase and sitemap.ts.

const tvServices = [
  {
    title: "DSTV Installation",
    description:
      "Professional DSTV setup and satellite alignment for clear signal.",
    service: "TV Systems - DSTV",
  },
  {
    title: "Projector Installation",
    description:
      "Home and business projector setup for presentations and cinema use.",
    service: "TV Systems - Projector",
  },
  {
    title: "HDMI Matrix Systems",
    description:
      "Advanced multi-screen video distribution for offices and venues.",
    service: "TV Systems - HDMI Matrix",
  },
  {
    title: "TV Wall Mounting",
    description: "Safe and clean TV mounting with cable management.",
    service: "TV Systems - TV Mounting",
  },
];

export default function TVSystemsPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            TV & Display Systems
          </h1>
          <p className="text-xs text-gray-400 mt-2">
            Professional installation • Fast response • Free consultation
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional TV installations, satellite systems, and display
            solutions for homes, offices, and commercial spaces across
            Johannesburg and Pretoria.
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
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4">
                <GetQuoteButton service={item.service} />
              </div>
            </div>
          ))}
        </div>

        {/* MAP */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Installation Coverage Area
          </h2>
          <p className="text-gray-600 mb-4">
            We provide TV and display installation services across Johannesburg
            and Pretoria.
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

        {/* FINAL CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold">
            Need Professional TV Installation?
          </h3>
          <p className="mt-2 text-sm opacity-90">
            Get a fast and affordable installation quote today
          </p>
          <div className="mt-6">
            <GetQuoteButton service="TV Systems" />
          </div>
        </div>
      </div>
    </section>
  );
}
