import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import AnalyticsProvider from "./providers/AnalyticsProvider";
import { Toaster } from "sonner";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinematic Systems - Professional DSTV Installations & Maintenance",
  description:
    "Neat, Reliable, Reasonable & Professional DSTV installations, maintenance and home entertainment solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
