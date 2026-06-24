import type { Metadata } from "next";
import { AlertTriangle, Lock } from "lucide-react";
import ShutdownButton from "./ShutdownButton";

export const metadata: Metadata = {
  title: "Site Suspended | Official Developer Notice",
  description:
    "This website has been suspended by the contracted developer pending settlement of outstanding invoices.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* WARNING BADGE */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <Lock className="w-3 h-3" />
            Official Developer Notice
          </span>
        </div>

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-600/10 border border-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-9 h-9 text-red-400" />
          </div>
        </div>

        {/* HEADING */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 leading-snug">
          Access to This Website Has Been Suspended
        </h1>

        {/* MAIN NOTICE */}
        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-5 mb-4 text-center">
          <p className="text-red-300 text-sm leading-relaxed">
            This website has been temporarily suspended by the{" "}
            <span className="font-semibold text-red-200">
              contracted developer
            </span>{" "}
            pending the resolution of{" "}
            <span className="font-semibold text-red-200">
              outstanding invoices
            </span>{" "}
            related to professional web development services provided. The
            suspension is in accordance with the agreed terms of service and
            contractual obligations. Access will be restored upon settlement of
            the outstanding balance.
          </p>
        </div>

        {/* VISITOR MESSAGE */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-6">
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            If you are a{" "}
            <span className="text-white font-medium">visitor or customer</span>{" "}
            of this business, please be aware that this matter is between the
            site owner and their developer. We apologise for the inconvenience.
            Kindly reach out to the{" "}
            <span className="text-white font-medium">business owner</span>{" "}
            directly to have this resolved.
          </p>
        </div>

        {/* DIVIDER
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-800" />
          <p className="text-gray-600 text-xs uppercase tracking-widest whitespace-nowrap">
            Contracted Developer — Contact to Resolve
          </p>
          <div className="flex-1 h-px bg-gray-800" />
        </div> */}

        {/* CONTACT CARD */}
        {/* <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
          <p className="text-gray-400 text-xs text-center mb-2">
            The site owner may contact the developer at the details below to
            discuss payment and restoration of this website:
          </p>

          <a
            href="tel:+2659950493331"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
          >
            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call / WhatsApp</p>
              <p className="text-sm font-semibold">+265 995 049 331</p>
            </div>
          </a>

          <a
            href="mailto:kulinjipatricks@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
          >
            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-semibold">kulinjipatricks@gmail.com</p>
            </div>
          </a>
        </div> */}

        {/* FOOTER NOTE */}
        <p className="text-gray-600 text-xs text-center mt-4 leading-relaxed">
          Full access will be restored within 24 hours of payment confirmation.
          <br />
          This notice will be removed automatically upon resolution.
        </p>

        <ShutdownButton />
      </div>
    </div>
  );
}
