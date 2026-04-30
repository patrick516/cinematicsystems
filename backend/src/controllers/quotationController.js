const Quotation = require("../models/Quotation");
const Message = require("../models/Message");
const { generateQuotationPDF } = require("../services/pdfGenerator");
const { sendQuotationEmail } = require("../services/emailService");

const createQuotation = async (req, res) => {
  try {
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
    } = req.body;

    // Calculate totals
    let subtotal = 0;
    const calculatedItems = items.map((item) => {
      const total = item.quantity * item.price;
      subtotal += total;
      return { ...item, total };
    });

    const total = subtotal + (vat || 0) + (otherCharges || 0);

    const quotation = await Quotation.create({
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
    });

    // Generate PDF
    const { filePath, filename } = await generateQuotationPDF(quotation);

    // Send email with PDF using Brevo
    await sendQuotationEmail(quotation, filePath, filename);

    // Update the original message status
    if (messageId) {
      await Message.findByIdAndUpdate(messageId, {
        status: "Replied",
        reply: `Quotation ${quotation.quotationNo} sent with total R${total.toLocaleString()}`,
        repliedAt: new Date(),
      });
    }

    res.status(201).json({
      success: true,
      data: quotation,
      message: `Quotation ${quotation.quotationNo} sent successfully to ${customerEmail}`,
    });
  } catch (error) {
    console.error("Error creating quotation:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find().sort({ createdAt: -1 });
    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

module.exports = { createQuotation, getQuotations, getQuotationById };
