declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// -------------------------
// PAGE VIEW
// -------------------------
export const trackPageView = (url: string) => {
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: url,
  });
};

// -------------------------
// EVENT TRACKING
// -------------------------
export const trackEvent = (eventName: string, params?: any) => {
  if (!window.gtag) return;

  window.gtag("event", eventName, params);
};
