import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title: "WiFi Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional WiFi installation and network setup for homes, offices and commercial buildings in Johannesburg and Pretoria. Maximum coverage, fast speeds, expert configuration. Free quote.",
  keywords: [
    "WiFi installation Johannesburg",
    "wireless network setup Pretoria",
    "WiFi installer near me Gauteng",
    "home WiFi installation Johannesburg",
    "office WiFi setup Pretoria",
    "WiFi coverage extension Gauteng",
    "mesh WiFi installation Johannesburg",
    "business internet setup Pretoria",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/networking/wifi",
  },
  openGraph: {
    title: "WiFi Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Fast and stable WiFi installation for homes and offices in Gauteng. Maximum coverage, expert setup. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking/wifi",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "WiFi Installation - Cinematic Systems",
      },
    ],
  },
};

export default function WifiPage() {
  return (
    <ServicePageTemplate
      title="WiFi Installation & Setup"
      description="Fast and stable WiFi installation for homes, offices, and commercial buildings in Johannesburg and Pretoria. We design, install, and optimize wireless networks for maximum coverage and speed."
      serviceName="Networking - WiFi"
    />
  );
}
