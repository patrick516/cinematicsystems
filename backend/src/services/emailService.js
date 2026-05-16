const SibApiV3Sdk = require("sib-api-v3-sdk");
const fs = require("fs");

// ── Helper: get configured Brevo API instance ──────────────────────────────────
const getApiInstance = () => {
  let defaultClient = SibApiV3Sdk.ApiClient.instance;
  let apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;
  return new SibApiV3Sdk.TransactionalEmailsApi();
};

// ── Existing: Send Quotation Email ─────────────────────────────────────────────
const sendQuotationEmail = async (quotation, pdfPath, pdfFilename) => {
  try {
    const apiInstance = getApiInstance();
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
        <p><strong>Valid Until:</strong> ${new Date(quotation.validUntil).toLocaleDateString()}</p>
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
      { email: quotation.customerEmail, name: quotation.customerName },
    ];
    sendSmtpEmail.attachment = [{ content: pdfContent, name: pdfFilename }];

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Quotation email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending quotation email:", error);
    throw error;
  }
};

// ── New: Send OTP / Password Reset Email ──────────────────────────────────────
const sendOtpEmail = async (email, name, otp) => {
  try {
    const apiInstance = getApiInstance();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = `Your Cinematic Systems Password Reset OTP`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#0b1e3d,#1d4ed8);padding:32px;text-align:center;">
                    <p style="margin:0;font-size:22px;font-weight:bold;color:#ffffff;letter-spacing:2px;">
                      CINEMATIC <span style="color:#93c5fd;">SYSTEMS</span>
                    </p>
                    <p style="margin:8px 0 0;font-size:12px;color:rgba(255,255,255,0.6);">
                      Neat, Reliable, Reasonable &amp; Professional
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px 36px;">
                    <p style="margin:0 0 8px;font-size:16px;color:#111827;font-weight:600;">
                      Hi ${name},
                    </p>
                    <p style="margin:0 0 28px;font-size:14px;color:#6b7280;line-height:1.6;">
                      We received a request to reset your password. Use the OTP below to proceed.
                      This code is valid for <strong>10 minutes</strong>.
                    </p>

                    <!-- OTP Box -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <div style="display:inline-block;background:#f0f5ff;border:2px dashed #3b82f6;border-radius:12px;padding:20px 40px;margin-bottom:28px;">
                            <p style="margin:0;font-size:11px;color:#6b7280;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">
                              Your OTP Code
                            </p>
                            <p style="margin:0;font-size:42px;font-weight:bold;letter-spacing:12px;color:#1d4ed8;">
                              ${otp}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:0 0 8px;font-size:13px;color:#9ca3af;line-height:1.6;">
                      If you did not request a password reset, you can safely ignore this email.
                      Your account remains secure.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f9fafb;padding:20px 36px;border-top:1px solid #f3f4f6;text-align:center;">
                    <p style="margin:0;font-size:11px;color:#d1d5db;">
                      © ${new Date().getFullYear()} Cinematic Systems. All Rights Reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME,
      email: process.env.BREVO_SENDER_EMAIL,
    };
    sendSmtpEmail.to = [{ email, name }];

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("OTP email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw error;
  }
};

module.exports = { sendQuotationEmail, sendOtpEmail };
