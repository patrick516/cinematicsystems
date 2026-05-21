import type { Metadata } from "next";
import Link from "next/link";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

export const metadata: Metadata = {
  title: "WiFi Installation & Networking Johannesburg | Cinematic Systems",
  description:
    "Professional WiFi installation and network setup for homes and businesses in Johannesburg and Pretoria. Eliminate dead zones, fast reliable coverage throughout your property. Certified network installers. Free quote.",
  keywords: [
    "WiFi installation Johannesburg",
    "home network setup Pretoria",
    "WiFi dead zone solution Gauteng",
    "business WiFi installation Johannesburg",
    "wireless network installer near me",
    "WiFi extender installation Johannesburg",
    "mesh WiFi setup Gauteng",
    "network cabling Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/networking/wifi",
  },
  openGraph: {
    title: "WiFi Installation & Networking Johannesburg | Cinematic Systems",
    description:
      "Professional WiFi and network installation in Johannesburg and Pretoria. Eliminate dead zones, full property coverage. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking/wifi",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "WiFi Installation Services - Cinematic Systems Johannesburg",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WiFi Installation and Networking",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "WiFi and Network Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional WiFi installation and network setup for homes and businesses in Johannesburg and Pretoria.",
};

const wifiServices = [
  {
    title: "Home WiFi Installation",
    description:
      "Full-property wireless coverage for homes of any size. We eliminate dead zones in every room, garden, and outbuilding with the right combination of routers, access points, and mesh systems.",
    service: "Networking - WiFi Home",
    features: [
      "Dead zone elimination",
      "Garden & outbuilding coverage",
      "Mesh WiFi systems",
      "All devices connected",
    ],
  },
  {
    title: "Business WiFi Installation",
    description:
      "Enterprise-grade wireless networks for offices, retail spaces, and multi-floor buildings. Separate staff and guest networks, secure configuration, and seamless roaming throughout your premises.",
    service: "Networking - WiFi Business",
    features: [
      "Staff & guest networks",
      "Multi-floor coverage",
      "Secure configuration",
      "Seamless roaming",
    ],
  },
  {
    title: "Mesh WiFi Systems",
    description:
      "Upgrade to a modern mesh network for consistent, fast coverage across your entire property. We supply and install leading mesh systems that self-optimise for the best possible signal.",
    service: "Networking - Mesh WiFi",
    features: [
      "Ubiquiti UniFi",
      "TP-Link Omada",
      "Netgear Orbi",
      "Self-optimising nodes",
    ],
  },
  {
    title: "WiFi & Network Cabling",
    description:
      "Pair your wireless network with structured Cat6 ethernet cabling for the fastest, most stable connections. Neat cable management and wall concealment on every installation.",
    service: "Networking - Cabling",
    features: [
      "Cat6 ethernet cabling",
      "Wall concealment",
      "Patch panel setup",
      "Speed tested",
    ],
  },
];

const faqs = [
  {
    question: "How do I get better WiFi coverage in my home?",
    answer:
      "We assess your property and install the right combination of access points, mesh systems, or WiFi extenders to give you strong signal in every room, including the garden and outbuildings.",
  },
  {
    question: "What WiFi systems do you install?",
    answer:
      "We install leading brands including Ubiquiti UniFi, TP-Link Omada, Asus, Netgear Orbi and other enterprise-grade mesh and access point systems suited to your budget and property size.",
  },
  {
    question: "Can you set up WiFi for my business or office?",
    answer:
      "Yes, we design and install business-grade WiFi networks with separate staff and guest networks, secure configuration, and coverage across multiple floors or buildings.",
  },
  {
    question: "How long does WiFi installation take?",
    answer:
      "A standard home WiFi installation takes 2–4 hours. Larger business installations depend on the size of the property and number of access points required.",
  },
  {
    question: "Do you also do network cabling?",
    answer:
      "Yes, we run structured Cat6 ethernet cabling for the fastest and most stable connections, with neat cable management and wall concealment.",
  },
];

export default function WiFiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-16  bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-400 mb-6">
            <Link
              href="/services/networking"
              className="hover:text-blue-600 transition"
            >
              Networking
            </Link>{" "}
            &rsaquo; WiFi Installation
          </p>

          {/* HERO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              WiFi Installation & Networking in Johannesburg
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Professional installation • Fast response • Free consultation
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Eliminate WiFi dead zones and slow connections. We design and
              install professional wireless networks for homes and businesses
              across Johannesburg and Pretoria — fast, reliable coverage in
              every room, including the garden and outbuildings.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Networking - WiFi" />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
              &nbsp;·&nbsp; ✓ Warranty included
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {wifiServices.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h2>
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
                <div className="mt-4">
                  <GetQuoteButton service={item.service} />
                </div>
              </div>
            ))}
          </div>

          {/* WHAT'S INCLUDED */}
          <div className="bg-white border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What&apos;s Included in Our WiFi Installation
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Site survey and coverage planning",
                "Access point and router installation",
                "Mesh WiFi system setup",
                "Cat6 ethernet cabling if required",
                "Secure network configuration",
                "Separate guest network setup",
                "Speed testing and optimisation",
                "All devices connected and tested",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Cinematic Systems for WiFi Installation?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Certified network installers across Gauteng",
                "Home and business WiFi solutions covered",
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

          {/* FAQs */}
          <div className="bg-white border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Installation Coverage Area
            </h2>
            <p className="text-gray-600 mb-4">
              WiFi and networking installation services across Johannesburg,
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
              Ready for Fast, Reliable WiFi?
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Get a professional WiFi installation quote today.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Networking - WiFi" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
