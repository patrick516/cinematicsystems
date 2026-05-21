// website/app/services/security/access-control/page.tsx
import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Access Control Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional access control system installation for offices, apartments, and commercial buildings in Johannesburg and Pretoria. Card access, PIN systems, and smart door security. Certified installers. Same-day service. Free quote.",
  keywords: [
    "access control installation Johannesburg",
    "access control systems Pretoria",
    "card access system Gauteng",
    "smart door access Johannesburg",
    "office access control installation",
    "apartment access control Pretoria",
    "PIN access system Johannesburg",
    "electric gate access control Gauteng",
    "remote access control Johannesburg",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/security/access-control",
  },
  openGraph: {
    title:
      "Access Control Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Secure your property with professional access control systems. Card, PIN and smart access for offices and buildings in Gauteng. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/security/access-control",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Access Control Installation - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Access Control System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Access Control Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional access control installation for offices, apartments and commercial buildings in Johannesburg and Pretoria.",
};

export default function AccessControlPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Access Control Systems Installation in Johannesburg"
        description="Professional access control solutions for offices, apartments, and commercial buildings in Johannesburg and Pretoria. Manage who enters your property with secure card, PIN, and smart access systems — no more lost keys, full audit trails, remote management."
        serviceName="Security - Access Control"
        benefits={[
          {
            title: "Keyless Entry Systems",
            description:
              "Card, fob, PIN or smartphone access — eliminate the risk of lost or copied keys entirely from your property.",
          },
          {
            title: "Full Access Audit Trail",
            description:
              "Know exactly who entered and when. Every access event is logged and available for review at any time.",
          },
          {
            title: "Remote Access Management",
            description:
              "Grant or revoke access remotely from your phone. Manage multiple doors and users instantly from anywhere.",
          },
        ]}
        faqs={[
          {
            question:
              "How much does access control installation cost in Johannesburg?",
            answer:
              "Access control costs depend on the number of doors and system type chosen. We provide free site assessments and competitive quotes tailored to your specific property and requirements.",
          },
          {
            question: "What types of access control systems do you install?",
            answer:
              "We install card readers, PIN keypads, proximity fob systems, smartphone-based access, and integrated systems that combine multiple access methods for layered security.",
          },
          {
            question: "Can I control access remotely from my phone?",
            answer:
              "Yes. Modern access control systems allow you to grant and revoke access, view entry logs, and remotely unlock doors from your smartphone from anywhere in the world.",
          },
          {
            question:
              "Do you install access control for apartments and estates?",
            answer:
              "Yes, we install multi-tenant access control for apartment blocks, office parks, and gated estates. Each resident or employee gets their own unique access credentials.",
          },
          {
            question:
              "Can access control integrate with my CCTV or alarm system?",
            answer:
              "Yes. We can integrate access control with your existing CCTV cameras and alarm systems for a fully unified security setup with centralised management.",
          },
          {
            question:
              "What areas do you cover for access control installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Randburg, Midrand, Centurion, Roodepoort and all surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Access Control Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site assessment and security planning",
              "Card reader or keypad supply and installation",
              "Electric lock or magnetic lock fitting",
              "Control panel and software configuration",
              "User credential setup and enrolment",
              "Remote management app setup on your phone",
              "Integration with existing CCTV or alarm system",
              "Full system testing and user training",
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
