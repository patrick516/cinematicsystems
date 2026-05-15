import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Home Theatre Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional home theatre system installation in Johannesburg and Pretoria. Cinema-quality audio and visual setups for your home. Surround sound, projectors, screens and AV equipment. Free quote.",
  keywords: [
    "home theatre installation Johannesburg",
    "home cinema installation Pretoria",
    "surround sound installation Gauteng",
    "home theatre setup Johannesburg",
    "AV installation Pretoria",
    "cinema room installation Gauteng",
    "home theatre system Johannesburg",
    "projector screen installation Pretoria",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/entertainment/home-theatre",
  },
  openGraph: {
    title:
      "Home Theatre Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Cinema-quality home theatre installation in Gauteng. Surround sound, projectors, screens. Professional setup. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment/home-theatre",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Home Theatre Installation - Cinematic Systems",
      },
    ],
  },
};

export default function HomeTheatrePage() {
  return (
    <ServicePageTemplate
      title="Home Theatre Installation"
      description="Professional home theatre system installation for immersive movie and sound experiences in Johannesburg and Pretoria. We design and install cinema-quality audio-visual setups including surround sound, projectors, and screens."
      serviceName="Entertainment - Home Theatre"
    />
  );
}
