import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata = {
  title: "WiFi Installation Services",
  description:
    "Fast and stable WiFi setup for homes and offices with professional installation.",
};
export default function WifiPage() {
  return (
    <ServicePageTemplate
      title="WiFi Installation & Setup"
      description="Fast and stable WiFi installation for homes, offices, and commercial buildings. We design, install, and optimize wireless networks for maximum coverage and speed."
      serviceName="Networking - WiFi"
    />
  );
}
