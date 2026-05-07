import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-XXXXXXXXXX");
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

export const trackLead = (service: string, source: string = "website") => {
  ReactGA.event({
    category: "Lead",
    action: "Form Submission",
    label: service,
  });
};
