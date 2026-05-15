import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DSTV Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional DSTV installation, setup and signal troubleshooting in Johannesburg and Pretoria. Dish alignment, decoder setup, full channel access. Same-day service. Free quote.",
  keywords: [
    "DSTV installation Johannesburg",
    "DSTV installer near me",
    "DSTV installation Pretoria",
    "DSTV signal repair Gauteng",
    "DSTV dish alignment Johannesburg",
    "DSTV decoder installation",
    "DSTV extra view setup",
    "DSTV installation for business",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/tv-systems/dstv",
  },
  openGraph: {
    title: "DSTV Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional DSTV installation and signal troubleshooting in Gauteng. Dish alignment, decoder setup, full channel access. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/tv-systems/dstv",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "DSTV Installation Services - Cinematic Systems Johannesburg",
      },
    ],
  },
};

export default function DstvPage() {
  return (
    <ServicePageTemplate
      title="DSTV Installation & Setup"
      description="Professional DSTV installation, setup, and signal troubleshooting for homes and businesses in Johannesburg and Pretoria. We ensure clear signal quality, proper dish alignment, and full channel access."
      serviceName="TV Systems - DSTV"
    />
  );
}
