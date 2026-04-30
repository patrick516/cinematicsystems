const brevo = require("@getbrevo/brevo");

let apiInstance = null;

const initBrevo = () => {
  if (!apiInstance && process.env.BREVO_API_KEY) {
    apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY,
    );
  }
  return apiInstance;
};

const sendQuotationEmail = async (quotation, pdfPath, pdfFilename) => {
  try {
    initBrevo();

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .quote-details { background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>CINEMATIC SYSTEMS</h2>
            <p>Neat, Reliable, Reasonable & Professional</p>
          </div>
          <div class="content">
            <h3>Dear ${quotation.customerName},</h3>
            <p>Thank you for your inquiry. Please find attached your quotation.</p>
            <div class="quote-details">
              <p><strong>Quotation Number:</strong> ${quotation.quotationNo}</p>
              <p><strong>Total Amount:</strong> R${quotation.total.toLocaleString()}</p>
              <p><strong>Valid Until:</strong> ${new Date(quotation.validUntil).toLocaleDateString()}</p>
            </div>
            <p>For any questions, please don't hesitate to contact us.</p>
            <p>Best regards,<br>Cinematic Systems Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Cinematic Systems. All rights reserved.</p>
            <p>Email: info@cinematicsystems.co.za | Phone: +27 604 243 676</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `Quotation ${quotation.quotationNo} from Cinematic Systems`;
    sendSmtpEmail.htmlContent = emailHtml;
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME,
      email: process.env.BREVO_SENDER_EMAIL,
    };
    sendSmtpEmail.to = [
      { email: quotation.customerEmail, name: quotation.customerName },
    ];

    // Add attachment
    const fs = require("fs");
    const pdfContent = fs.readFileSync(pdfPath).toString("base64");
    sendSmtpEmail.attachment = [
      {
        content: pdfContent,
        name: pdfFilename,
        type: "application/pdf",
      },
    ];

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email via Brevo:", error);
    throw error;
  }
};

module.exports = { sendQuotationEmail };
