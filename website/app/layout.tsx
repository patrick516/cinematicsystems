import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Lock, AlertTriangle } from "lucide-react";
import "./globals.css";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import AnalyticsProvider from "./providers/AnalyticsProvider";
import { Toaster } from "sonner";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://www.cinematicsystems.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Cinematic Systems | CCTV, DSTV & Home Entertainment Johannesburg",
    template: "%s | Cinematic Systems",
  },
  description:
    "Professional CCTV installation, DSTV setup, WiFi networking, home theatre, access control and TV mounting services in Johannesburg and Pretoria. Certified installers. Same-day service. Free quote.",
  keywords: [
    "CCTV installation Johannesburg",
    "DSTV installation Pretoria",
    "home theatre installation Gauteng",
    "WiFi networking Johannesburg",
    "access control systems Johannesburg",
    "TV mounting Johannesburg",
    "security camera installation Gauteng",
    "Cinematic Systems",
    "DSTV installer near me",
    "CCTV installer near me",
    "home entertainment Johannesburg",
    "intercom installation Johannesburg",
    "projector installation Pretoria",
    "HiFi audio installation Gauteng",
  ],
  authors: [{ name: "Cinematic Systems", url: BASE_URL }],
  creator: "Cinematic Systems",
  publisher: "Cinematic Systems",
  category: "Home Services",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: BASE_URL,
    siteName: "Cinematic Systems",
    title: "Cinematic Systems | CCTV, DSTV & Home Entertainment Johannesburg",
    description:
      "Professional CCTV, DSTV, WiFi, home theatre and access control installation services in Johannesburg and Pretoria. Certified installers. Free quote.",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Cinematic Systems - Professional Installation Services in Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinematic Systems | CCTV, DSTV & Home Entertainment Johannesburg",
    description:
      "Professional CCTV, DSTV, WiFi, home theatre and access control installation in Johannesburg and Pretoria.",
    images: ["/images/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/icon1.png", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-icon.png" }],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If in maintenance mode, show maintenance page without Header/Footer
  if (isMaintenanceMode) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          {GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                  `,
                }}
              />
            </>
          )}
        </head>
        <body className={font.className} suppressHydrationWarning>
          <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
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
                  suspension is in accordance with the agreed terms of service
                  and contractual obligations. Access will be restored upon
                  settlement of the outstanding balance.
                </p>
              </div>

              {/* VISITOR MESSAGE */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-6">
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  If you are a{" "}
                  <span className="text-white font-medium">
                    visitor or customer
                  </span>{" "}
                  of this business, please be aware that this matter is between
                  the site owner and their developer. We apologise for the
                  inconvenience. Kindly reach out to the{" "}
                  <span className="text-white font-medium">business owner</span>{" "}
                  directly to have this resolved.
                </p>
              </div>

              {/* FOOTER NOTE */}
              <p className="text-gray-600 text-xs text-center mt-4 leading-relaxed">
                Full access will be restored within 24 hours of payment
                confirmation.
                <br />
                This notice will be removed automatically upon resolution.
              </p>
            </div>
          </main>
          <Toaster position="top-right" richColors />
        </body>
      </html>
    );
  }

  // Normal mode - show full app
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={font.className} suppressHydrationWarning>
        <AnalyticsProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AnalyticsProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
