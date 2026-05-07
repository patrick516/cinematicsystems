"use client";

import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

const networkingServices = [
  {
    title: "WiFi Installation",
    description:
      "Fast and reliable wireless internet setup for homes and offices.",
    service: "Networking - WiFi",
  },
  {
    title: "Structured Cabling",
    description: "Clean and professional network cabling for businesses.",
    service: "Networking - Cabling",
  },
  {
    title: "Access Points Setup",
    description: "Extend your WiFi coverage across your entire space.",
    service: "Networking - Access Points",
  },
];

export default function NetworkingPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Networking Solutions
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reliable internet and network infrastructure for homes, offices, and
            businesses.
          </p>

          <div className="mt-6">
            <GetQuoteButton service="Networking Solutions" />
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {networkingServices.map((item, index) => (
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

        {/* LOCATION SECTION */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Installation Coverage Area
          </h2>

          <p className="text-gray-600 mb-4">
            We provide networking installations across residential and
            commercial areas.
          </p>

          <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            Google Map Location (Coming Soon)
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Need Reliable Internet Setup?
          </h3>
          <p className="text-gray-600 mt-2">
            Get a professional installation quote today
          </p>

          <div className="mt-6">
            <GetQuoteButton service="Networking Solutions" />
          </div>
        </div>
      </div>
    </section>
  );
}
