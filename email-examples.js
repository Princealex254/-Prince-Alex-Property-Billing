// ============================================================
// Email Usage Examples - Prince Alex Property Management
// ============================================================
// This file demonstrates how to use the email service functions
// ============================================================

/**
 * EXAMPLE 1: Send a Standard Email (No Attachments)
 * Use this for simple text or HTML emails
 */
async function exampleSendStandardEmail() {
    const url = "https://payroll.princealexdigital.workers.dev/send-email";
    
    const payload = {
        toEmail: "recipient@example.com",
        toName: "John Doe",                      // Optional
        subject: "Monthly Payroll Update",
        htmlContent: "<h1>Hello John</h1><p>Your statement is ready.</p>", 
        textContent: "Hello John, Your statement is ready." // Optional backup
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (response.ok) {
            console.log("Email sent successfully:", result.messageId);
        } else {
            console.error("Backend Error:", result.error, result.details);
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}

/**
 * EXAMPLE 2: Send Email with Attachments
 * Use this when you need to send files (PDFs, images, etc.)
 */
async function exampleSendEmailWithAttachments() {
    // Example: Send a bill/receipt as a PDF attachment
    const fileInput = document.getElementById('fileInput'); // Get file from input
    const files = fileInput.files; // Array of File objects
    
    try {
        const result = await sendEmailWithAttachments({
            toEmail: "tenant@example.com",
            toName: "Jane Smith",
            subject: "Your Monthly Rent Receipt",
            htmlContent: `
                <h1>Dear Jane,</h1>
                <p>Please find your rent receipt attached for this month.</p>
                <p>Amount: KES 25,000</p>
                <p>Thank you for your payment!</p>
            `,
            textContent: "Dear Jane, Please find your rent receipt attached for this month. Amount: KES 25,000. Thank you!",
            files: files // Array of File objects from file input
        });
        
        console.log("Email with attachments sent:", result.messageId);
        showNotification("Receipt sent successfully!", "success");
    } catch (error) {
        console.error("Failed to send email:", error);
        showNotification("Failed to send receipt: " + error.message, "error");
    }
}

/**
 * EXAMPLE 3: Using the sendEmail function directly
 * For custom email content
 */
async function exampleCustomEmail() {
    try {
        const result = await sendEmail({
            toEmail: "admin@example.com",
            toName: "Property Manager",
            subject: "New Maintenance Request",
            htmlContent: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #8C6526;">New Maintenance Request</h2>
                    <p>A new maintenance request has been submitted:</p>
                    <ul>
                        <li><strong>Property:</strong> Apollo Heights</li>
                        <li><strong>Unit:</strong> A1</li>
                        <li><strong>Issue:</strong> Plumbing leak</li>
                        <li><strong>Priority:</strong> High</li>
                    </ul>
                    <p>Please review and assign a technician.</p>
                </div>
            `,
            textContent: "New maintenance request submitted for Apollo Heights, Unit A1 - Plumbing leak (High priority)",
            attachments: [] // Empty array or omit entirely
        });
        
        console.log("Custom email sent:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

/**
 * EXAMPLE 4: HTML Form to send email with file attachment
 * Complete working example with file input
 */
function setupEmailFormWithAttachment() {
    // Create a simple form
    const formHTML = `
        <form id="emailWithAttachmentForm" class="space-y-4">
            <div>
                <label for="recipientEmail">Recipient Email</label>
                <input type="email" id="recipientEmail" required placeholder="tenant@example.com">
            </div>
            <div>
                <label for="emailSubject">Subject</label>
                <input type="text" id="emailSubject" required placeholder="Monthly Receipt">
            </div>
            <div>
                <label for="fileInput">Attach File</label>
                <input type="file" id="fileInput" accept=".pdf,.jpg,.jpeg,.png">
            </div>
            <button type="submit" class="bg-brass-600 text-white px-6 py-3 rounded-xl">
                Send Email
            </button>
        </form>
    `;
    
    // Add form to page
    document.getElementById('emailSection').innerHTML = formHTML;
    
    // Handle form submission
    document.getElementById('emailWithAttachmentForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const toEmail = document.getElementById('recipientEmail').value;
        const subject = document.getElementById('emailSubject').value;
        const fileInput = document.getElementById('fileInput');
        const files = fileInput.files;
        
        try {
            const result = await sendEmailWithAttachments({
                toEmail,
                subject,
                htmlContent: `<p>Please find the attached document.</p>`,
                files: files
            });
            
            showNotification("Email sent successfully!", "success");
            e.target.reset();
        } catch (error) {
            showNotification("Failed to send: " + error.message, "error");
        }
    });
}

/**
 * EXAMPLE 5: Send multiple attachments
 */
async function exampleMultipleAttachments() {
    const files = [
        document.getElementById('pdfFile').files[0],  // Receipt PDF
        document.getElementById('imageFile').files[0]  // Property image
    ];
    
    try {
        const result = await sendEmailWithAttachments({
            toEmail: "tenant@example.com",
            toName: "John Doe",
            subject: "Your Rental Documents",
            htmlContent: `
                <h1>Hello John,</h1>
                <p>Please find your rental documents attached:</p>
                <ul>
                    <li>Rent Receipt (PDF)</li>
                    <li>Property Photos</li>
                </ul>
            `,
            files: files
        });
        
        console.log("Email with multiple attachments sent:", result.messageId);
    } catch (error) {
        console.error("Error:", error);
    }
}

// ============================================================
// BACKEND API PAYLOAD STRUCTURE REFERENCE
// ============================================================
/*
Standard Email Payload (No Attachments):
{
    "toEmail": "recipient@example.com",      // Required
    "toName": "John Doe",                     // Optional
    "subject": "Email Subject",               // Required
    "htmlContent": "<h1>HTML content</h1>",   // Required
    "textContent": "Plain text backup",       // Optional
    "attachments": []                         // Optional (empty array or omit)
}

Email with Attachments Payload:
{
    "toEmail": "recipient@example.com",      // Required
    "toName": "John Doe",                     // Optional
    "subject": "Email Subject",               // Required
    "htmlContent": "<h1>HTML content</h1>",   // Required
    "textContent": "Plain text backup",       // Optional
    "attachments": [                          // Required when sending files
        {
            "filename": "document.pdf",
            "content": "base64_encoded_content_here",
            "contentType": "application/pdf",
            "size": 102400
        }
    ]
}

Attachment Object Structure:
{
    filename: string,        // Name of the file
    content: string,         // Base64 encoded file content (no data URL prefix)
    contentType: string,     // MIME type (e.g., "application/pdf", "image/jpeg")
    size: number            // File size in bytes
}

Success Response:
{
    "success": true,
    "messageId": "unique-message-id",
    "message": "Email sent successfully"
}

Error Response:
{
    "success": false,
    "error": "Error description",
    "details": "Additional error details"
}
*/