// website/app/services/tv-systems/tv-mounting/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "TV Wall Mounting Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional TV wall mounting for homes, offices and commercial spaces in Johannesburg and Pretoria. Secure installation, perfect alignment, clean cable management. All TV sizes and wall types. Free quote.",
  keywords: [
    "TV wall mounting Johannesburg",
    "TV mounting service Pretoria",
    "TV installation Gauteng",
    "flat screen mounting Johannesburg",
    "TV bracket installation Pretoria",
    "cable management TV mounting Gauteng",
    "TV mounting near me Johannesburg",
    "large TV mounting Pretoria",
    "TV mounting drywall Johannesburg",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/tv-systems/tv-mounting",
  },
  openGraph: {
    title: "TV Wall Mounting Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional TV wall mounting with clean cable management in Gauteng. All TV sizes and wall types. Same-day service. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/tv-mounting",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "TV Wall Mounting - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TV Wall Mounting",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "TV Wall Mounting and Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional TV wall mounting for homes, offices and commercial spaces in Johannesburg and Pretoria. All TV sizes and wall types.",
};

export default function TvMountingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="TV Wall Mounting & Installation in Johannesburg"
        description="Professional TV wall mounting for homes, offices, and commercial spaces in Johannesburg and Pretoria. Secure installation with perfect alignment and clean cable management on any wall type — brick, plaster, drywall or concrete."
        serviceName="TV Systems - TV Mounting"
        benefits={[
          {
            title: "All Wall Types Covered",
            description:
              "We mount TVs on brick, plaster, drywall, concrete and tiled walls — using the correct fixings for each surface to ensure a safe and permanent installation.",
          },
          {
            title: "Clean Cable Management",
            description:
              "All cables are neatly concealed in the wall or managed with professional cable trunking — no dangling wires, clean professional finish every time.",
          },
          {
            title: "All TV Sizes & Brands",
            description:
              "From 32-inch bedroom TVs to 100-inch commercial screens — we mount all brands and sizes with the correct bracket for safe and stable installation.",
          },
        ]}
        faqs={[
          {
            question: "How much does TV wall mounting cost in Johannesburg?",
            answer:
              "TV mounting prices depend on the TV size, wall type, and whether cable concealment is required. We offer competitive rates and free quotes — contact us for exact pricing.",
          },
          {
            question: "Can you mount a TV on a drywall or plaster wall?",
            answer:
              "Yes. We mount TVs on all wall types including brick, drywall, plaster, concrete and tiled surfaces. We use the correct anchors and fixings for each wall type to ensure a safe and secure installation.",
          },
          {
            question: "Do you hide the cables inside the wall?",
            answer:
              "Yes. We offer in-wall cable concealment for a completely clean look with no visible wires. We also offer surface cable trunking as a more affordable alternative.",
          },
          {
            question: "What type of wall bracket do you use?",
            answer:
              "We supply and install fixed, tilt, and full-motion swivel brackets depending on your preference and room layout. We advise on the best option for your viewing angle and TV size.",
          },
          {
            question: "Do you supply the TV bracket or should I buy one?",
            answer:
              "We supply professional-grade brackets suitable for your TV size and wall type. You are also welcome to supply your own bracket and we will install it for you.",
          },
          {
            question: "What areas do you cover for TV mounting?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our TV Mounting Service
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Wall assessment and stud/pipe detection",
              "Bracket supply and installation",
              "TV mounting and secure fixing",
              "Level alignment and viewing angle adjustment",
              "HDMI, power and AV cable connection",
              "In-wall or surface cable management",
              "TV height and tilt optimisation",
              "Full test and cleanup before handover",
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
