// website/app/services/tv-systems/hdmi-matrix/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "HDMI Matrix Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional HDMI matrix system installation for offices, hotels, conference rooms and entertainment venues in Johannesburg and Pretoria. Multi-screen video distribution, expert AV setup. Free quote.",
  keywords: [
    "HDMI matrix installation Johannesburg",
    "video matrix switch Pretoria",
    "multi screen video distribution Gauteng",
    "HDMI splitter installation Johannesburg",
    "AV matrix system Pretoria",
    "hotel TV system Gauteng",
    "conference room AV setup Johannesburg",
    "4K HDMI matrix Pretoria",
    "AV distribution system Gauteng",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/tv-systems/hdmi-matrix",
  },
  openGraph: {
    title:
      "HDMI Matrix Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Multi-screen HDMI matrix installation for offices, hotels and venues in Gauteng. Professional AV setup. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/hdmi-matrix",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HDMI Matrix Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HDMI Matrix System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "HDMI Matrix and AV Distribution Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional HDMI matrix system installation for offices, hotels and venues in Johannesburg and Pretoria. Multi-screen video distribution.",
};

export default function HdmiMatrixPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="HDMI Matrix Installation & AV Distribution in Johannesburg"
        description="Advanced HDMI matrix solutions for offices, hotels, conference rooms, and entertainment systems in Johannesburg and Pretoria. Route any video source to any screen independently — perfect for multi-room commercial AV setups with professional control systems."
        serviceName="TV Systems - HDMI Matrix"
        benefits={[
          {
            title: "Any Source to Any Screen",
            description:
              "An HDMI matrix lets you send any input source — DSTV, laptop, PC, streaming device — to any TV or display in the building independently and simultaneously.",
          },
          {
            title: "4K & HD Signal Support",
            description:
              "We install 4K-compatible HDMI matrix systems that maintain full resolution and audio quality across all connected screens without signal degradation.",
          },
          {
            title: "Ideal for Commercial Venues",
            description:
              "Perfect for hotels, restaurants, gyms, boardrooms, showrooms and sports bars that need multiple screens showing different content simultaneously.",
          },
        ]}
        faqs={[
          {
            question: "What is an HDMI matrix and how does it work?",
            answer:
              "An HDMI matrix switch allows multiple video sources (like DSTV decoders, laptops, or streaming devices) to be routed to multiple screens independently. For example, a 4x4 matrix lets you send 4 different sources to 4 different screens in any combination.",
          },
          {
            question: "How many screens can an HDMI matrix support?",
            answer:
              "HDMI matrix systems come in various sizes — common configurations are 4x4, 8x8 and 16x16 (inputs x outputs). We assess your requirements and recommend the right size for your setup.",
          },
          {
            question: "Can the HDMI matrix be controlled remotely?",
            answer:
              "Yes. Most matrix systems support remote control via IR remote, RS232, IP control, or integration with home and building automation systems for centralised control of all screens.",
          },
          {
            question:
              "Do you install HDMI matrix systems for hotels and restaurants?",
            answer:
              "Yes. We install commercial AV distribution systems for hotels, restaurants, gyms, sports bars, conference centres and showrooms — any venue requiring multiple screens with different content.",
          },
          {
            question: "Does the HDMI matrix support 4K resolution?",
            answer:
              "Yes. We install 4K UHD HDMI matrix systems that maintain full resolution and HDR support across all outputs without quality loss.",
          },
          {
            question: "What areas do you cover for HDMI matrix installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our HDMI Matrix Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site assessment and AV distribution planning",
              "HDMI matrix switch supply and rack installation",
              "HDMI cable routing to all screens and sources",
              "Input and output configuration and labelling",
              "Remote control or IP control system setup",
              "4K signal testing on all connected screens",
              "Integration with existing AV or automation systems",
              "Full demonstration and user training on handover",
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
