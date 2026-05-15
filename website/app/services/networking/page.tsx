"use client";

import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

// Note: metadata cannot be exported from "use client" components.
// SEO for this page is handled by layout.tsx metadataBase and sitemap.ts.
// To add specific metadata, convert this to a server component wrapper.

const networkingServices = [
  {
    title: "WiFi Installation",
    description:
      "Fast and reliable wireless internet setup for homes and offices.",
    service: "Networking - WiFi",
  },
  {
    title: "Structured Cabling",
    description: "Clean and professional network cabling for businesses.",
    service: "Networking - Cabling",
  },
  {
    title: "Access Points Setup",
    description: "Extend your WiFi coverage across your entire space.",
    service: "Networking - Access Points",
  },
];

export default function NetworkingPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Networking Solutions
          </h1>
          <p className="text-xs text-gray-400 mt-2">
            Professional installation • Fast response • Free consultation
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reliable internet and network infrastructure for homes, offices, and
            businesses across Johannesburg and Pretoria.
          </p>
          <div className="mt-6">
            <GetQuoteButton service="Networking Solutions" />
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
            &nbsp;·&nbsp; ✓ Warranty included
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {networkingServices.map((item, index) => (
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
            We provide networking installations across Johannesburg and
            Pretoria.
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
            Need Reliable Internet Setup?
          </h3>
          <p className="mt-2 text-sm opacity-90">
            Get a professional installation quote today
          </p>
          <div className="mt-6">
            <GetQuoteButton service="Networking Solutions" />
          </div>
        </div>
      </div>
    </section>
  );
}
