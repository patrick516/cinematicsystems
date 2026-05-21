// website/app/services/entertainment/hifi/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "HiFi Audio System Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Premium HiFi audio system installation for homes and entertainment spaces in Johannesburg and Pretoria. Crystal-clear sound, audiophile-grade equipment, expert setup and calibration. Free quote.",
  keywords: [
    "HiFi installation Johannesburg",
    "HiFi audio system Pretoria",
    "audiophile speaker installation Gauteng",
    "high end audio installation Johannesburg",
    "HiFi setup Pretoria",
    "stereo system installation Gauteng",
    "premium audio installation Johannesburg",
    "multi-room audio Pretoria",
    "HiFi installer near me Gauteng",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/entertainment/hifi",
  },
  openGraph: {
    title:
      "HiFi Audio System Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Premium HiFi audio installation for homes in Gauteng. Audiophile-grade equipment, crystal-clear sound. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment/hifi",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HiFi Audio Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HiFi Audio System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "HiFi Audio System Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Premium HiFi audio system installation for audiophiles and high-end home entertainment in Johannesburg and Pretoria.",
};

export default function HifiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="HiFi Audio System Installation in Johannesburg"
        description="Premium HiFi audio installation for audiophiles and high-end home entertainment setups in Johannesburg and Pretoria. We design and install crystal-clear stereo and multi-room sound systems using audiophile-grade components — expertly calibrated for the ultimate listening experience."
        serviceName="Entertainment - HiFi"
        benefits={[
          {
            title: "Audiophile-Grade Sound Quality",
            description:
              "We install premium integrated amplifiers, DACs, turntables and loudspeakers from leading brands for sound quality that reveals every detail in your music.",
          },
          {
            title: "Multi-Room Audio Systems",
            description:
              "Enjoy your music in every room simultaneously or independently with a whole-home audio system controlled from your smartphone or tablet.",
          },
          {
            title: "Expert Setup & Calibration",
            description:
              "Proper speaker placement, room treatment advice and amplifier matching make a dramatic difference — we set up your system for optimal performance in your specific room.",
          },
        ]}
        faqs={[
          {
            question: "What HiFi brands do you install?",
            answer:
              "We install and set up systems from leading brands including Sonos, Yamaha, Denon, Marantz, Cambridge Audio, KEF, Monitor Audio, Bowers & Wilkins and others based on your budget and sound preferences.",
          },
          {
            question: "Can you set up a multi-room audio system?",
            answer:
              "Yes. We install multi-room audio systems using Sonos, Yamaha MusicCast or similar platforms that let you play different music in different rooms or sync the whole home — all controlled from your phone.",
          },
          {
            question:
              "What is the difference between HiFi stereo and surround sound?",
            answer:
              "HiFi stereo uses two speakers (left and right) focused on delivering the highest possible audio quality for music. Surround sound uses five or more speakers for an immersive movie experience. We install both depending on your primary use.",
          },
          {
            question: "Do you supply the HiFi equipment or do I buy it myself?",
            answer:
              "Both options are available. We can supply and install a complete system, or install and configure equipment you have already purchased. We advise on the best components for your budget.",
          },
          {
            question: "Can a HiFi system be connected to streaming services?",
            answer:
              "Yes. We connect your HiFi system to Spotify, Apple Music, Tidal, and other streaming services via network streaming, Bluetooth or dedicated streaming devices for modern convenience with audiophile quality.",
          },
          {
            question: "What areas do you cover for HiFi installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our HiFi Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Listening room assessment and system design",
              "Amplifier or integrated amp supply and setup",
              "Loudspeaker supply, placement and installation",
              "Speaker cable routing and termination",
              "Streaming device and DAC configuration",
              "Turntable setup and cartridge alignment if required",
              "Multi-room audio controller configuration",
              "Full system calibration and listening test",
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
