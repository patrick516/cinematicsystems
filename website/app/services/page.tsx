import type { Metadata } from "next";
import Link from "next/link";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

export const metadata: Metadata = {
  title: "Installation Services Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional CCTV, DStv, WiFi networking, home theatre, access control, TV mounting and intercom installation services in Johannesburg and Pretoria. Certified installers. Same-day service. Free quote.",
  keywords: [
    "installation services Johannesburg",
    "CCTV installation Johannesburg",
    "DStv installation Pretoria",
    "home theatre installation Gauteng",
    "WiFi networking Johannesburg",
    "access control Pretoria",
    "TV mounting Johannesburg",
    "security systems Gauteng",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services",
  },
  openGraph: {
    title: "Installation Services Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional CCTV, DStv, WiFi, home theatre and access control installation in Johannesburg and Pretoria. Certified installers. Free quote.",
    url: "https://www.cinematicsystems.co.za/services",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Cinematic Systems Installation Services Johannesburg",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cinematic Systems",
  url: "https://www.cinematicsystems.co.za",
  telephone: "+27604243676",
  description:
    "Professional CCTV, DStv, WiFi, home theatre, access control and TV mounting installation services in Johannesburg and Pretoria.",
  areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Installation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CCTV Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "DStv Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "WiFi & Networking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Home Theatre Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Access Control Systems" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "TV Wall Mounting" },
      },
    ],
  },
};

const serviceCategories = [
  {
    category: "Security Systems",
    href: "/services/security",
    summary:
      "Protect your home or business with professional security installations. We design and install complete security solutions including CCTV surveillance, access control, biometric readers and intercom systems across Johannesburg and Pretoria.",
    services: [
      {
        name: "CCTV Installation",
        href: "/services/security/cctv",
        desc: "HD and 4K surveillance cameras for homes and businesses. Night vision, motion detection and remote viewing from your phone.",
      },
      {
        name: "Access Control",
        href: "/services/security/access-control",
        desc: "Card, PIN and smart access systems for offices and estates. Full audit trails and remote management.",
      },
      {
        name: "Biometric Systems",
        href: "/services/security/biometrics",
        desc: "Fingerprint and facial recognition for high-security environments. No keys, no cards — authorised access only.",
      },
      {
        name: "Intercom Systems",
        href: "/services/security/intercom",
        desc: "Audio and video intercoms for homes, apartments and offices. Answer your gate from your smartphone.",
      },
    ],
  },
  {
    category: "TV & Display Systems",
    href: "/services/tv-systems",
    summary:
      "From DStv satellite installation to TV wall mounting, projector setup and advanced HDMI matrix systems — we handle all TV and display installations for homes, offices and commercial venues across Gauteng.",
    services: [
      {
        name: "DStv Installation",
        href: "/services/tv-systems/dstv",
        desc: "Accredited DStv installation, Explora setup, extra view configuration and signal fault repairs.",
      },
      {
        name: "TV Wall Mounting",
        href: "/services/tv-systems/tv-mounting",
        desc: "Professional TV mounting on any wall type. Clean cable management and perfect alignment.",
      },
      {
        name: "Projector Installation",
        href: "/services/tv-systems/projector",
        desc: "Home cinema and office projector ceiling mounting, screen setup and full calibration.",
      },
      {
        name: "HDMI Matrix Systems",
        href: "/services/tv-systems/hdmi-matrix",
        desc: "Multi-screen video distribution for offices, hotels and entertainment venues.",
      },
    ],
  },
  {
    category: "Networking & WiFi",
    href: "/services/networking",
    summary:
      "Reliable internet and network infrastructure for homes and businesses. We eliminate WiFi dead zones, install structured cabling and set up enterprise-grade access points across Johannesburg and Pretoria.",
    services: [
      {
        name: "WiFi Installation",
        href: "/services/networking/wifi",
        desc: "Full-property wireless coverage for homes and offices. Mesh WiFi systems, dead zone elimination.",
      },
      {
        name: "Network Cabling",
        href: "/services/networking/cabling",
        desc: "Cat5e, Cat6 and fibre cabling for offices and homes. Neat cable management every time.",
      },
      {
        name: "Access Points",
        href: "/services/networking/access-points",
        desc: "Extend WiFi across large properties with professional access point installation.",
      },
    ],
  },
  {
    category: "Home Entertainment",
    href: "/services/entertainment",
    summary:
      "Transform your living space into a cinema-quality entertainment experience. We design and install home theatre systems, HiFi audio setups and indoor or outdoor speaker systems for homes and commercial spaces.",
    services: [
      {
        name: "Home Theatre",
        href: "/services/entertainment/home-theatre",
        desc: "Surround sound, projectors, screens and full AV setup for the ultimate movie experience.",
      },
      {
        name: "HiFi Audio Systems",
        href: "/services/entertainment/hifi",
        desc: "Audiophile-grade stereo systems for music lovers. Premium brands and expert calibration.",
      },
      {
        name: "Speaker Installation",
        href: "/services/entertainment/speakers",
        desc: "Ceiling, in-wall and outdoor speaker installation for homes and commercial spaces.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* HERO */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Professional Installation Services in Johannesburg
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Cinematic Systems provides certified installation services for
              security systems, TV and satellite, WiFi networking and home
              entertainment across Johannesburg, Pretoria and surrounding
              Gauteng areas. Same-day service available. All work backed by
              warranty.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="General" />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
              &nbsp;·&nbsp; ✓ Warranty included
            </p>
          </div>

          {/* SERVICE CATEGORIES */}
          <div className="space-y-16">
            {serviceCategories.map((cat) => (
              <div key={cat.href}>
                {/* Category header */}
                <div className="mb-6">
                  <Link href={cat.href}>
                    <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
                      {cat.category} →
                    </h2>
                  </Link>
                  <p className="text-gray-600 mt-2 max-w-3xl">{cat.summary}</p>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-blue-200 transition group"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white border rounded-2xl p-8 mt-16 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Cinematic Systems?
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              We are a Johannesburg-based installation company serving homes and
              businesses across Gauteng. Our certified technicians deliver
              clean, professional installations backed by warranty and
              after-sales support.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Certified and experienced installers across all service categories",
                "Coverage across Johannesburg, Pretoria and all of Gauteng",
                "Same-day installation available for urgent requirements",
                "All installations backed by warranty and after-sales support",
                "Industry-leading brands: Hikvision, Dahua, Ubiquiti, Sonos, Yamaha",
                "Free site assessment and consultation before every job",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AREAS SERVED */}
          <div className="bg-white border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Areas We Serve
            </h2>
            <p className="text-gray-600 mb-4">
              We provide installation services across the greater Johannesburg
              and Pretoria metropolitan area, including Sandton, Randburg,
              Roodepoort, Midrand, Centurion, Boksburg, Edenvale, Germiston and
              all surrounding Gauteng suburbs. Not sure if we cover your area?
              Contact us — we travel for larger jobs.
            </p>
            <div className="overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps?q=-26.031983,27.932502&z=17&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
            <p className="mt-2 text-sm opacity-90">
              Request a free quote and we&apos;ll respond quickly with pricing
              and availability.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="General" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
