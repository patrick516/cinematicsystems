import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Home Entertainment Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional home theatre, HiFi audio and speaker installation for homes and commercial spaces in Johannesburg and Pretoria. Immersive sound and visual experiences. Free quote.",
  keywords: [
    "home entertainment installation Johannesburg",
    "home theatre installation Pretoria",
    "HiFi audio installation Gauteng",
    "speaker installation Johannesburg",
    "entertainment system setup Pretoria",
    "audio visual installation Gauteng",
    "home cinema Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/entertainment",
  },
  openGraph: {
    title:
      "Home Entertainment Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional home theatre, HiFi and speaker installation in Gauteng. Immersive sound experiences. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Home Entertainment - Cinematic Systems",
      },
    ],
  },
};

export default function EntertainmentPage() {
  return (
    <ServicePageTemplate
      title="Entertainment & Audio Systems"
      description="Professional home theatre, speakers, and HiFi audio installation for immersive sound experiences in homes and commercial spaces across Johannesburg and Pretoria."
      serviceName="Entertainment - Systems"
    />
  );
}
