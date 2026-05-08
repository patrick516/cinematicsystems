declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// -------------------------
// INIT (called once on app load)
// -------------------------
export const initGA = () => {
  if (!GA_ID) {
    console.warn("GA_ID not set — analytics disabled");
    return;
  }

  // gtag script is already injected in layout.tsx <head>
  // This just ensures gtag is configured and ready
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_ID, {
      send_page_view: false, // we send manually via trackPageView
    });
  }
};

// -------------------------
// PAGE VIEW
// -------------------------
export const trackPageView = (url: string) => {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;

  window.gtag("event", "page_view", {
    page_path: url,
    send_to: GA_ID,
  });
};

// -------------------------
// GENERIC EVENT
// -------------------------
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, params);
};

// -------------------------
// CONTACT FORM SUBMITTED
// -------------------------
export const trackContactForm = (params: {
  service?: string;
  source?: string;
}) => {
  trackEvent("contact_form_submit", {
    event_category: "Lead",
    event_label: params.service || "General Inquiry",
    traffic_source: params.source || "direct",
  });
};

// -------------------------
// SERVICE PAGE VIEW
// -------------------------
export const trackServiceView = (serviceName: string) => {
  trackEvent("service_page_view", {
    event_category: "Engagement",
    event_label: serviceName,
  });
};

// -------------------------
// GET QUOTE CLICK
// -------------------------
export const trackGetQuote = (serviceName: string) => {
  trackEvent("get_quote_click", {
    event_category: "Lead",
    event_label: serviceName,
  });
};
