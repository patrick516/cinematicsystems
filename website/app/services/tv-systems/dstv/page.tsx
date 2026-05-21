import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DStv Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional DStv installation, repairs and upgrades in Johannesburg and Pretoria. Explora decoder setup, extra view, signal problems fixed. Accredited DStv installers. Same-day service. Free quote.",
  keywords: [
    "DStv installation Johannesburg",
    "DStv installer near me",
    "DStv installation Pretoria",
    "DStv Explora setup Gauteng",
    "DStv signal problems Johannesburg",
    "accredited DStv installer",
    "DStv extra view installation",
    "DStv dish alignment Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/tv-systems/dstv",
  },
  openGraph: {
    title: "DStv Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Accredited DStv installers in Johannesburg and Pretoria. Explora setup, extra view, signal repairs. Same-day service.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/dstv",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "DStv Installation Services - Cinematic Systems Johannesburg",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DStv Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "DStv Installation and Repair",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Accredited DStv installation, repairs and upgrades in Johannesburg and Pretoria.",
};

export default function DSTVPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ServicePageTemplate
        title="DStv Installation Services in Johannesburg"
        description="Accredited DStv installers serving Johannesburg and Pretoria. We handle new installations, signal repairs, Explora decoder setup, extra view configurations and dish alignment — fast and professionally."
        serviceName="TV Systems - DStv"
        benefits={[
          {
            title: "Accredited DStv Installers",
            description:
              "Our technicians are fully accredited and trained to install all DStv decoder and dish types.",
          },
          {
            title: "Same-Day Service Available",
            description:
              "We understand urgency. Same-day and weekend DStv installation available across Gauteng.",
          },
          {
            title: "Signal Problems Solved",
            description:
              "No signal? Rain fade? We diagnose and fix all DStv signal issues quickly and permanently.",
          },
        ]}
        faqs={[
          {
            question: "How much does DStv installation cost in Johannesburg?",
            answer:
              "DStv installation pricing depends on the decoder type and number of points. We offer competitive rates and free quotes. Contact us for exact pricing.",
          },
          {
            question: "Do you install DStv Explora decoders?",
            answer:
              "Yes, we install and configure all DStv decoder models including Explora, HD Decoder, and the DStv Streama. We also set up connected services and apps.",
          },
          {
            question: "Can you fix DStv signal problems?",
            answer:
              "Yes. We diagnose and fix all signal issues including dish misalignment, damaged LNBs, faulty cables, and rain fade problems.",
          },
          {
            question: "Do you set up DStv extra view?",
            answer:
              "Yes, we install and configure DStv extra view so you can watch different channels on multiple TVs at the same time.",
          },
          {
            question: "What areas do you cover for DStv installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Roodepoort, Centurion, Midrand, Soweto and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our DStv Services Include
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "New DStv dish and decoder installation",
              "DStv Explora setup and configuration",
              "Extra view multi-room setup",
              "Dish alignment and signal optimisation",
              "LNB replacement and upgrade",
              "Cable routing and wall concealment",
              "DStv signal fault diagnosis and repair",
              "Smart TV DStv app setup and configuration",
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
