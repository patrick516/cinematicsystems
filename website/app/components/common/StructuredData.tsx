// app/components/shared/StructuredData.tsx
// Add this component to layout.tsx inside <head> for rich Google results

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ─── LOCAL BUSINESS ──────────────────────────────────────────
      {
        "@type": "LocalBusiness",
        "@id": "https://www.cinematicsystems.co.za/#business",
        name: "Cinematic Systems",
        url: "https://www.cinematicsystems.co.za",
        telephone: "+27604243676",
        email: "info@cinematicsystems.co.za",
        description:
          "Professional CCTV installation, DSTV setup, WiFi networking, home theatre, access control and TV mounting services in Johannesburg and Pretoria.",
        image: "https://www.cinematicsystems.co.za/images/logo.jpeg",
        logo: "https://www.cinematicsystems.co.za/images/logo.jpeg",
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
          {
            "@type": "City",
            name: "Johannesburg",
          },
          {
            "@type": "City",
            name: "Pretoria",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "08:00",
            closes: "14:00",
          },
        ],
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Installation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CCTV Installation",
                url: "https://www.cinematicsystems.co.za/services/security/cctv",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DSTV Installation",
                url: "https://www.cinematicsystems.co.za/services/tv-systems/dstv",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WiFi & Networking",
                url: "https://www.cinematicsystems.co.za/services/networking/wifi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home Theatre Installation",
                url: "https://www.cinematicsystems.co.za/services/entertainment/home-theatre",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Access Control Systems",
                url: "https://www.cinematicsystems.co.za/services/security/access-control",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "TV Mounting",
                url: "https://www.cinematicsystems.co.za/services/tv-systems/tv-mounting",
              },
            },
          ],
        },
      },

      // ─── WEBSITE ─────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://www.cinematicsystems.co.za/#website",
        url: "https://www.cinematicsystems.co.za",
        name: "Cinematic Systems",
        publisher: {
          "@id": "https://www.cinematicsystems.co.za/#business",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.cinematicsystems.co.za/services?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
