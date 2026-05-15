import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Speaker Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional indoor and outdoor speaker installation for homes, offices and commercial spaces in Johannesburg and Pretoria. High-quality sound systems, ceiling speakers, outdoor audio. Free quote.",
  keywords: [
    "speaker installation Johannesburg",
    "ceiling speaker installation Pretoria",
    "outdoor speaker installation Gauteng",
    "surround sound speaker installation Johannesburg",
    "commercial speaker installation Pretoria",
    "in-wall speaker installation Gauteng",
    "bluetooth speaker setup Johannesburg",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/entertainment/speakers",
  },
  openGraph: {
    title: "Speaker Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Indoor and outdoor speaker installation for homes and businesses in Gauteng. High-quality sound systems. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment/speakers",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Speaker Installation - Cinematic Systems",
      },
    ],
  },
};

export default function SpeakersPage() {
  return (
    <ServicePageTemplate
      title="Professional Speaker Installation"
      description="High-quality indoor and outdoor speaker systems for homes, offices, and commercial entertainment spaces in Johannesburg and Pretoria. From ceiling speakers to full surround sound setups."
      serviceName="Entertainment - Speakers"
    />
  );
}
