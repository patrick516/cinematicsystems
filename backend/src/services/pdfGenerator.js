const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ── Palette ──────────────────────────────────────────────────────────────────
const GREEN = "#2d7a4f";
const WHITE = "#ffffff";
const BLACK = "#111111";
const DARK_GRAY = "#333333";
const MID_GRAY = "#666666";
const BORDER = "#dddddd";

// ── Safe text helper — always resets font & color before drawing ──────────────
const t = (
  doc,
  x,
  y,
  text,
  opts = {},
  font = "Helvetica",
  size = 9,
  color = DARK_GRAY,
) => {
  doc
    .font(font)
    .fontSize(size)
    .fillColor(color)
    .text(String(text ?? ""), x, y, opts);
};

const generateQuotationPDF = async (quotation) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 0, size: "A4" });
      const filename = `quotation_${quotation.quotationNo}.pdf`;
      const filePath = path.join(__dirname, "../../uploads", filename);
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      const PW = 595.28; // A4 width
      const ML = 45; // left margin
      const MR = 45; // right margin
      const CW = PW - ML - MR; // content width = 505.28

      // ── CONTENT LEFT COLUMN (two-column sections) ──────────────────
      // All two-column sections (Terms, Project Desc) share:
      const COL1_W = 155; // left label column
      const COL2_X = ML + COL1_W; // right text column x  = 200
      const COL2_W = CW - COL1_W; // right text column w  = 350.28

      // ── LOGO GRAY BOX ──────────────────────────────────────────────
      const LOGO_BOX_W = 185;
      const LOGO_BOX_H = 155;
      doc.rect(0, 0, LOGO_BOX_W, LOGO_BOX_H).fill("#e0e0e0");
      const logoPath = path.join(__dirname, "../../uploads/logo.jpeg");
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 8, 8, { fit: [LOGO_BOX_W - 16, LOGO_BOX_H - 16] });
      }

      // ── QUOTATION NUMBER — top right (small, green, short) ─────────
      const rawNo = String(quotation.quotationNo);
      const shortNo = rawNo.startsWith("PREVIEW-")
        ? rawNo.slice(-6) // last 6 digits only
        : rawNo;
      t(
        doc,
        PW - MR - 60,
        20,
        shortNo,
        { width: 60, align: "right" },
        "Helvetica",
        9,
        GREEN,
      );

      // ── "QUOTATION" TITLE — well to the right of logo ─────────────
      const TITLE_X = LOGO_BOX_W + 40;
      t(
        doc,
        TITLE_X,
        72,
        "QUOTATION",
        { width: PW - TITLE_X - MR },
        "Helvetica-Bold",
        40,
        GREEN,
      );

      // ── META BLOCK ────────────────────────────────────────────────
      let y = LOGO_BOX_H + 22;

      const fmtDate = (d) =>
        new Date(d).toLocaleDateString("en-ZA", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

      // Row: bold label + dark value
      const metaRow = (label, value, rowY) => {
        // Label
        doc
          .font("Helvetica-Bold")
          .fontSize(9.5)
          .fillColor(BLACK)
          .text(label, ML, rowY, { continued: true, width: 260 });
        // Value (same line, continued)
        doc
          .font("Helvetica")
          .fontSize(9.5)
          .fillColor(DARK_GRAY)
          .text(String(value ?? ""));
      };

      metaRow("Quotation No: ", `#${quotation.quotationNo}`, y);
      // Customer name — right column same y
      t(
        doc,
        ML + 280,
        y,
        quotation.customerName || "",
        { width: CW - 280 },
        "Helvetica",
        9.5,
        DARK_GRAY,
      );

      y += 17;
      metaRow("Date: ", fmtDate(quotation.date || Date.now()), y);
      y += 17;
      metaRow("Valid Until: ", fmtDate(quotation.validUntil), y);
      y += 17;
      metaRow("Customer ID: ", String(quotation.customerId || "N/A"), y);

      // ── GREEN RULE ─────────────────────────────────────────────────
      y += 28;
      doc.rect(ML, y, CW, 1.5).fill(GREEN);

      // ── PROJECT DESCRIPTION ────────────────────────────────────────
      y += 16;
      t(
        doc,
        ML,
        y,
        "PROJECT DESCRIPTION",
        { width: COL1_W },
        "Helvetica-Bold",
        9.5,
        BLACK,
      );
      t(
        doc,
        COL2_X,
        y,
        quotation.projectDescription || "",
        { width: COL2_W },
        "Helvetica",
        9.5,
        DARK_GRAY,
      );

      // ── ITEMS TABLE ────────────────────────────────────────────────
      y += 50;

      const COL = {
        desc: { x: ML, w: 240 },
        qty: { x: ML + 240, w: 80 },
        price: { x: ML + 320, w: 95 },
        total: { x: ML + 415, w: CW - 415 }, // w ≈ 90
      };
      const TH_H = 28;
      const TR_H = 32;

      // Header row
      doc.rect(ML, y, CW, TH_H).fill(GREEN);
      const hY = y + 10;
      t(
        doc,
        COL.desc.x + 8,
        hY,
        "Description",
        { width: COL.desc.w - 8 },
        "Helvetica-Bold",
        9,
        WHITE,
      );
      t(
        doc,
        COL.qty.x + 2,
        hY,
        "Quantity",
        { width: COL.qty.w, align: "center" },
        "Helvetica-Bold",
        9,
        WHITE,
      );
      t(
        doc,
        COL.price.x + 2,
        hY,
        "Price",
        { width: COL.price.w, align: "center" },
        "Helvetica-Bold",
        9,
        WHITE,
      );
      t(
        doc,
        COL.total.x + 2,
        hY,
        "Total",
        { width: COL.total.w, align: "center" },
        "Helvetica-Bold",
        9,
        WHITE,
      );
      y += TH_H;

      // Body rows
      quotation.items.forEach((item, idx) => {
        if (y > 680) {
          doc.addPage();
          y = 50;
        }

        const descText = String(item.description || "");
        const charsLine = 38;
        const lines = Math.ceil(descText.length / charsLine);
        const rowH = lines > 1 ? TR_H + (lines - 1) * 11 : TR_H;

        // Row background
        doc.rect(ML, y, CW, rowH).fill(idx % 2 === 0 ? WHITE : "#fafafa");
        // Bottom border
        doc.rect(ML, y + rowH - 0.5, CW, 0.5).fill(BORDER);

        const midY = y + (rowH - 9) / 2;

        // Description — top aligned
        t(
          doc,
          COL.desc.x + 8,
          y + 10,
          descText,
          { width: COL.desc.w - 14 },
          "Helvetica",
          9,
          DARK_GRAY,
        );
        // Qty, Price, Total — vertically centred
        t(
          doc,
          COL.qty.x + 2,
          midY,
          String(item.quantity),
          { width: COL.qty.w, align: "center" },
          "Helvetica",
          9,
          DARK_GRAY,
        );
        t(
          doc,
          COL.price.x + 2,
          midY,
          `R${item.price.toLocaleString()}`,
          { width: COL.price.w, align: "center" },
          "Helvetica",
          9,
          DARK_GRAY,
        );
        t(
          doc,
          COL.total.x + 2,
          midY,
          `R${item.total.toLocaleString()}`,
          { width: COL.total.w, align: "center" },
          "Helvetica",
          9,
          DARK_GRAY,
        );

        y += rowH;
      });

      // ── TOTALS BLOCK ───────────────────────────────────────────────
      y += 20;

      // Right-aligned block — same right edge as table
      const TB_X = ML + 300; // block start x
      const TB_W = CW - 300; // block width ≈ 205
      const TL_W = 120; // label portion
      const TV_X = TB_X + TL_W; // value x
      const TV_W = TB_W - TL_W; // value width

      const totalRow = (label, value, highlight = false) => {
        if (highlight) {
          doc.rect(TB_X, y - 3, TB_W, 22).fill(GREEN);
          t(
            doc,
            TB_X + 6,
            y,
            label,
            { width: TL_W },
            "Helvetica-Bold",
            9.5,
            WHITE,
          );
          t(
            doc,
            TV_X,
            y,
            value,
            { width: TV_W, align: "right" },
            "Helvetica-Bold",
            9.5,
            WHITE,
          );
        } else {
          t(
            doc,
            TB_X + 6,
            y,
            label,
            { width: TL_W },
            "Helvetica",
            9,
            DARK_GRAY,
          );
          t(
            doc,
            TV_X,
            y,
            value,
            { width: TV_W, align: "right" },
            "Helvetica",
            9,
            DARK_GRAY,
          );
        }
        y += 19;
      };

      totalRow("Subtotal", `R${quotation.subtotal.toLocaleString()}`);
      totalRow(
        "Value-Added Tax",
        quotation.vat > 0 ? `R${quotation.vat.toLocaleString()}` : "0000",
      );
      totalRow(
        "Others",
        quotation.otherCharges > 0
          ? `R${quotation.otherCharges.toLocaleString()}`
          : "0000",
      );
      totalRow("Total", `R${quotation.total.toLocaleString()}`, true);

      // ── GREEN RULE ─────────────────────────────────────────────────
      y += 20;
      doc.rect(ML, y, CW, 1.5).fill(GREEN);

      // ── TERMS & CONDITIONS ─────────────────────────────────────────
      y += 16;
      t(
        doc,
        ML,
        y,
        "TERMS & CONDITIONS",
        { width: COL1_W },
        "Helvetica-Bold",
        9.5,
        BLACK,
      );
      t(
        doc,
        COL2_X,
        y,
        "Above information is not an invoice and only an estimate of goods/services. " +
          "Payment will be due prior to provision or delivery of goods/services.",
        { width: COL2_W },
        "Helvetica",
        9,
        MID_GRAY,
      );

      y += 55;
      t(
        doc,
        COL2_X - 45,
        y,
        "PLEASE CONFIRM YOUR ACCEPTANCE OF THIS QUOTE",
        { width: COL2_W, align: "center" },
        "Helvetica-Bold",
        9.5,
        BLACK,
      );

      y += 32;
      const SIG_AREA_W = COL2_W;
      const S1X = COL2_X;
      const S1W = Math.floor(SIG_AREA_W * 0.52);
      const S2X = COL2_X + Math.floor(SIG_AREA_W * 0.6);
      const S2W = Math.floor(SIG_AREA_W * 0.38);

      doc
        .moveTo(S1X, y)
        .lineTo(S1X + S1W, y)
        .strokeColor("#555555")
        .lineWidth(0.7)
        .stroke();
      doc
        .moveTo(S2X, y)
        .lineTo(S2X + S2W, y)
        .stroke();

      y += 10;
      t(
        doc,
        S1X,
        y,
        "Signature over printed name",
        { width: S1W, align: "center" },
        "Helvetica",
        8,
        MID_GRAY,
      );
      t(
        doc,
        S2X,
        y,
        "Date signed",
        { width: S2W, align: "center" },
        "Helvetica",
        8,
        MID_GRAY,
      );

      doc.end();
      stream.on("finish", () => resolve({ filePath, filename }));
      stream.on("error", reject);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { generateQuotationPDF };
