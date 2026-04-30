const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateQuotationPDF = async (quotation) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: "A4" });
      const filename = `quotation_${quotation.quotationNo}.pdf`;
      const filePath = path.join(__dirname, "../../uploads", filename);

      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      // Add Logo
      const logoPath = path.join(__dirname, "../../uploads/logo.jpeg");
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 50, 45, { width: 80 });
      }

      // Header
      doc
        .fontSize(24)
        .font("Helvetica-Bold")
        .fillColor("#1e3a8a")
        .text("QUOTATION", 400, 50, { align: "right" });

      doc
        .fontSize(10)
        .font("Helvetica")
        .fillColor("#666666")
        .text(`Quotation No: ${quotation.quotationNo}`, 400, 80, {
          align: "right",
        })
        .text(
          `Date: ${new Date(quotation.date).toLocaleDateString()}`,
          400,
          95,
          { align: "right" },
        )
        .text(
          `Valid Until: ${new Date(quotation.validUntil).toLocaleDateString()}`,
          400,
          110,
          { align: "right" },
        )
        .text(`Customer ID: ${quotation.customerId || "N/A"}`, 400, 125, {
          align: "right",
        });

      // Company Info
      doc
        .fontSize(12)
        .font("Helvetica-Bold")
        .fillColor("#000000")
        .text("CINEMATIC SYSTEMS", 50, 150)
        .fontSize(9)
        .font("Helvetica")
        .fillColor("#666666")
        .text("Neat, Reliable, Reasonable & Professional", 50, 165)
        .text("Email: info@cinematicsystems.co.za", 50, 178)
        .text("Phone: +27 604 243 676", 50, 191);

      // Customer Info
      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .fillColor("#000000")
        .text("BILL TO:", 50, 230)
        .fontSize(9)
        .font("Helvetica")
        .fillColor("#333333")
        .text(quotation.customerName, 50, 245)
        .text(quotation.customerEmail, 50, 258)
        .text(quotation.customerPhone, 50, 271);

      // Project Description
      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .fillColor("#000000")
        .text("PROJECT DESCRIPTION:", 50, 310)
        .fontSize(9)
        .font("Helvetica")
        .fillColor("#333333")
        .text(quotation.projectDescription, 50, 325, { width: 500 });

      // Table Header
      let y = 370;
      doc.rect(50, y, 500, 25).fill("#f0f0f0");
      doc
        .fillColor("#000000")
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("DESCRIPTION", 60, y + 8)
        .text("QTY", 300, y + 8)
        .text("PRICE", 370, y + 8)
        .text("TOTAL", 440, y + 8);

      // Table Rows
      y += 25;
      doc.fillColor("#333333").fontSize(9).font("Helvetica");

      quotation.items.forEach((item, index) => {
        if (y > 700) {
          doc.addPage();
          y = 50;
        }

        doc
          .text(item.description, 60, y + 5, { width: 230 })
          .text(item.quantity.toString(), 300, y + 5)
          .text(`R${item.price.toLocaleString()}`, 370, y + 5)
          .text(`R${item.total.toLocaleString()}`, 440, y + 5);

        y += 20;
      });

      // Totals
      y += 10;
      doc
        .fontSize(9)
        .font("Helvetica")
        .text("Subtotal:", 370, y)
        .text(`R${quotation.subtotal.toLocaleString()}`, 440, y);

      y += 15;
      doc
        .text("Value-Added Tax:", 370, y)
        .text(`R${quotation.vat.toLocaleString()}`, 440, y);

      y += 15;
      doc
        .text("Others:", 370, y)
        .text(`R${quotation.otherCharges.toLocaleString()}`, 440, y);

      y += 20;
      doc
        .font("Helvetica-Bold")
        .fillColor("#1e3a8a")
        .text("Total:", 370, y)
        .text(`R${quotation.total.toLocaleString()}`, 440, y);

      // Terms & Conditions
      y += 40;
      doc
        .fontSize(9)
        .font("Helvetica-Bold")
        .fillColor("#000000")
        .text("TERMS & CONDITIONS", 50, y);

      y += 15;
      doc
        .fontSize(8)
        .font("Helvetica")
        .fillColor("#666666")
        .text(
          "Above information is not an invoice and only an estimate of goods/services.",
          50,
          y,
        )
        .text(
          "Payment will be due prior to provision or delivery of goods/services.",
          50,
          y + 12,
        );

      // Signature Section
      y += 50;
      doc
        .fontSize(9)
        .font("Helvetica-Bold")
        .fillColor("#000000")
        .text("PLEASE CONFIRM YOUR ACCEPTANCE OF THIS QUOTE", 50, y, {
          align: "center",
        });

      y += 20;
      doc
        .fontSize(8)
        .font("Helvetica")
        .fillColor("#333333")
        .text("______________________", 150, y)
        .text("______________________", 400, y)
        .text("Signature over printed name", 150, y + 12)
        .text("Date signed", 400, y + 12);

      doc.end();

      stream.on("finish", () => {
        resolve({ filePath, filename });
      });

      stream.on("error", reject);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { generateQuotationPDF };
