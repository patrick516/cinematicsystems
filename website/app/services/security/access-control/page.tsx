import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Access Control Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional access control system installation for offices, apartments, and commercial buildings in Johannesburg and Pretoria. Card access, PIN systems, and smart door security. Free quote.",
  keywords: [
    "access control installation Johannesburg",
    "access control systems Pretoria",
    "card access system Gauteng",
    "smart door access Johannesburg",
    "office access control installation",
    "apartment access control Pretoria",
    "PIN access system Johannesburg",
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

export default function AccessControlPage() {
  return (
    <ServicePageTemplate
      title="Access Control Systems Installation"
      description="Professional access control solutions for offices, apartments, and commercial buildings in Johannesburg and Pretoria. Manage who enters your property with secure card, PIN, and smart access systems."
      serviceName="Security - Access Control"
    />
  );
}
