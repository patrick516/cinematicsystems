import ServicePageTemplate from "@/app/components/common/ServicePageTemplate";

export const metadata = {
  title: "Biometric Security Systems Installation",
  description:
    "Fingerprint and facial recognition systems for secure access control in homes, offices, and commercial buildings.",
};

export default function BiometricsPage() {
  return (
    <ServicePageTemplate
      title="Biometric Security Systems"
      description="Advanced fingerprint and facial recognition access systems for high-security environments. Improve safety and control who enters your property."
      serviceName="Security - Biometrics"
    />
  );
}
