const Quotation = require("../models/Quotation");
const Message = require("../models/Message");
const { generateQuotationPDF } = require("../services/pdfGenerator");
const { sendQuotationEmail } = require("../services/emailService");
const path = require("path");
const fs = require("fs");

const buildQuotationData = (body) => {
  const {
    validUntil,
    customerId,
    customerName,
    customerEmail,
    customerPhone,
    projectDescription,
    items,
    vat,
    otherCharges,
    notes,
    messageId,
  } = body;

  let subtotal = 0;
  const calculatedItems = items.map((item) => {
    const total = item.quantity * item.price;
    subtotal += total;
    return { ...item, total };
  });
  const total = subtotal + (vat || 0) + (otherCharges || 0);

  return {
    quotationNo: `Q-${Date.now()}`,
    validUntil: new Date(validUntil),
    customerId,
    customerName,
    customerEmail,
    customerPhone,
    projectDescription,
    items: calculatedItems,
    subtotal,
    vat: vat || 0,
    otherCharges: otherCharges || 0,
    total,
    notes: notes || "",
    messageId,
  };
};

// ─── POST /quotations/preview ─────────────────────────────────────────────────
// Generates a PDF and returns it for download WITHOUT saving to DB or sending email
const previewQuotation = async (req, res) => {
  try {
    const data = buildQuotationData(req.body);

    // Build a temporary quotation-like object (not saved to DB)
    const tempQuotation = {
      ...data,
      quotationNo: `PREVIEW-${Date.now()}`,
      date: new Date(),
    };

    const { filePath, filename } = await generateQuotationPDF(tempQuotation);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    // Clean up temp file after sending
    fileStream.on("end", () => {
      fs.unlink(filePath, (err) => {
        if (err) console.error("Temp PDF cleanup error:", err);
      });
    });
  } catch (error) {
    console.error("Error generating preview PDF:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── POST /quotations ─────────────────────────────────────────────────────────
// Saves quotation, generates PDF, sends email
const createQuotation = async (req, res) => {
  try {
    const data = buildQuotationData(req.body);

    const quotation = await Quotation.create(data);

    // Generate PDF
    const { filePath, filename } = await generateQuotationPDF(quotation);

    // Send email with PDF attachment
    await sendQuotationEmail(quotation, filePath, filename);

    // Update original message status
    if (data.messageId) {
      await Message.findByIdAndUpdate(data.messageId, {
        status: "Replied",
        reply: `Quotation ${quotation.quotationNo} sent with total R${data.total.toLocaleString()}`,
        repliedAt: new Date(),
      });
    }

    res.status(201).json({
      success: true,
      data: quotation,
      message: `Quotation ${quotation.quotationNo} sent successfully to ${data.customerEmail}`,
    });
  } catch (error) {
    console.error("Error creating quotation:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── GET /quotations/:id/download ────────────────────────────────────────────
// Download PDF for an already-saved quotation
const downloadQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.findById(req.params.id);
    if (!quotation)
      return res.status(404).json({ message: "Quotation not found" });

    const { filePath, filename } = await generateQuotationPDF(quotation);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─── GET /quotations ──────────────────────────────────────────────────────────
const getQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find().sort({ createdAt: -1 });
    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─── GET /quotations/:id ──────────────────────────────────────────────────────
const getQuotationById = async (req, res) => {
  try {
    const quotation = await Quotation.findById(req.params.id);
    if (!quotation)
      return res.status(404).json({ message: "Quotation not found" });
    res.json(quotation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createQuotation,
  previewQuotation,
  downloadQuotation,
  getQuotations,
  getQuotationById,
};
