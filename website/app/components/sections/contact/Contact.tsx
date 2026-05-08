"use client";

import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM — Suspense required because ContactForm uses useSearchParams */}
          <Suspense fallback={<FormSkeleton />}>
            <ContactForm />
          </Suspense>

          {/* INFO PANEL */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-5 text-gray-900">
                Contact Info
              </h3>
              <div className="space-y-6 text-sm text-gray-600">
                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p>+27 604 243 676</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p>info@cinematicsystems.co.za</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Hours</p>
                    <p>Mon - Fri: 8am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-3xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-600">
                We usually respond within a few hours during working days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Shown while ContactForm hydrates on the client
const FormSkeleton = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 animate-pulse">
    <div className="h-6 bg-gray-100 rounded w-1/3 mb-6" />
    <div className="space-y-5">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-11 bg-gray-100 rounded-xl" />
      ))}
      <div className="h-32 bg-gray-100 rounded-xl" />
      <div className="h-12 bg-gray-100 rounded-xl" />
    </div>
  </div>
);

export default Contact;
