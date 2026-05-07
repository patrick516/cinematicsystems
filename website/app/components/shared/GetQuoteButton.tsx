"use client";

import { useRouter } from "next/navigation";

type Props = {
  service: string;
};

export default function GetQuoteButton({ service }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const safeService = service?.trim() || "General Inquiry";

    router.push(
      `/contact?service=${encodeURIComponent(safeService)}&source=google_ads`,
    );
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
