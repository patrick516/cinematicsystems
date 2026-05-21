// website/app/services/networking/access-points/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "WiFi Access Point Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional WiFi access point installation to extend coverage across your home, office or commercial building in Johannesburg and Pretoria. Eliminate dead zones. Ubiquiti, TP-Link experts. Free quote.",
  keywords: [
    "WiFi access point installation Johannesburg",
    "access point setup Pretoria",
    "WiFi extender installation Gauteng",
    "wireless access point Johannesburg",
    "office WiFi access point Pretoria",
    "WiFi dead zone solution Gauteng",
    "Ubiquiti access point installer Johannesburg",
    "UniFi access point setup Pretoria",
    "mesh WiFi installation Gauteng",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/networking/access-points",
  },
  openGraph: {
    title:
      "WiFi Access Point Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Extend WiFi coverage across your property with professional access point installation in Gauteng. Ubiquiti, TP-Link experts. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking/access-points",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "WiFi Access Points - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WiFi Access Point Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "WiFi Access Point Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional WiFi access point installation for homes and businesses in Johannesburg and Pretoria. Eliminate dead zones with enterprise-grade wireless coverage.",
};

export default function AccessPointsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="WiFi Access Point Installation in Johannesburg"
        description="Professional WiFi access point installation to extend seamless coverage across your home, office or commercial building in Johannesburg and Pretoria. Eliminate dead zones permanently with enterprise-grade access points from Ubiquiti, TP-Link and Netgear."
        serviceName="Networking - Access Points"
        benefits={[
          {
            title: "Eliminate WiFi Dead Zones",
            description:
              "Strategically placed access points ensure strong WiFi signal in every room, corner, garden and outbuilding — no more dropped connections.",
          },
          {
            title: "Seamless Roaming Between Points",
            description:
              "Our access point systems hand off your device automatically as you move around the property — no disconnecting or reconnecting required.",
          },
          {
            title: "Enterprise-Grade Equipment",
            description:
              "We install Ubiquiti UniFi, TP-Link Omada and Netgear access points — the same equipment used in hotels, hospitals and offices for maximum reliability.",
          },
        ]}
        faqs={[
          {
            question:
              "What is the difference between a WiFi extender and an access point?",
            answer:
              "A WiFi extender repeats the existing signal which can reduce speeds by up to 50%. An access point connects via ethernet cable and provides a full-strength independent signal — much faster and more reliable. We always recommend access points over extenders.",
          },
          {
            question: "How many access points do I need for my home or office?",
            answer:
              "The number depends on your property size and layout. As a general guide, one access point covers roughly 100-150 square metres. We assess your property and recommend the exact number and placement for complete coverage.",
          },
          {
            question: "What brands of access points do you install?",
            answer:
              "We install Ubiquiti UniFi, TP-Link Omada, Netgear Orbi and Asus access point systems — selected based on your budget, property size and performance requirements.",
          },
          {
            question: "Can I have separate networks for staff and guests?",
            answer:
              "Yes. We configure separate SSIDs for staff, guests and IoT devices so each network is isolated for security. Guest networks can have bandwidth limits applied.",
          },
          {
            question: "Do the access points need ethernet cables?",
            answer:
              "Yes, each access point is connected via a Cat6 ethernet cable for full speed and reliability. We handle all the cabling during installation, routing cables neatly through walls and ceilings.",
          },
          {
            question: "What areas do you cover for access point installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Access Point Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site survey and coverage planning",
              "Access point supply and ceiling/wall mounting",
              "Cat6 ethernet cable run to each access point",
              "PoE switch or injector installation",
              "Network controller and management setup",
              "SSID, password and VLAN configuration",
              "Guest network and bandwidth control setup",
              "Speed test and coverage verification on handover",
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
