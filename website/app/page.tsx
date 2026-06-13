import type { Metadata } from "next";
import Hero from "@/app/components/sections/hero/Hero";
import Products from "@/app/components/sections/products/Products";
import Services from "@/app/components/sections/services/Services";
import Contact from "@/app/components/sections/contact/Contact";

export const metadata: Metadata = {
  title: "Cinematic Systems | CCTV, DSTV & Home Entertainment Johannesburg",
  description:
    "Cinematic Systems offers professional CCTV installation, DSTV setup, WiFi networking, home theatre, access control and TV mounting in Johannesburg and Pretoria. Certified installers. Same-day service. Get a free quote today.",
  alternates: {
    canonical: "https://www.cinematicsystems.co.za",
  },
  openGraph: {
    title: "Cinematic Systems | CCTV, DSTV & Home Entertainment Johannesburg",
    description:
      "Professional CCTV, DSTV, WiFi, home theatre and access control installation in Johannesburg and Pretoria. Certified installers. Free quote.",
    url: "https://www.cinematicsystems.co.za",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Cinematic Systems - Professional Installation Services",
      },
    ],
  },
};

// LocalBusiness schema — critical for Google local search ranking
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cinematic Systems",
  url: "https://www.cinematicsystems.co.za",
  telephone: "+27604243676",
  description:
    "Professional CCTV installation, DStv setup, WiFi networking, home theatre, access control and TV mounting services in Johannesburg and Pretoria.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.031983,
    longitude: 27.932502,
  },
  areaServed: [
    { "@type": "City", name: "Johannesburg" },
    { "@type": "City", name: "Pretoria" },
    { "@type": "State", name: "Gauteng" },
  ],
  serviceType: [
    "CCTV Installation",
    "DStv Installation",
    "WiFi Installation",
    "Home Theatre Installation",
    "Access Control",
    "TV Wall Mounting",
    "Intercom Systems",
    "Biometric Systems",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  image: "https://www.cinematicsystems.co.za/images/og-image.jpeg",
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Products />
      <Services />
      <Contact />
    </>
  );
}
