import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata = {
  title: "CCTV Installation | Security Systems",
  description:
    "Professional CCTV installation for homes and businesses. Secure your property with high-quality surveillance systems and expert setup.",
};

export default function CCTVPage() {
  return (
    <ServicePageTemplate
      title="CCTV Installation Services"
      description="Professional CCTV installation for homes, offices, and businesses. Secure your property with modern surveillance systems."
      serviceName="Security - CCTV"
    />
  );
}
