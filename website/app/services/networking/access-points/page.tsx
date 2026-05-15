import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "WiFi Access Point Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional WiFi access point installation to extend coverage across your home, office or commercial building in Johannesburg and Pretoria. Eliminate dead zones. Expert setup. Free quote.",
  keywords: [
    "WiFi access point installation Johannesburg",
    "access point setup Pretoria",
    "WiFi extender installation Gauteng",
    "wireless access point Johannesburg",
    "office WiFi access point Pretoria",
    "WiFi dead zone solution Gauteng",
    "Ubiquiti access point installer Johannesburg",
  ],
  alternates: {
    canonical:
      "https://www.cinematicsystems.co.za/services/networking/access-points",
  },
  openGraph: {
    title:
      "WiFi Access Point Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Extend WiFi coverage across your property with professional access point installation in Gauteng. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/networking/access-points",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "WiFi Access Points - Cinematic Systems",
      },
    ],
  },
};

export default function AccessPointsPage() {
  return (
    <ServicePageTemplate
      title="WiFi Access Point Installation"
      description="Professional WiFi access point installation to extend coverage across your home, office or commercial building in Johannesburg and Pretoria. Eliminate dead zones and enjoy seamless wireless connectivity in every room."
      serviceName="Networking - Access Points"
    />
  );
}
