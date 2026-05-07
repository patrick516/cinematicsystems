const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    // 👤 BASIC CUSTOMER INFO
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    // 🛠 SERVICE CONTEXT
    service: {
      type: String,
      default: "",
      trim: true,
    },

    // 📊 TRAFFIC / MARKETING ATTRIBUTION
    source: {
      type: String,
      default: "direct", // direct | google_ads | facebook | organic
      index: true,
    },

    utm_source: {
      type: String,
      default: "",
      index: true,
    },

    utm_medium: {
      type: String,
      default: "",
    },

    utm_campaign: {
      type: String,
      default: "",
      index: true,
    },

    utm_term: {
      type: String,
      default: "",
    },

    utm_content: {
      type: String,
      default: "",
    },

    // 🌍 TECHNICAL DATA
    ip_address: {
      type: String,
      default: "",
    },

    user_agent: {
      type: String,
      default: "",
    },

    referrer: {
      type: String,
      default: "",
    },

    landing_page: {
      type: String,
      default: "",
    },

    // 📩 MESSAGE STATUS FLOW
    status: {
      type: String,
      enum: ["New", "Read", "Replied"],
      default: "New",
      index: true,
    },

    reply: {
      type: String,
      default: "",
    },

    repliedAt: {
      type: Date,
    },
  },

  // 🕒 AUTO TIMESTAMPS (better than manual createdAt)
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Message", messageSchema);
