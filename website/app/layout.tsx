// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
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
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Toast notifications */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
