// website/app/services/security/biometrics/page.tsx
import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Biometric Security Systems Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional fingerprint and facial recognition access control installation for homes, offices and commercial buildings in Johannesburg and Pretoria. High-security biometric systems. Certified installers. Same-day service. Free quote.",
  keywords: [
    "biometric access control Johannesburg",
    "fingerprint access system Pretoria",
    "facial recognition installation Gauteng",
    "biometric security system Johannesburg",
    "fingerprint door lock installation",
    "biometric office security Pretoria",
    "ZKTeco installer Johannesburg",
    "biometric time attendance Gauteng",
    "biometric installer near me",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/security/biometrics",
  },
  openGraph: {
    title:
      "Biometric Security Systems Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Fingerprint and facial recognition access systems for high-security environments in Gauteng. Professional installation. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/security/biometrics",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Biometric Security Systems - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Biometric Security System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Biometric Access Control Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Fingerprint and facial recognition access control installation for high-security environments in Johannesburg and Pretoria.",
};

export default function BiometricsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageTemplate
        title="Biometric Security Systems in Johannesburg"
        description="Advanced fingerprint and facial recognition access systems for high-security homes, offices and commercial buildings in Johannesburg and Pretoria. Eliminate keys and cards — only authorised individuals gain entry, every time, with a complete audit trail."
        serviceName="Security - Biometrics"
        benefits={[
          {
            title: "No Keys or Cards to Lose",
            description:
              "Access is granted using your fingerprint or face — completely unique to each person and impossible to copy, share, or steal.",
          },
          {
            title: "99%+ Recognition Accuracy",
            description:
              "Modern biometric systems are highly accurate and fast, granting access in under one second with minimal false rejections.",
          },
          {
            title: "Time & Attendance Tracking",
            description:
              "Biometric systems double as staff attendance tracking — logging exact entry and exit times for each employee automatically.",
          },
        ]}
        faqs={[
          {
            question: "How accurate are biometric access control systems?",
            answer:
              "Modern fingerprint and facial recognition systems achieve accuracy rates above 99%. They are extremely reliable and process recognition in under one second under normal conditions.",
          },
          {
            question:
              "Can multiple people be registered on the biometric system?",
            answer:
              "Yes. Biometric systems can store hundreds to thousands of users. Each person's fingerprint or face is enrolled during setup, and you can add or remove users at any time through the management software.",
          },
          {
            question: "What happens if a fingerprint is not recognised?",
            answer:
              "The system will deny access and log the failed attempt. Most systems also support a backup PIN for situations where recognition fails, such as injured or dirty fingers.",
          },
          {
            question: "Do you install biometric time and attendance systems?",
            answer:
              "Yes. We install biometric time and attendance terminals that automatically track staff clock-in and clock-out times, which can integrate with payroll systems where required.",
          },
          {
            question: "What brands of biometric systems do you install?",
            answer:
              "We install industry-leading brands including ZKTeco, Hikvision biometric readers, and Suprema systems, selected based on your security requirements and budget.",
          },
          {
            question: "What areas do you cover for biometric installation?",
            answer:
              "We cover Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort and surrounding Gauteng areas.",
          },
        ]}
      >
        <div className="bg-white border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What's Included in Our Biometric Installation
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Site assessment and security planning",
              "Biometric reader supply and wall installation",
              "Fingerprint and/or facial enrolment for all users",
              "Control panel and management software setup",
              "Electric lock or door strike fitting",
              "Backup PIN or card access configuration",
              "Access log and reporting dashboard setup",
              "Full system testing and staff training",
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
