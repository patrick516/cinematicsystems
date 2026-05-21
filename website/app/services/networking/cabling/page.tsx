// website/app/services/networking/cabling/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Network Cabling Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional structured network cabling for offices, homes and commercial buildings in Johannesburg and Pretoria. Cat5e, Cat6, and fibre cabling. Clean installation and reliable connectivity. Certified installers. Free quote.",
  keywords: [
    "network cabling Johannesburg",
    "structured cabling Pretoria",
    "Cat6 cabling installation Gauteng",
    "office network cabling Johannesburg",
    "data cabling installation Pretoria",
    "ethernet cabling Johannesburg",
    "fibre cabling Gauteng",
    "Cat6 installer near me Johannesburg",
    "server room cabling Pretoria",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/networking/cabling",
  },
  openGraph: {
    title:
      "Network Cabling Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional structured cabling for offices and homes in Gauteng. Cat5e, Cat6, fibre. Clean installation. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking/cabling",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Network Cabling - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Structured Network Cabling Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Network Cabling Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional Cat5e, Cat6 and fibre network cabling for offices and homes in Johannesburg and Pretoria.",
};

export default function CablingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Network Cabling Installation in Johannesburg"
        description="Professional structured network cabling for offices, homes and commercial buildings in Johannesburg and Pretoria. We install reliable, high-speed Cat5e, Cat6 and fibre infrastructure with neat cable management for maximum performance and stability."
        serviceName="Networking - Cabling"
        benefits={[
          {
            title: "Faster & More Stable Than WiFi",
            description:
              "Wired Cat6 ethernet delivers faster speeds and more reliable connectivity than wireless — ideal for workstations, servers, IP cameras and smart TVs.",
          },
          {
            title: "Clean Professional Installation",
            description:
              "All cables are neatly routed through walls, ceilings and cable trays with proper labelling — no messy cable runs or exposed wires.",
          },
          {
            title: "Future-Proof Infrastructure",
            description:
              "Cat6 cabling supports speeds up to 10Gbps and is fully compatible with current and future networking equipment and standards.",
          },
        ]}
        faqs={[
          {
            question: "What is the difference between Cat5e and Cat6 cabling?",
            answer:
              "Cat5e supports speeds up to 1Gbps and is suitable for most home and small office networks. Cat6 supports up to 10Gbps and is recommended for business environments, IP camera systems and future-proofing. We recommend Cat6 for all new installations.",
          },
          {
            question: "How much does network cabling cost in Johannesburg?",
            answer:
              "Cabling costs depend on the number of points, cable runs, and building type. We provide free site assessments and competitive quotes tailored to your requirements.",
          },
          {
            question: "Do you install network cabling for offices?",
            answer:
              "Yes. We design and install complete structured cabling solutions for offices of all sizes including patch panels, server room cabling, workstation points and cable management throughout the building.",
          },
          {
            question: "Can you run cables inside walls and ceilings?",
            answer:
              "Yes. We route cables through walls and ceilings for a completely clean and professional finish with no exposed cables. We also install cable trays and conduit where required.",
          },
          {
            question: "Do you install fibre optic cabling?",
            answer:
              "Yes. We install fibre optic cabling for long-distance runs, high-bandwidth requirements and inter-building connections where copper cabling is not suitable.",
          },
          {
            question: "What areas do you cover for network cabling?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Network Cabling Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site survey and cabling layout planning",
              "Cat5e, Cat6 or fibre cable supply and installation",
              "In-wall and ceiling cable routing",
              "Patch panel and server room setup",
              "Network switch installation and configuration",
              "RJ45 wall socket installation and labelling",
              "Cable testing and certification",
              "Full connectivity test on all network points",
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
