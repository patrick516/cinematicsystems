"use client";

import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

const securityServices = [
  {
    title: "CCTV Installation",
    description: "24/7 surveillance systems for homes and businesses.",
    service: "CCTV",
  },
  {
    title: "Biometric Systems",
    description: "Secure fingerprint and facial recognition access.",
    service: "Biometrics",
  },
  {
    title: "Access Control",
    description: "Control who enters your building with smart systems.",
    service: "Access Control",
  },
  {
    title: "Intercom Systems",
    description: "Communicate securely between rooms or entrances.",
    service: "Intercom",
  },
];

export default function SecurityPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Security Systems Solutions
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Protect your home and business with advanced security systems. Fast
            installation, reliable technology, and expert support.
          </p>

          <div className="mt-6">
            <GetQuoteButton service="Security Systems" />
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {securityServices.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <div className="mt-4">
                <GetQuoteButton service={item.service} />
              </div>
            </div>
          ))}
        </div>

        {/* LOCATION SECTION (PLACEHOLDER) */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            We Serve Your Area
          </h2>

          <p className="text-gray-600 mb-4">
            We provide security installation services across multiple locations.
          </p>

          {/* GOOGLE MAP  */}
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

        {/* FINAL CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Need Security Installation?
          </h3>
          <p className="text-gray-600 mt-2">Get a free quote in minutes</p>

          <div className="mt-6">
            <GetQuoteButton service="Security Systems" />
          </div>
        </div>
      </div>
    </section>
  );
}
