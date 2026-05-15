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

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <Contact />
    </>
  );
}
