import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

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

export default function WiFiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ServicePageTemplate
        title="WiFi Installation & Networking in Johannesburg"
        description="Eliminate WiFi dead zones and slow connections. We design and install professional wireless networks for homes and businesses across Johannesburg and Pretoria — fast, reliable coverage in every room."
        serviceName="Networking - WiFi"
        benefits={[
          {
            title: "Full Property Coverage",
            description:
              "We design your network to eliminate dead zones — every room, garden, and outbuilding covered.",
          },
          {
            title: "Home & Business Solutions",
            description:
              "From single-home setups to multi-floor office networks, we scale the solution to your needs.",
          },
          {
            title: "Fast & Secure Networks",
            description:
              "Professional configuration for maximum speed, security, and reliability on all your devices.",
          },
        ]}
        faqs={[
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
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our WiFi Installation
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
      </ServicePageTemplate>
    </>
  );
}
