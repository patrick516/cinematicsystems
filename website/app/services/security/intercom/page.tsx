import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Intercom System Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional audio and video intercom installation for homes, apartments, offices and gated communities in Johannesburg and Pretoria. Reliable visitor access and communication systems. Free quote.",
  keywords: [
    "intercom installation Johannesburg",
    "video intercom Pretoria",
    "audio intercom installation Gauteng",
    "gate intercom installation Johannesburg",
    "apartment intercom system Pretoria",
    "office intercom installation Gauteng",
    "video doorbell installation Johannesburg",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/security/intercom",
  },
  openGraph: {
    title:
      "Intercom System Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Audio and video intercom systems for homes, apartments and offices in Gauteng. Secure visitor access. Professional installation. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/security/intercom",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Intercom Installation - Cinematic Systems",
      },
    ],
  },
};

export default function IntercomPage() {
  return (
    <ServicePageTemplate
      title="Intercom Systems Installation"
      description="Modern audio and video intercom systems for homes, apartments, offices, and gated communities in Johannesburg and Pretoria. Improve communication and secure visitor access with reliable intercom solutions."
      serviceName="Security - Intercom"
    />
  );
}
