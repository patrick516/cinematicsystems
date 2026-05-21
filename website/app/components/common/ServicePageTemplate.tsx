import GalleryScroll from "@/app/components/common/GalleryScroll";
import GetQuoteButton from "@/app/components/shared/GetQuoteButton";
import { Phone } from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  description: string;
  serviceName: string;
  // Optional: unique content per service page
  benefits?: Benefit[];
  faqs?: FAQItem[];
  children?: React.ReactNode; // for any extra unique content
};

const DEFAULT_BENEFITS: Benefit[] = [
  {
    title: "Professional Installation",
    description: "Expert setup and configuration for long-term reliability.",
  },
  {
    title: "High Quality Systems",
    description: "Industry-standard equipment and proven solutions.",
  },
  {
    title: "Ongoing Support",
    description: "Maintenance and technical assistance after installation.",
  },
];

export default function ServicePageTemplate({
  title,
  description,
  serviceName,
  benefits = DEFAULT_BENEFITS,
  faqs,
  children,
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

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GetQuoteButton service={serviceName} />
            <a
              href="tel:+27604243676"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              <Phone className="w-4 h-4" />
              +27 604 243 676
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            ✓ Certified installers &nbsp;·&nbsp; ✓ Same-day service
            &nbsp;·&nbsp; ✓ Warranty included
          </p>
        </div>

        {/* SCROLLING PHOTO GALLERY — client component isolated here */}
        <GalleryScroll serviceName={serviceName} />

        {/* BENEFITS — unique per page via props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>

        {/* EXTRA UNIQUE CONTENT slot — pass children from page.tsx */}
        {children && <div className="mb-12">{children}</div>}

        {/* FAQ SECTION — renders only if faqs are provided */}
        {faqs && faqs.length > 0 && (
          <div className="mb-12">
            {/* Structured data for Google rich snippets */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  })),
                }),
              }}
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-semibold">Get a Fast Quote Today</h2>
          <p className="mt-2 text-sm opacity-90">
            We respond quickly with pricing and installation options.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GetQuoteButton service={serviceName} />
            <a
              href="tel:+27604243676"
              className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition"
            >
              <Phone className="w-4 h-4" />
              +27 604 243 676
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="bg-white border rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-2">Our Location</h3>
          <p className="text-sm text-gray-600 mb-4">
            Serving Johannesburg, Pretoria and surrounding Gauteng areas
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
