import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Under Maintenance | Cinematic Systems",
  description:
    "We are currently performing scheduled maintenance. We'll be back shortly.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* LOGO */}
        <div className="flex justify-center mt-6 mb-4">
          <img
            src="/images/tranptech-logo.svg"
            alt="Cinematic Systems"
            className="w-40 h-40 object-contain"
          />
        </div>
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
        </div>

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Under Maintenance
        </h1>

        <p className="text-gray-400 text-base mb-2">
          We're currently performing scheduled maintenance to improve your
          experience.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          We'll be back online shortly. Thank you for your patience.
        </p>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-800 rounded-full h-1.5 mb-10">
          <div
            className="bg-blue-500 h-1.5 rounded-full animate-pulse"
            style={{ width: "70%" }}
          />
        </div>

        {/* CONTACT DURING MAINTENANCE */}
        <div className="bg-gray-800 rounded-2xl p-6 text-left space-y-4">
          <p className="text-gray-300 text-sm font-semibold text-center mb-4">
            Need urgent help? Contact us directly:
          </p>

          <a
            href="tel:+2659950493331"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <div className="w-9 h-9 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call us</p>
              <p className="text-sm font-medium">+265 995 049 331</p>
            </div>
          </a>

          <a
            href="mailto:kulinjipatricks@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <div className="w-9 h-9 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email us</p>
              <p className="text-sm font-medium">kulinjipatricks@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-9 h-9 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Working hours</p>
              <p className="text-sm font-medium">Mon – Fri: 8am – 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
