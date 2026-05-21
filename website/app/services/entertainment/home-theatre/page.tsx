// website/app/services/entertainment/home-theatre/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Home Theatre Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional home theatre system installation in Johannesburg and Pretoria. Cinema-quality surround sound, projectors, screens and AV equipment for your home. Certified installers. Same-day service. Free quote.",
  keywords: [
    "home theatre installation Johannesburg",
    "home cinema installation Pretoria",
    "surround sound installation Gauteng",
    "home theatre setup Johannesburg",
    "AV installation Pretoria",
    "cinema room installation Gauteng",
    "home theatre system Johannesburg",
    "5.1 surround sound installation Pretoria",
    "Dolby Atmos setup Gauteng",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/entertainment/home-theatre",
  },
  openGraph: {
    title:
      "Home Theatre Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Cinema-quality home theatre installation in Gauteng. Surround sound, projectors, screens. Professional setup. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment/home-theatre",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Home Theatre Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Theatre Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Home Theatre System Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional home theatre installation with surround sound, projectors and screens in Johannesburg and Pretoria.",
};

export default function HomeTheatrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Home Theatre Installation in Johannesburg"
        description="Professional home theatre system installation for immersive movie and sound experiences in Johannesburg and Pretoria. We design and install cinema-quality audio-visual setups including 5.1 and 7.1 surround sound, projectors, motorised screens and AV receivers — all calibrated perfectly for your room."
        serviceName="Entertainment - Home Theatre"
        benefits={[
          {
            title: "True Cinema Surround Sound",
            description:
              "We install 5.1, 7.1 and Dolby Atmos surround sound systems that place you in the centre of the action — every sound from the right direction.",
          },
          {
            title: "Custom Room Design",
            description:
              "We design your theatre room layout for optimal speaker placement, screen position and seating distance to get the best performance from your equipment.",
          },
          {
            title: "Complete Turnkey Installation",
            description:
              "We handle everything — projector, screen, AV receiver, speakers, cables, calibration — so you just sit down and enjoy from day one.",
          },
        ]}
        faqs={[
          {
            question:
              "What is the difference between 5.1 and 7.1 surround sound?",
            answer:
              "A 5.1 system has five speakers (front left, centre, front right, rear left, rear right) and one subwoofer. A 7.1 system adds two additional side speakers for a more immersive surround experience. We recommend 7.1 for rooms larger than 25 square metres.",
          },
          {
            question: "Do I need a dedicated room for a home theatre?",
            answer:
              "No. We can install a home theatre system in any room — lounge, bedroom or dedicated cinema room. We design the system based on your room size, layout and budget.",
          },
          {
            question: "What projector and screen size do you recommend?",
            answer:
              "Screen size depends on your room dimensions and seating distance. We assess your space and recommend the ideal projector brightness, throw distance and screen size for the best image quality.",
          },
          {
            question: "Do you install Dolby Atmos home theatre systems?",
            answer:
              "Yes. We install Dolby Atmos and DTS:X object-based surround sound systems with ceiling speakers or upward-firing speakers for a three-dimensional sound experience.",
          },
          {
            question:
              "Can the home theatre integrate with my TV and streaming devices?",
            answer:
              "Yes. We connect and configure all your sources — DSTV, streaming sticks, gaming consoles, Blu-ray players — through the AV receiver so everything works seamlessly from one remote or control system.",
          },
          {
            question: "What areas do you cover for home theatre installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Home Theatre Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Room assessment and theatre design consultation",
              "AV receiver supply and configuration",
              "Surround sound speaker supply and installation",
              "Subwoofer placement and setup",
              "Projector ceiling mounting or TV installation",
              "Motorised or fixed projection screen installation",
              "All cable routing and concealment",
              "Full system calibration and audio tuning",
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
