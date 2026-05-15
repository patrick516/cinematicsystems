import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Projector Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional projector installation for home cinemas, offices, schools and conference rooms in Johannesburg and Pretoria. Mounting, calibration, screen setup and optimal alignment. Free quote.",
  keywords: [
    "projector installation Johannesburg",
    "projector setup Pretoria",
    "home cinema projector Gauteng",
    "office projector installation Johannesburg",
    "conference room projector Pretoria",
    "projector mounting Gauteng",
    "school projector installation Johannesburg",
    "4K projector installation Pretoria",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/tv-systems/projector",
  },
  openGraph: {
    title: "Projector Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional projector installation for homes, offices and schools in Gauteng. Mounting, calibration, screen setup. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/projector",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Projector Installation - Cinematic Systems",
      },
    ],
  },
};

export default function ProjectorPage() {
  return (
    <ServicePageTemplate
      title="Projector Installation Services"
      description="Professional projector installation for home cinemas, offices, schools, and conference rooms in Johannesburg and Pretoria. We provide setup, mounting, calibration, and optimal display alignment."
      serviceName="TV Systems - Projector"
    />
  );
}
