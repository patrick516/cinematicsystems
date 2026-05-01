const SibApiV3Sdk = require("sib-api-v3-sdk");
const fs = require("fs");

const sendQuotationEmail = async (quotation, pdfPath, pdfFilename) => {
  try {
    let defaultClient = SibApiV3Sdk.ApiClient.instance;

    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const pdfContent = fs.readFileSync(pdfPath).toString("base64");

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = `Quotation ${quotation.quotationNo} from Cinematic Systems`;

    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial;">
        <h2>Dear ${quotation.customerName},</h2>
        <p>Please find your quotation attached.</p>

        <p><strong>Quotation No:</strong> ${quotation.quotationNo}</p>
        <p><strong>Total:</strong> R${quotation.total.toLocaleString()}</p>
        <p><strong>Valid Until:</strong> ${new Date(
          quotation.validUntil,
        ).toLocaleDateString()}</p>

        <br/>
        <p>Regards,<br/>Cinematic Systems</p>
      </body>
      </html>
    `;

    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME,
      email: process.env.BREVO_SENDER_EMAIL,
    };

    sendSmtpEmail.to = [
      {
        email: quotation.customerEmail,
        name: quotation.customerName,
      },
    ];

    sendSmtpEmail.attachment = [
      {
        content: pdfContent,
        name: pdfFilename,
      },
    ];

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = { sendQuotationEmail };
