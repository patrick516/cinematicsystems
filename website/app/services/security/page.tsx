"use client";

import { Metadata } from "next";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

// Note: metadata export doesn't work in "use client" components.
// Move this page to a server component wrapper if you want metadata.
// For now SEO is handled by layout.tsx and sitemap.ts.

const securityServices = [
  {
    title: "CCTV Installation",
    description: "24/7 surveillance systems for homes and businesses.",
    service: "CCTV",
    href: "/services/security/cctv",
  },
  {
    title: "Biometric Systems",
    description: "Secure fingerprint and facial recognition access.",
    service: "Biometrics",
    href: "/services/security/biometrics",
  },
  {
    title: "Access Control",
    description: "Control who enters your building with smart systems.",
    service: "Access Control",
    href: "/services/security/access-control",
  },
  {
    title: "Intercom Systems",
    description: "Communicate securely between rooms or entrances.",
    service: "Intercom",
    href: "/services/security/intercom",
  },
];

export default function SecurityPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Security Systems Solutions
          </h1>
          <p className="text-xs text-gray-400 mt-2">
            Professional installation • Fast response • Free consultation
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Protect your home and business with advanced security systems in
            Johannesburg and Pretoria. Fast installation, reliable technology,
            and expert support.
          </p>
          <div className="mt-6">
            <GetQuoteButton service="Security Systems" />
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
            &nbsp;·&nbsp; ✓ Warranty included
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {securityServices.map((item, index) => (
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
            We Serve Your Area
          </h2>
          <p className="text-gray-600 mb-4">
            Security installation services across Johannesburg and Pretoria.
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
            Need Security Installation?
          </h3>
          <p className="mt-2 text-sm opacity-90">Get a free quote in minutes</p>
          <div className="mt-6">
            <GetQuoteButton service="Security Systems" />
          </div>
        </div>
      </div>
    </section>
  );
}
