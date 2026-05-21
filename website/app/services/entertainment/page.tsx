// website/app/services/entertainment/page.tsx

// ✅ CONVERTED from ServicePageTemplate to a proper hub page with metadata and structured data
import type { Metadata } from "next";
import Link from "next/link";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

export const metadata: Metadata = {
  title:
    "Home Entertainment Installation Johannesburg & Pretoria | Cinematic Systems",
  description:
    "Professional home theatre, HiFi audio and speaker installation for homes and commercial spaces in Johannesburg and Pretoria. Immersive sound and visual experiences. Certified installers. Same-day service. Free quote.",
  keywords: [
    "home entertainment installation Johannesburg",
    "home theatre installation Pretoria",
    "HiFi audio installation Gauteng",
    "speaker installation Johannesburg",
    "entertainment system setup Pretoria",
    "audio visual installation Gauteng",
    "home cinema Johannesburg",
    "surround sound installation Pretoria",
  ],
  alternates: {
    canonical: "https://www.cinematicsystems.co.za/services/entertainment",
  },
  openGraph: {
    title:
      "Home Entertainment Installation Johannesburg & Pretoria | Cinematic Systems",
    description:
      "Professional home theatre, HiFi and speaker installation in Gauteng. Immersive sound experiences. Free quote.",
    url: "https://www.cinematicsystems.co.za/services/entertainment",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Home Entertainment - Cinematic Systems",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Entertainment System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Cinematic Systems",
    url: "https://www.cinematicsystems.co.za",
    telephone: "+27604243676",
    areaServed: ["Johannesburg", "Pretoria", "Gauteng"],
  },
  serviceType: "Home Entertainment Installation",
  areaServed: "Johannesburg, Pretoria, Gauteng",
  description:
    "Professional home theatre, HiFi audio and speaker installation for homes and commercial spaces in Johannesburg and Pretoria.",
};

const entertainmentServices = [
  {
    title: "Home Theatre Installation",
    description:
      "Cinema-quality audio and visual setups for your home. Surround sound, projectors, screens and full AV equipment installation for the ultimate movie experience.",
    service: "Entertainment - Home Theatre",
    href: "/services/entertainment/home-theatre",
    features: [
      "Surround sound",
      "Projector & screen",
      "AV receiver setup",
      "Acoustic optimisation",
    ],
  },
  {
    title: "HiFi Audio Systems",
    description:
      "Premium audiophile-grade stereo systems for music lovers. Crystal-clear sound, high-end components and expert setup for the ultimate listening experience.",
    service: "Entertainment - HiFi",
    href: "/services/entertainment/hifi",
    features: [
      "Audiophile grade",
      "Stereo & multi-room",
      "Premium brands",
      "Expert calibration",
    ],
  },
  {
    title: "Speaker Installation",
    description:
      "Indoor and outdoor speaker installation for homes, offices and commercial spaces. Ceiling speakers, in-wall speakers and outdoor audio systems.",
    service: "Entertainment - Speakers",
    href: "/services/entertainment/speakers",
    features: [
      "Ceiling speakers",
      "Outdoor audio",
      "In-wall speakers",
      "Multi-zone audio",
    ],
  },
];

export default function EntertainmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* HERO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Home Entertainment Installation in Johannesburg
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Professional installation • Fast response • Free consultation
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Transform your home into an immersive entertainment experience.
              Professional home theatre, HiFi audio and speaker installation for
              homes and commercial spaces across Johannesburg and Pretoria —
              certified installers, same-day service, warranty included.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Entertainment Systems" />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
              &nbsp;·&nbsp; ✓ Warranty included
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {entertainmentServices.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition"
              >
                <Link href={item.href}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition cursor-pointer">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                <ul className="mt-3 grid grid-cols-2 gap-1">
                  {item.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-xs text-gray-500 flex items-center gap-1"
                    >
                      <span className="text-blue-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3 items-center flex-wrap">
                  <GetQuoteButton service={item.service} />
                  <Link
                    href={item.href}
                    className="text-sm text-blue-600 font-semibold hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white border rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Cinematic Systems for Entertainment?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Certified AV installers across Johannesburg and Pretoria",
                "Home and commercial entertainment systems covered",
                "Premium brands: Sonos, Yamaha, Denon, Bose, KEF",
                "Custom room design and acoustic optimisation",
                "Same-day installation available for urgent requirements",
                "All work backed by warranty and after-sales support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* MAP */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Installation Coverage Area
            </h2>
            <p className="text-gray-600 mb-4">
              Entertainment system installation services across Johannesburg,
              Pretoria and surrounding Gauteng areas including Sandton,
              Randburg, Midrand, Centurion and Roodepoort.
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
            <h2 className="text-2xl font-semibold">
              Ready to Transform Your Entertainment?
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Get a free consultation and quote today.
            </p>
            <div className="mt-6">
              <GetQuoteButton service="Entertainment Systems" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
