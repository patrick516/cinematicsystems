// website/app/services/entertainment/speakers/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Speaker Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional indoor and outdoor speaker installation for homes, offices and commercial spaces in Johannesburg and Pretoria. Ceiling speakers, in-wall speakers, outdoor audio systems. Certified installers. Free quote.",
  keywords: [
    "speaker installation Johannesburg",
    "ceiling speaker installation Pretoria",
    "outdoor speaker installation Gauteng",
    "surround sound speaker installation Johannesburg",
    "commercial speaker installation Pretoria",
    "in-wall speaker installation Gauteng",
    "multi-zone speaker system Johannesburg",
    "restaurant speaker installation Pretoria",
    "speaker installer near me Gauteng",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/entertainment/speakers",
  },
  openGraph: {
    title: "Speaker Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Indoor and outdoor speaker installation for homes and businesses in Gauteng. Ceiling speakers, in-wall audio. High-quality sound systems. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment/speakers",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Speaker Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Speaker Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Speaker and Audio System Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional indoor and outdoor speaker installation for homes and businesses in Johannesburg and Pretoria.",
};

export default function SpeakersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Professional Speaker Installation in Johannesburg"
        description="High-quality indoor and outdoor speaker systems for homes, offices, and commercial entertainment spaces in Johannesburg and Pretoria. From in-ceiling speakers and in-wall audio to outdoor weatherproof systems and multi-zone setups — professional installation with clean cable management."
        serviceName="Entertainment - Speakers"
        benefits={[
          {
            title: "Ceiling & In-Wall Speakers",
            description:
              "Flush-mounted ceiling and in-wall speakers deliver excellent sound while remaining completely invisible — no floor stands or visible speaker boxes required.",
          },
          {
            title: "Outdoor Weatherproof Audio",
            description:
              "Enjoy music in your garden, patio or pool area with weatherproof outdoor speakers designed to handle South African weather conditions year-round.",
          },
          {
            title: "Multi-Zone Audio Control",
            description:
              "Control different music in different areas independently — kitchen, lounge, bedroom, garden — all from your smartphone or a central control panel.",
          },
        ]}
        faqs={[
          {
            question:
              "Can speakers be installed in the ceiling without being visible?",
            answer:
              "Yes. In-ceiling speakers are flush-mounted so only the grille is visible, which can be painted to match your ceiling. They deliver excellent sound quality while being nearly invisible in the room.",
          },
          {
            question: "Are outdoor speakers weatherproof?",
            answer:
              "Yes. We install IP-rated weatherproof speakers designed for outdoor use. These are resistant to rain, humidity and UV exposure — suitable for gardens, patios, pool areas and outdoor entertainment spaces.",
          },
          {
            question: "Can you install speakers in multiple rooms?",
            answer:
              "Yes. We install multi-zone audio systems that allow you to play different music in different rooms simultaneously or sync all speakers to play the same audio throughout the home or business.",
          },
          {
            question: "Do you install speakers for restaurants and businesses?",
            answer:
              "Yes. We install commercial background music systems for restaurants, retail stores, gyms, hotels and offices — with zone control and volume management for each area.",
          },
          {
            question: "What speaker brands do you install?",
            answer:
              "We install leading brands including Sonos, Bose, Klipsch, Monitor Audio, Polk Audio and Yamaha speakers selected based on your budget, room size and sound requirements.",
          },
          {
            question: "What areas do you cover for speaker installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Speaker Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Room assessment and speaker placement planning",
              "In-ceiling, in-wall or outdoor speaker supply",
              "Speaker mounting and secure installation",
              "Speaker cable routing through walls and ceilings",
              "Amplifier or AV receiver connection and setup",
              "Multi-zone controller configuration",
              "Streaming and Bluetooth source setup",
              "Full sound test and volume balancing on handover",
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
