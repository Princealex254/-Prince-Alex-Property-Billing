// ============================================================
// Email Service - Prince Alex Property Management
// Uses: https://payroll.princealexdigital.workers.dev/send-email
// ============================================================

const EMAIL_API_URL = 'https://payroll.princealexdigital.workers.dev/send-email';

/**
 * Send a customized email via the worker API
 * @param {Object} params
 * @param {string} params.toEmail - Recipient email address (required)
 * @param {string} params.subject - Email subject line (required)
 * @param {string} params.htmlContent - Full HTML content of the email (required)
 * @param {string} [params.toName] - Recipient display name (optional)
 * @param {string} [params.textContent] - Plain text backup content (optional)
 * @param {Array} [params.attachments] - Array of attachment objects (optional)
 * @returns {Promise<Object>} Response from the API
 */
async function sendEmail({ toEmail, subject, htmlContent, toName, textContent, attachments }) {
    if (!toEmail || !subject || !htmlContent) {
        throw new Error('Missing required fields: toEmail, subject, and htmlContent are required.');
    }

    const payload = {
        toEmail,
        subject,
        htmlContent,
        toName: toName || 'User',
        textContent: textContent || '',
        attachments: attachments || []
    };

    const response = await fetch(EMAIL_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorText = await response.text();
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Email API returned ${response.status}: ${errorData.error || errorText}`);
    }

    return await response.json();
}

/**
 * Send an admin invitation email
 * @param {string} adminEmail - The admin's email address
 * @param {string} adminName - The admin's display name
 * @param {string} ownerName - The property owner's name
 * @param {string} assignedProperties - Comma-separated list of assigned property names
 * @returns {Promise<Object>} Response from the API
 */
async function sendAdminInvitationEmail(adminEmail, adminName, ownerName, assignedProperties) {
    const subject = `You've been invited to manage properties on Prince Alex Property Management`;

    const htmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;padding:0;background-color:#F6F3EC;font-family:'Inter',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F6F3EC;padding:40px 20px;">
                <tr><td align="center">
                    <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(12,13,17,0.08);">
                        <!-- Header -->
                        <tr>
                            <td style="background:linear-gradient(135deg,#171920 0%,#0C0D11 100%);padding:36px 40px 28px;text-align:center;">
                                <div style="width:56px;height:56px;border-radius:50%;border:2px solid rgba(173,127,46,0.5);background:#171920;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;line-height:1;">
                                    <span style="font-family:'Fraunces',Georgia,serif;font-size:22px;font-weight:600;color:#D9B468;line-height:1;">PA</span>
                                </div>
                                <h1 style="margin:0;font-family:'Fraunces',Georgia,serif;font-size:26px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;">Prince Alex Property</h1>
                                <p style="margin:4px 0 0;font-size:12px;color:#9AA1AF;letter-spacing:2px;text-transform:uppercase;">Management System</p>
                            </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                            <td style="padding:40px;">
                                <h2 style="margin:0 0 8px;font-family:'Fraunces',Georgia,serif;font-size:22px;font-weight:600;color:#171920;">Welcome to the team</h2>
                                <p style="margin:0 0 24px;font-size:15px;color:#6B7280;line-height:1.6;">Hi ${adminName || 'there'},</p>
                                <p style="margin:0 0 16px;font-size:15px;color:#4B5563;line-height:1.6;">
                                    ${ownerName} has invited you to manage properties on 
                                    <strong style="color:#171920;">Prince Alex Property Management</strong>.
                                </p>
                                ${assignedProperties ? `
                                <div style="background:#FBF6EC;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid #E6CD93;">
                                    <p style="margin:0 0 8px;font-size:13px;color:#8C6526;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Your Assigned Properties</p>
                                    <p style="margin:0;font-size:16px;font-weight:600;color:#2C1F0E;">${assignedProperties}</p>
                                </div>` : ''}
                                <div style="background:#EFF6FF;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid #BFDBFE;">
                                    <p style="margin:0 0 12px;font-size:14px;color:#1E40AF;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Getting Started</p>
                                    <p style="margin:0 0 16px;font-size:15px;color:#4B5563;line-height:1.6;">
                                        To access your dashboard, follow these simple steps:
                                    </p>
                                    <ol style="margin:0;padding-left:20px;font-size:15px;color:#4B5563;line-height:1.8;">
                                        <li>Click the button below to visit the dashboard</li>
                                        <li>Click <strong>"Forgot password?"</strong> on the login page</li>
                                        <li>Enter your email address: <strong>${adminEmail}</strong></li>
                                        <li>Check your inbox for the password reset link</li>
                                        <li>Create a new password and sign in</li>
                                    </ol>
                                </div>
                                <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                                    <tr>
                                        <td style="background:linear-gradient(135deg,#8C6526,#C89C46);border-radius:12px;padding:14px 32px;text-align:center;">
                                            <a href="https://rentalbilling.princealex.digital/" 
                                               style="color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;display:inline-block;">
                                               Access Dashboard →
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <hr style="border:none;border-top:1px solid #E4E6EB;margin:24px 0;">
                                <p style="margin:0;font-size:13px;color:#9AA1AF;line-height:1.5;">
                                    If you did not expect this invitation, you can safely ignore this email.
                                </p>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #E4E6EB;">
                                <p style="margin:0;font-size:12px;color:#9AA1AF;">
                                    &copy; ${new Date().getFullYear()} Prince Alex Property Management &mdash; Nairobi, Kenya
                                </p>
                            </td>
                        </tr>
                    </table>
                </td></tr>
            </table>
        </body>
        </html>
    `;

    return await sendEmail({
        toEmail: adminEmail,
        toName: adminName || 'Admin',
        subject,
        htmlContent: htmlBody
    });
}

/**
 * Convert a File object to Base64 string
 * @param {File} file - The file to convert
 * @returns {Promise<string>} Base64 encoded string
 */
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = error => reject(error);
    });
}

/**
 * Send an email with attachments
 * @param {Object} params
 * @param {string} params.toEmail - Recipient email address (required)
 * @param {string} params.subject - Email subject line (required)
 * @param {string} params.htmlContent - Full HTML content of the email (required)
 * @param {string} [params.toName] - Recipient display name (optional)
 * @param {string} [params.textContent] - Plain text backup content (optional)
 * @param {File[]} [params.files] - Array of File objects to attach (optional)
 * @returns {Promise<Object>} Response from the API
 */
async function sendEmailWithAttachments({ toEmail, subject, htmlContent, toName, textContent, files }) {
    if (!toEmail || !subject || !htmlContent) {
        throw new Error('Missing required fields: toEmail, subject, and htmlContent are required.');
    }

    // Process attachments if files are provided
    let attachments = [];
    if (files && files.length > 0) {
        attachments = await Promise.all(
            files.map(async (file) => {
                const base64Content = await fileToBase64(file);
                return {
                    filename: file.name,
                    content: base64Content,
                    contentType: file.type,
                    size: file.size
                };
            })
        );
    }

    return await sendEmail({
        toEmail,
        subject,
        htmlContent,
        toName,
        textContent,
        attachments
    });
}
