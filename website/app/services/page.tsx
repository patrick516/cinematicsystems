import Link from "next/link";

export const metadata = {
  title: "Our Services | Cinematic Systems",
  description:
    "Professional CCTV, DSTV, WiFi, Access Control, Home Theatre and TV mounting services in Johannesburg and Pretoria.",
};

const services = [
  {
    name: "CCTV Installation",
    href: "/services/security/cctv",
    desc: "Surveillance systems for homes and businesses.",
  },
  {
    name: "DSTV Installation",
    href: "/services/tv-systems/dstv",
    desc: "Professional DSTV setup and signal troubleshooting.",
  },
  {
    name: "WiFi & Networking",
    href: "/services/networking/wifi",
    desc: "Fast and stable WiFi for homes and offices.",
  },
  {
    name: "Access Control",
    href: "/services/security/access-control",
    desc: "Smart access systems for offices and estates.",
  },
  {
    name: "Home Theatre",
    href: "/services/entertainment/home-theatre",
    desc: "Premium home theatre design and installation.",
  },
  {
    name: "TV Mounting",
    href: "/services/tv-systems/tv-mounting",
    desc: "Professional TV wall mounting service.",
  },
  {
    name: "HiFi Audio",
    href: "/services/entertainment/hifi",
    desc: "High quality audio system installation.",
  },
  {
    name: "Speakers",
    href: "/services/entertainment/speakers",
    desc: "Indoor and outdoor speaker installation.",
  },
  {
    name: "Projectors",
    href: "/services/tv-systems/projector",
    desc: "Projector installation and setup.",
  },
  {
    name: "HDMI Matrix",
    href: "/services/tv-systems/hdmi-matrix",
    desc: "Multi-room video distribution systems.",
  },
  {
    name: "Biometrics",
    href: "/services/security/biometrics",
    desc: "Fingerprint and facial recognition access.",
  },
  {
    name: "Intercom Systems",
    href: "/services/security/intercom",
    desc: "Intercom installation for homes and offices.",
  },
  {
    name: "Network Cabling",
    href: "/services/networking/cabling",
    desc: "Structured cabling for homes and businesses.",
  },
  {
    name: "Access Points",
    href: "/services/networking/access-points",
    desc: "WiFi access point installation and setup.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional installation services across Johannesburg and Pretoria.
            Certified installers, same-day service, warranty included.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition group"
            >
              <h2 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition mb-2">
                {service.name}
              </h2>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
