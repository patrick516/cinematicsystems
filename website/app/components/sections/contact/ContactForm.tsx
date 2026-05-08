"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { trackContactForm } from "@/lib/analytics";

const ContactForm = () => {
  const searchParams = useSearchParams();

  // -------------------------
  // CAPTURE ALL URL PARAMS
  // -------------------------
  const serviceFromUrl = searchParams.get("service");
  const sourceFromUrl = searchParams.get("source");
  const utmSource = searchParams.get("utm_source");
  const utmMedium = searchParams.get("utm_medium");
  const utmCampaign = searchParams.get("utm_campaign");
  const utmTerm = searchParams.get("utm_term");
  const utmContent = searchParams.get("utm_content");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Pre-fill service from URL
  useEffect(() => {
    if (serviceFromUrl && !formData.service) {
      setFormData((prev) => ({
        ...prev,
        service: decodeURIComponent(serviceFromUrl),
      }));
    }
  }, [serviceFromUrl]);

  // -------------------------
  // AUTO-DETECT SOURCE FROM REFERRER
  // -------------------------
  const detectSource = (): string => {
    if (typeof document === "undefined") return "direct";
    const ref = document.referrer;
    if (!ref) return "direct";
    if (ref.includes("google")) return "organic";
    if (ref.includes("facebook") || ref.includes("fb.com")) return "facebook";
    if (ref.includes("instagram")) return "instagram";
    if (ref.includes("linkedin")) return "linkedin";
    return "referral";
  };

  // -------------------------
  // SUBMIT
  // -------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Priority: utm_source > source param > referrer detection > direct
    const resolvedSource =
      utmSource || sourceFromUrl || detectSource() || "direct";

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "",
      subject: `Service Request: ${formData.service || "General Inquiry"}`,
      message: formData.service
        ? `Service: ${formData.service}\n\n${formData.message}`
        : formData.message,
      service: formData.service || "",

      // Full UTM attribution
      source: resolvedSource,
      utm_source: utmSource || "",
      utm_medium: utmMedium || "",
      utm_campaign: utmCampaign || "",
      utm_term: utmTerm || "",
      utm_content: utmContent || "",

      // Page context
      referrer: typeof document !== "undefined" ? document.referrer : "",
      landing_page: typeof window !== "undefined" ? window.location.href : "",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        // Fire GA event on success
        trackContactForm({
          service: formData.service,
          source: resolvedSource,
        });

        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get back to you soon.",
        });

        const currentService = formData.service;
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: currentService,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Message</h3>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`mb-5 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          required
          disabled={submitting}
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          type="email"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          required
          disabled={submitting}
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          disabled={submitting}
        />

        {formData.service && (
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Selected Service</label>
            <input
              value={formData.service}
              readOnly
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-sm text-gray-700"
            />
          </div>
        )}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none text-sm"
          required
          disabled={submitting}
        />

        <button
          type="submit"
          disabled={!isFormValid || submitting}
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isFormValid && !submitting
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {submitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {!isFormValid && !submitting && (
          <p className="text-xs text-gray-400 text-center">
            Please fill in required fields to enable sending
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
