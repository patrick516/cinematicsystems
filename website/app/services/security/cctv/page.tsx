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

export default function CCTVPage() {
  return (
    <ServicePageTemplate
      title="CCTV Installation Services"
      description="Professional CCTV installation for homes, offices, and businesses in Johannesburg and Pretoria. Secure your property with modern surveillance systems featuring HD recording, night vision, and remote viewing."
      serviceName="Security - CCTV"
    />
  );
}
