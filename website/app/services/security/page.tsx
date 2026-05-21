// website/app/services/security/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

export const metadata: Metadata = {
  title:
    "Security Systems Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional security system installation in Johannesburg and Pretoria. CCTV, access control, biometrics, and intercom systems for homes and businesses. Certified installers. Same-day service. Free quote.",
  keywords: [
    "security systems Johannesburg",
    "CCTV installation Johannesburg",
    "access control Pretoria",
    "biometric systems Gauteng",
    "intercom installation Johannesburg",
    "home security installation Pretoria",
    "business security systems Gauteng",
    "security installer near me Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/security",
  },
  openGraph: {
    title:
      "Security Systems Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "CCTV, access control, biometrics and intercom installation in Johannesburg and Pretoria. Certified installers. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/security",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Security Systems - Cinematic Systems Johannesburg",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Security Systems Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Security System Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional CCTV, access control, biometrics and intercom installation for homes and businesses in Johannesburg and Pretoria.",
};

const securityServices = [
  {
    title: "CCTV Installation",
    description:
      "HD and 4K surveillance cameras for homes and businesses. Remote viewing, night vision, and motion detection — 24/7 protection across Johannesburg and Pretoria.",
    service: "CCTV",
    href: "/services/security/cctv",
    features: [
      "HD/4K cameras",
      "Night vision",
      "Remote viewing",
      "Motion alerts",
    ],
  },
  {
    title: "Access Control Systems",
    description:
      "Card, PIN and smart access systems for offices, apartments and commercial buildings. Full audit trails and remote management from your phone.",
    service: "Access Control",
    href: "/services/security/access-control",
    features: [
      "Card & PIN access",
      "Remote unlock",
      "Audit trail",
      "Multi-door support",
    ],
  },
  {
    title: "Biometric Systems",
    description:
      "Fingerprint and facial recognition for high-security environments. No keys, no cards — only authorised individuals gain entry, every time.",
    service: "Biometrics",
    href: "/services/security/biometrics",
    features: [
      "Fingerprint readers",
      "Face recognition",
      "Staff enrolment",
      "Access logs",
    ],
  },
  {
    title: "Intercom Systems",
    description:
      "Audio and video intercoms for homes, apartments, offices and gated communities. Answer your gate from your smartphone from anywhere.",
    service: "Intercom",
    href: "/services/security/intercom",
    features: [
      "Video intercom",
      "Gate release",
      "Phone answering",
      "Visitor recording",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* HERO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Security Systems Installation in Johannesburg
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Professional installation • Fast response • Free consultation
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Protect your home and business with advanced security systems
              across Johannesburg and Pretoria. From CCTV and access control to
              biometrics and intercoms — certified installers, same-day service,
              warranty included.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Security Systems" />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
              &nbsp;·&nbsp; ✓ Warranty included
            </p>
          </div>

          {/* SERVICES GRID — with links, descriptions and feature lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {securityServices.map((item, index) => (
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
              Why Choose Cinematic Systems for Security?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Certified and experienced security installers",
                "Coverage across all Johannesburg and Pretoria areas",
                "Same-day installation available for urgent requirements",
                "All systems backed by warranty and after-sales support",
                "Industry-leading brands: Hikvision, Dahua, ZKTeco",
                "Free site assessment and security consultation",
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
              We Serve Your Area
            </h2>
            <p className="text-gray-600 mb-4">
              Security installation services across Johannesburg, Pretoria and
              surrounding Gauteng areas including Sandton, Randburg, Midrand,
              Centurion and Roodepoort.
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
              Need Security Installation?
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Get a free quote — we respond quickly with pricing and
              installation options.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Security Systems" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
