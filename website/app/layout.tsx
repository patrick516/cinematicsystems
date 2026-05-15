import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
  // ─── BASIC ───────────────────────────────────────────────────────
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

  // ─── CANONICAL ───────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ─── OPEN GRAPH (WhatsApp, Facebook, LinkedIn preview) ───────────
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

  // ─── TWITTER CARD ────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Cinematic Systems | CCTV, DSTV & Home Entertainment Johannesburg",
    description:
      "Professional CCTV, DSTV, WiFi, home theatre and access control installation in Johannesburg and Pretoria.",
    images: ["/images/og-image.jpeg"],
  },

  // ─── ROBOTS ──────────────────────────────────────────────────────
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

  // ─── ICONS ───────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ─── VERIFICATION (add after submitting to Google Search Console) ─
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={font.className}>
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
