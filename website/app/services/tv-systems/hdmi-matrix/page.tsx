import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "HDMI Matrix Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional HDMI matrix system installation for offices, hotels, conference rooms and entertainment venues in Johannesburg and Pretoria. Multi-screen video distribution. Expert setup. Free quote.",
  keywords: [
    "HDMI matrix installation Johannesburg",
    "video matrix switch Pretoria",
    "multi screen video distribution Gauteng",
    "HDMI splitter installation Johannesburg",
    "AV matrix system Pretoria",
    "hotel TV system Gauteng",
    "conference room AV setup Johannesburg",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/tv-systems/hdmi-matrix",
  },
  openGraph: {
    title:
      "HDMI Matrix Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Multi-screen HDMI matrix installation for offices, hotels and venues in Gauteng. Professional AV setup. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/hdmi-matrix",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HDMI Matrix Installation - Cinematic Systems",
      },
    ],
  },
};

export default function HdmiMatrixPage() {
  return (
    <ServicePageTemplate
      title="HDMI Matrix Installation & Setup"
      description="Advanced HDMI matrix solutions for offices, hotels, conference rooms, and entertainment systems in Johannesburg and Pretoria. We distribute multiple video sources to multiple screens with professional setup and control."
      serviceName="TV Systems - HDMI Matrix"
    />
  );
}
