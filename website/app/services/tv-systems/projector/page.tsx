// website/app/services/tv-systems/projector/page.tsx

import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Projector Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional projector installation for home cinemas, offices, schools and conference rooms in Johannesburg and Pretoria. Ceiling mounting, screen setup, calibration and optimal alignment. Certified installers. Free quote.",
  keywords: [
    "projector installation Johannesburg",
    "projector setup Pretoria",
    "home cinema projector Gauteng",
    "office projector installation Johannesburg",
    "conference room projector Pretoria",
    "projector ceiling mounting Gauteng",
    "school projector installation Johannesburg",
    "4K projector installation Pretoria",
    "projector screen installation Gauteng",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/tv-systems/projector",
  },
  openGraph: {
    title: "Projector Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional projector installation for homes, offices and schools in Gauteng. Ceiling mounting, screen setup, calibration. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/projector",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Projector Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Projector Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Projector Installation and Setup",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional projector installation for home cinemas, offices, schools and conference rooms in Johannesburg and Pretoria.",
};

export default function ProjectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Projector Installation Services in Johannesburg"
        description="Professional projector installation for home cinemas, offices, schools, and conference rooms in Johannesburg and Pretoria. We handle ceiling mounting, projection screen setup, image calibration, and full input source configuration for the perfect picture every time."
        serviceName="TV Systems - Projector"
        benefits={[
          {
            title: "Home Cinema Experience",
            description:
              "Transform any room into a cinematic experience with a large-screen projector setup — picture sizes from 80 inches up to 300 inches.",
          },
          {
            title: "Office & Conference Ready",
            description:
              "Professional projector installation for boardrooms, training rooms and classrooms with full input source and wireless presentation setup.",
          },
          {
            title: "Expert Calibration",
            description:
              "We calibrate brightness, contrast, keystone correction and colour accuracy so your image looks perfect from every seat in the room.",
          },
        ]}
        faqs={[
          {
            question: "What projector screen size do I need for my room?",
            answer:
              "Screen size depends on the room dimensions and seating distance. As a general guide, the screen width should be roughly half the distance from the screen to the furthest seat. We assess your room and recommend the ideal size.",
          },
          {
            question: "Can you mount a projector on the ceiling?",
            answer:
              "Yes. We ceiling-mount projectors with the correct bracket for your projector model, routing all cables neatly through the ceiling for a completely clean installation.",
          },
          {
            question: "Do you install projector screens as well?",
            answer:
              "Yes. We supply and install both fixed-frame screens and motorised retractable screens. Motorised screens can be controlled via remote, wall switch or home automation systems.",
          },
          {
            question: "Can a projector work in a bright room?",
            answer:
              "Standard projectors work best in darkened rooms. For bright environments we recommend a high-lumen laser projector or an ambient light rejecting screen, both of which we supply and install.",
          },
          {
            question: "Do you install projectors for schools and churches?",
            answer:
              "Yes. We install projectors for schools, churches, training centres and conference venues of all sizes, including large venues requiring multiple projectors or large-format displays.",
          },
          {
            question: "What areas do you cover for projector installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Projector Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Room assessment and projector placement planning",
              "Ceiling or wall bracket supply and installation",
              "Projector mounting and secure fixing",
              "Projection screen supply and installation",
              "HDMI and power cable routing and concealment",
              "Image calibration — brightness, contrast, keystone",
              "Input source configuration (laptop, streaming, DSTV)",
              "Full test and user demonstration before handover",
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
