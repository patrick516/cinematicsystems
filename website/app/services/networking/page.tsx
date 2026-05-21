import type { Metadata } from "next";
import Link from "next/link";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

export const metadata: Metadata = {
  title:
    "Networking & WiFi Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional WiFi installation, network cabling and access point setup for homes and businesses in Johannesburg and Pretoria. Fast, reliable network infrastructure. Certified installers. Same-day service. Free quote.",
  keywords: [
    "networking installation Johannesburg",
    "WiFi installation Pretoria",
    "network cabling Gauteng",
    "access point installation Johannesburg",
    "business network setup Pretoria",
    "home WiFi installation Gauteng",
    "IT networking Johannesburg",
    "network installer near me Pretoria",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/networking",
  },
  openGraph: {
    title:
      "Networking & WiFi Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "WiFi installation, network cabling and access point setup for homes and businesses in Gauteng. Certified installers. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Networking Installation - Cinematic Systems Johannesburg",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Networking & WiFi Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Network and WiFi Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional WiFi installation, structured cabling and access point setup for homes and businesses in Johannesburg and Pretoria.",
};

const networkingServices = [
  {
    title: "WiFi Installation",
    description:
      "Fast and reliable wireless internet setup for homes and offices. Eliminate dead zones and get full coverage in every room, including the garden and outbuildings.",
    service: "Networking - WiFi",
    href: "/services/networking/wifi",
    features: [
      "Full property coverage",
      "Mesh WiFi systems",
      "Secure setup",
      "All devices connected",
    ],
  },
  {
    title: "Structured Cabling",
    description:
      "Professional Cat5e, Cat6 and fibre network cabling for offices, homes and commercial buildings. Clean installation with neat cable management.",
    service: "Networking - Cabling",
    href: "/services/networking/cabling",
    features: [
      "Cat6 cabling",
      "Fibre installation",
      "Neat cable routing",
      "Patch panel setup",
    ],
  },
  {
    title: "Access Points Setup",
    description:
      "Extend your WiFi coverage across your entire property with professional access point installation. Ideal for large homes, offices and multi-floor buildings.",
    service: "Networking - Access Points",
    href: "/services/networking/access-points",
    features: [
      "Dead zone elimination",
      "Seamless roaming",
      "Ubiquiti & TP-Link",
      "Business grade",
    ],
  },
];

export default function NetworkingPage() {
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
              Networking & WiFi Installation in Johannesburg
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Professional installation • Fast response • Free consultation
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Reliable internet and network infrastructure for homes, offices,
              and businesses across Johannesburg and Pretoria. From WiFi and
              access points to full structured cabling — certified installers,
              same-day service, warranty included.
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
              Why Choose Cinematic Systems for Networking?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Certified network installers across Gauteng",
                "Home and business network solutions covered",
                "Same-day installation available for urgent requirements",
                "Enterprise-grade equipment: Ubiquiti, TP-Link, Netgear",
                "Neat cable management on every installation",
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
              Networking and WiFi installation services across Johannesburg,
              Pretoria and surrounding Gauteng areas including Sandton,
              Randburg, Midrand, Centurion and Roodepoort.
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
              Need Reliable Internet Setup?
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Get a professional installation quote today.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Networking Solutions" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
