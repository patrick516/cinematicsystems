"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { initGA, trackPageView } from "@/lib/analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initialized = useRef(false);

  // INIT GA ONLY ONCE
  useEffect(() => {
    if (!initialized.current) {
      initGA();
      initialized.current = true;
    }
  }, []);

  // TRACK ROUTE CHANGES
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return <>{children}</>;
}
