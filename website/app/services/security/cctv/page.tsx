import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CCTV Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional CCTV installation for homes and businesses in Johannesburg and Pretoria. Indoor and outdoor security cameras, HD recording, night vision, remote viewing. Certified installers. Same-day service. Free quote.",
  keywords: [
    "CCTV installation Johannesburg",
    "CCTV installer near me",
    "security camera installation Pretoria",
    "CCTV installation for home Gauteng",
    "CCTV installation for business Johannesburg",
    "outdoor CCTV installation",
    "Hikvision installer Johannesburg",
    "Dahua CCTV Pretoria",
    "surveillance camera installation Gauteng",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/security/cctv",
  },
  openGraph: {
    title: "CCTV Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional CCTV installation for homes and businesses in Gauteng. HD cameras, night vision, remote viewing. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/security/cctv",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "CCTV Installation Services - Cinematic Systems Johannesburg",
      },
    ],
  },
};

// Structured data for local business + service
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CCTV Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Security Camera Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional CCTV installation for homes and businesses in Johannesburg and Pretoria. HD recording, night vision, remote viewing.",
};

export default function CCTVPage() {
  return (
    <>
      {/* Service structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ServicePageTemplate
        title="CCTV Installation Services in Johannesburg"
        description="Professional CCTV installation for homes, offices, and businesses in Johannesburg and Pretoria. Secure your property with modern surveillance systems featuring HD recording, night vision, and remote viewing from anywhere."
        serviceName="Security - CCTV"
        benefits={[
          {
            title: "HD & 4K Camera Systems",
            description:
              "Crystal-clear recording day and night with industry-leading Hikvision and Dahua cameras.",
          },
          {
            title: "Remote Viewing 24/7",
            description:
              "Monitor your property from your phone anywhere in the world using our mobile app setup.",
          },
          {
            title: "Full Warranty & Support",
            description:
              "All installations come with a warranty and ongoing technical support from our certified team.",
          },
        ]}
        faqs={[
          {
            question: "How much does CCTV installation cost in Johannesburg?",
            answer:
              "CCTV installation costs depend on the number of cameras and system type. We offer free quotes and competitive pricing for both homes and businesses. Contact us for a tailored quote.",
          },
          {
            question: "How long does CCTV installation take?",
            answer:
              "A standard home installation with 4–8 cameras typically takes 4–6 hours. Larger business installations may take a full day. We offer same-day service for urgent requirements.",
          },
          {
            question: "Can I view my CCTV cameras on my phone?",
            answer:
              "Yes. We set up remote viewing on your smartphone so you can monitor your property from anywhere in the world, 24 hours a day.",
          },
          {
            question: "What areas do you cover for CCTV installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Roodepoort, Centurion, Midrand and surrounding Gauteng areas.",
          },
          {
            question: "Do you install both indoor and outdoor CCTV cameras?",
            answer:
              "Yes, we install both indoor and outdoor cameras. Outdoor cameras are weatherproof and designed to withstand South African weather conditions.",
          },
        ]}
      >
        {/* UNIQUE content section specific to CCTV page */}
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our CCTV Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site assessment and camera placement planning",
              "Professional cable routing and concealment",
              "HD or 4K camera supply and mounting",
              "DVR/NVR recorder setup and configuration",
              "Remote viewing app setup on your phone",
              "Night vision and motion detection setup",
              "Full system testing before handover",
              "User training on how to use the system",
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
