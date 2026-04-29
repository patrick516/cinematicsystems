"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SIMPLE FORM VALIDATION (no logic change, only UI state)
  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <section id="contact" className=" bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
                required
              />

              {/* Email */}
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
                required
              />

              {/* Phone */}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none text-sm"
                required
              />

              {/* BUTTON (INTERACTIVE STATE) */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isFormValid
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

              {/* subtle hint */}
              {!isFormValid && (
                <p className="text-xs text-gray-400 text-center">
                  Please fill in required fields to enable sending
                </p>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-5 text-gray-900">
                Contact Info
              </h3>

              <div className="space-y-6 text-sm text-gray-600">
                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p>+27 123 456 789</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p>info@cinematicsystems.co.za</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Hours</p>
                    <p>Mon - Fri: 8am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXTRA CARD */}
            <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-3xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-600">
                We usually respond within a few hours during working days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
