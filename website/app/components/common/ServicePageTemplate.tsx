"use client";

import GetQuoteButton from "@/app/components/shared/GetQuoteButton";

type Props = {
  title: string;
  description: string;
  serviceName: string;
};

export default function ServicePageTemplate({
  title,
  description,
  serviceName,
}: Props) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-xs text-gray-400 mt-2">
            Professional installation • Fast response • Free consultation
          </p>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>

          <div className="mt-6">
            <GetQuoteButton service={serviceName} />
          </div>
        </div>

        {/* BENEFITS (STATIC FOR NOW) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">
              Professional Installation
            </h3>
            <p className="text-sm text-gray-600">
              Expert setup and configuration for reliability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">High Quality Systems</h3>
            <p className="text-sm text-gray-600">
              Industry-standard equipment and solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
            <p className="text-sm text-gray-600">
              Maintenance and assistance after installation.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-semibold">Get a Fast Quote Today</h2>

          <p className="mt-2 text-sm opacity-90">
            We respond quickly with pricing and installation options.
          </p>

          <div className="mt-5">
            <GetQuoteButton service={serviceName} />
          </div>
        </div>

        {/* MAP PLACEHOLDER */}
        {/* REAL GOOGLE MAP */}
        <div className="bg-white border rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-2">Our Location</h3>

          <p className="text-sm text-gray-600 mb-4">
            Visit our office location on Google Maps
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
      </div>
    </section>
  );
}
