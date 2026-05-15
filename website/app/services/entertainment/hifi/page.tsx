import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "HiFi Audio System Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Premium HiFi audio system installation for homes and entertainment spaces in Johannesburg and Pretoria. Crystal-clear sound, audiophile-grade equipment, expert setup. Free quote.",
  keywords: [
    "HiFi installation Johannesburg",
    "HiFi audio system Pretoria",
    "audiophile speaker installation Gauteng",
    "high end audio installation Johannesburg",
    "HiFi setup Pretoria",
    "stereo system installation Gauteng",
    "premium audio installation Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/entertainment/hifi",
  },
  openGraph: {
    title:
      "HiFi Audio System Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Premium HiFi audio installation for homes in Gauteng. Audiophile-grade equipment, crystal-clear sound. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment/hifi",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HiFi Audio Installation - Cinematic Systems",
      },
    ],
  },
};

export default function HifiPage() {
  return (
    <ServicePageTemplate
      title="HiFi Audio System Installation"
      description="Premium HiFi audio installation for audiophiles and high-end home entertainment setups in Johannesburg and Pretoria. We design and install crystal-clear sound systems for the ultimate listening experience."
      serviceName="Entertainment - HiFi"
    />
  );
}
