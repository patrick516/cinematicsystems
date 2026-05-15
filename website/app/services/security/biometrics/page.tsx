import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Biometric Security Systems Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional fingerprint and facial recognition access control installation for homes, offices and commercial buildings in Johannesburg and Pretoria. High-security biometric systems. Free quote.",
  keywords: [
    "biometric access control Johannesburg",
    "fingerprint access system Pretoria",
    "facial recognition installation Gauteng",
    "biometric security system Johannesburg",
    "fingerprint door lock installation",
    "biometric office security Pretoria",
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

export default function BiometricsPage() {
  return (
    <ServicePageTemplate
      title="Biometric Security Systems"
      description="Advanced fingerprint and facial recognition access systems for high-security environments in Johannesburg and Pretoria. Improve safety and control who enters your property with cutting-edge biometric technology."
      serviceName="Security - Biometrics"
    />
  );
}
