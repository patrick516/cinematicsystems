import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "TV Wall Mounting Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional TV wall mounting for homes, offices and commercial spaces in Johannesburg and Pretoria. Secure installation, perfect alignment, clean cable management. All TV sizes. Free quote.",
  keywords: [
    "TV wall mounting Johannesburg",
    "TV mounting service Pretoria",
    "TV installation Gauteng",
    "flat screen mounting Johannesburg",
    "TV bracket installation Pretoria",
    "cable management TV mounting Gauteng",
    "TV mounting near me Johannesburg",
    "large TV mounting Pretoria",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/tv-systems/tv-mounting",
  },
  openGraph: {
    title: "TV Wall Mounting Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional TV wall mounting with clean cable management in Gauteng. All TV sizes. Same-day service. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/tv-mounting",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "TV Wall Mounting - Cinematic Systems",
      },
    ],
  },
};

export default function TvMountingPage() {
  return (
    <ServicePageTemplate
      title="TV Wall Mounting & Installation"
      description="Professional TV wall mounting services for homes, offices, and commercial spaces in Johannesburg and Pretoria. Secure installation, perfect alignment, clean cable management for all TV sizes."
      serviceName="TV Systems - TV Mounting"
    />
  );
}
