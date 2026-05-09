"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Props = { service: string };

function GetQuoteButtonInner({ service }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const safeService = service?.trim() || "General Inquiry";

    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmTerm = searchParams.get("utm_term");
    const utmContent = searchParams.get("utm_content");

    // Only set google_ads when real UTM params exist — organic visitors are NOT tagged
    const source = utmSource
      ? utmSource === "google" || utmSource === "google_ads"
        ? "google_ads"
        : utmSource
      : searchParams.get("source") || "";

    const params = new URLSearchParams();
    params.set("service", encodeURIComponent(safeService));
    if (source) params.set("source", source);
    if (utmSource) params.set("utm_source", utmSource);
    if (utmMedium) params.set("utm_medium", utmMedium);
    if (utmCampaign) params.set("utm_campaign", utmCampaign);
    if (utmTerm) params.set("utm_term", utmTerm);
    if (utmContent) params.set("utm_content", utmContent);

    router.push(`/contact?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition shadow-md hover:shadow-lg"
    >
      Get Quote
    </button>
  );
}

export default function GetQuoteButton({ service }: Props) {
  return (
    <Suspense
      fallback={
        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold text-sm opacity-80">
          Get Quote
        </button>
      }
    >
      <GetQuoteButtonInner service={service} />
    </Suspense>
  );
}
