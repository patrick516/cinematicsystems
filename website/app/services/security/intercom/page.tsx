// website/app/services/security/intercom/page.tsx
import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Intercom System Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional audio and video intercom installation for homes, apartments, offices and gated communities in Johannesburg and Pretoria. Gate intercom, video doorbell, multi-tenant systems. Certified installers. Free quote.",
  keywords: [
    "intercom installation Johannesburg",
    "video intercom Pretoria",
    "audio intercom installation Gauteng",
    "gate intercom installation Johannesburg",
    "apartment intercom system Pretoria",
    "office intercom installation Gauteng",
    "video doorbell installation Johannesburg",
    "wireless intercom Pretoria",
    "IP intercom installer Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/security/intercom",
  },
  openGraph: {
    title:
      "Intercom System Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Audio and video intercom systems for homes, apartments and offices in Gauteng. Secure visitor access. Answer your gate from your phone. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/security/intercom",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Intercom Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intercom System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Intercom System Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional audio and video intercom installation for homes, apartments and offices in Johannesburg and Pretoria.",
};

export default function IntercomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Intercom System Installation in Johannesburg"
        description="Modern audio and video intercom systems for homes, apartments, offices, and gated communities in Johannesburg and Pretoria. See and speak to visitors before granting access — even from your smartphone when you are away from home."
        serviceName="Security - Intercom"
        benefits={[
          {
            title: "See Visitors Before Opening",
            description:
              "Video intercom lets you see and speak to visitors at your gate or door before granting access — from inside your home or your smartphone.",
          },
          {
            title: "Answer From Your Smartphone",
            description:
              "IP intercom systems connect to your phone via app so you can answer your gate and release the lock from anywhere in the world.",
          },
          {
            title: "Multi-Unit Apartment Systems",
            description:
              "We install multi-tenant intercom systems for apartment blocks and office buildings with individual handsets or apps per unit.",
          },
        ]}
        faqs={[
          {
            question:
              "What is the difference between audio and video intercom?",
            answer:
              "Audio intercoms allow voice communication only. Video intercoms include a camera so you can see the visitor on a monitor or your smartphone before deciding to open the gate or door.",
          },
          {
            question:
              "Can I answer my intercom from my phone when I'm not home?",
            answer:
              "Yes. IP-based video intercom systems connect to your home WiFi and allow you to see, speak to, and remotely unlock your gate for visitors from your smartphone anywhere in the world.",
          },
          {
            question: "Do you install intercom systems for apartment blocks?",
            answer:
              "Yes, we install multi-tenant intercom systems for apartment blocks where each unit has its own handset or smartphone app, and visitors can call specific units from the entrance panel.",
          },
          {
            question: "Can the intercom be connected to my electric gate?",
            answer:
              "Yes. We connect the intercom to your electric gate motor so you can remotely release the gate from the intercom handset or your phone without needing to physically go outside.",
          },
          {
            question: "Do you install wireless intercom systems?",
            answer:
              "Yes, we install both wired and wireless intercom systems. Wireless options are ideal for properties where running cables is difficult or not possible.",
          },
          {
            question: "What areas do you cover for intercom installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Intercom Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site assessment and cable routing plan",
              "Outdoor intercom panel with camera supply and installation",
              "Indoor monitor or handset installation",
              "Smartphone app setup for remote gate answering",
              "Electric gate or door release integration",
              "Cable installation with neat wall concealment",
              "Multi-unit configuration for apartment buildings",
              "Full system testing and user walkthrough",
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
