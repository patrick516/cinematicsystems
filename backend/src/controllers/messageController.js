const Message = require("../models/Message");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUnreadCount = async (req, res) => {
  try {
    const count = await Message.countDocuments({ status: "New" });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const markAsRead = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { status: "Read" },
      { new: true },
    );
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const replyToMessage = async (req, res) => {
  try {
    const { reply } = req.body;
    const message = await Message.findById(req.params.id);

    if (!message) return res.status(404).json({ message: "Message not found" });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: message.email,
      subject: `Re: ${message.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">Cinematic Systems</h2>
          <p>Dear ${message.name},</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Your message:</strong></p>
            <p>${message.message}</p>
          </div>
          <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Our response:</strong></p>
            <p>${reply}</p>
          </div>
          <p>Best regards,<br>Cinematic Systems Team</p>
        </div>
      `,
    });

    message.reply = reply;
    message.status = "Replied";
    message.repliedAt = new Date();
    await message.save();

    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMessage = async (req, res) => {
  try {
    // Auto-capture IP address
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";

    // Auto-capture user agent from server side (overrides client-sent value as source of truth)
    const userAgent = req.headers["user-agent"] || "";

    const message = await Message.create({
      // Basic customer info
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone || "",
      subject: req.body.subject,
      message: req.body.message,

      // Service context
      service: req.body.service || "",

      // Full UTM attribution (all 5 params)
      source: req.body.source || "direct",
      utm_source: req.body.utm_source || "",
      utm_medium: req.body.utm_medium || "",
      utm_campaign: req.body.utm_campaign || "",
      utm_term: req.body.utm_term || "",
      utm_content: req.body.utm_content || "",

      // Page context
      referrer: req.body.referrer || "",
      landing_page: req.body.landing_page || "",

      // Auto-captured server side
      ip_address: ip,
      user_agent: userAgent,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMessages,
  getUnreadCount,
  markAsRead,
  replyToMessage,
  createMessage,
};
