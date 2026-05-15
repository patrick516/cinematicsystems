import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Network Cabling Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional structured network cabling for offices, homes and commercial buildings in Johannesburg and Pretoria. Cat5e, Cat6, and fibre cabling. Clean installation and reliable connectivity. Free quote.",
  keywords: [
    "network cabling Johannesburg",
    "structured cabling Pretoria",
    "Cat6 cabling installation Gauteng",
    "office network cabling Johannesburg",
    "data cabling installation Pretoria",
    "ethernet cabling Johannesburg",
    "fibre cabling Gauteng",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/networking/cabling",
  },
  openGraph: {
    title:
      "Network Cabling Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional structured cabling for offices and homes in Gauteng. Cat5e, Cat6, fibre. Clean installation. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking/cabling",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Network Cabling - Cinematic Systems",
      },
    ],
  },
};

export default function CablingPage() {
  return (
    <ServicePageTemplate
      title="Network Cabling Installation"
      description="Professional structured cabling for offices, homes, and commercial buildings in Johannesburg and Pretoria. We install reliable, high-speed network infrastructure including Cat5e, Cat6 and fibre for stable connectivity."
      serviceName="Networking - Cabling"
    />
  );
}
