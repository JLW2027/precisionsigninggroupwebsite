import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Initialize Resend (will use env variable RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema (matches client-side schema)
const formSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  serviceType: z.enum(["general-notary", "loan-signing", "custom", "unknown"]),
  generalNotaryService: z.string().optional(),
  loanSigningService: z.string().optional(),
  customServiceInfo: z.string().optional(),
  unknownServiceInfo: z.string().optional(),
  hasAllDocuments: z.enum(["yes", "no-print", "other"]),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  location: z.string().min(2),
  numberOfDocuments: z.string().optional(),
  additionalDetails: z.string().optional(),
});

// Helper function to format service type for display
function formatServiceType(serviceType: string): string {
  const serviceMap: Record<string, string> = {
    "general-notary": "General Notary Services",
    "loan-signing": "Loan Signing Service",
    custom: "Custom Service",
    unknown: "I Don't Know",
  };
  return serviceMap[serviceType] || serviceType;
}

// Helper function to format document option
function formatDocumentOption(option: string): string {
  const optionMap: Record<string, string> = {
    yes: "Yes, I Will Have All Documents",
    "no-print": "No I Need You to Print Documents and Bring With You",
    other: "Other",
  };
  return optionMap[option] || option;
}

// Helper function to format general notary service
function formatGeneralNotaryService(service: string): string {
  const serviceMap: Record<string, string> = {
    acknowledgement: "Acknowledgement",
    "oath-acknowledgement": "Oath and/or Acknowledgement",
    "verification-oath": "Verification upon Oath and/or Acknowledgement",
    "copy-certification": "Copy Certification",
    "signature-witnessing": "Signature Witnessing",
    "event-act-witnessing": "Event / Act Witnessing",
  };
  return serviceMap[service] || service;
}

// Helper function to format loan signing service
function formatLoanSigningService(service: string): string {
  const serviceMap: Record<string, string> = {
    "full-purchase": "Full Purchase Package",
    "buyers-package": "Buyer's Package",
    "sellers-package": "Seller's Package",
    heloc: "HELOC",
    refinance: "Refinance",
  };
  return serviceMap[service] || service;
}

export async function POST(request: NextRequest) {
  console.log("CONTACT FORM HIT");
  console.log("ENV RESEND_API_KEY exists:", Boolean(process.env.RESEND_API_KEY));
  try {
    const body = await request.json();

    // Validate form data
    const validatedData = formSchema.parse(body);

    // Build email content
    let emailContent = `
      <h2 style="color: #0f172a; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 15px;">Contact Information</h3>
        <p><strong>Full Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Location:</strong> ${validatedData.location}</p>
      </div>

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 15px;">Service Details</h3>
        <p><strong>Type of Service:</strong> ${formatServiceType(validatedData.serviceType)}</p>
    `;

    // Add conditional service-specific information
    if (validatedData.serviceType === "general-notary" && validatedData.generalNotaryService) {
      emailContent += `<p><strong>General Notary Service:</strong> ${formatGeneralNotaryService(validatedData.generalNotaryService)}</p>`;
    }

    if (validatedData.serviceType === "loan-signing" && validatedData.loanSigningService) {
      emailContent += `<p><strong>Loan Signing Service:</strong> ${formatLoanSigningService(validatedData.loanSigningService)}</p>`;
    }

    if (validatedData.serviceType === "custom" && validatedData.customServiceInfo) {
      emailContent += `<p><strong>Custom Service Details:</strong><br>${validatedData.customServiceInfo.replace(/\n/g, "<br>")}</p>`;
    }

    if (validatedData.serviceType === "unknown" && validatedData.unknownServiceInfo) {
      emailContent += `<p><strong>Additional Information:</strong><br>${validatedData.unknownServiceInfo.replace(/\n/g, "<br>")}</p>`;
    }

    emailContent += `
        <p><strong>Will You Have All Documents:</strong> ${formatDocumentOption(validatedData.hasAllDocuments)}</p>
      </div>

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 15px;">Appointment Preferences</h3>
    `;

    if (validatedData.preferredDate) {
      emailContent += `<p><strong>Preferred Date:</strong> ${validatedData.preferredDate}</p>`;
    }

    if (validatedData.preferredTime) {
      emailContent += `<p><strong>Preferred Time:</strong> ${validatedData.preferredTime}</p>`;
    }

    if (validatedData.numberOfDocuments) {
      emailContent += `<p><strong>Number of Documents:</strong> ${validatedData.numberOfDocuments}</p>`;
    }

    emailContent += `</div>`;

    if (validatedData.additionalDetails) {
      emailContent += `
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 15px;">Additional Details</h3>
          <p>${validatedData.additionalDetails.replace(/\n/g, "<br>")}</p>
        </div>
      `;
    }

    // Plain text version for email clients that don't support HTML
    const plainTextContent = `
New Contact Form Submission

Contact Information:
- Full Name: ${validatedData.fullName}
- Phone: ${validatedData.phone}
- Email: ${validatedData.email}
- Location: ${validatedData.location}

Service Details:
- Type of Service: ${formatServiceType(validatedData.serviceType)}
${validatedData.serviceType === "general-notary" && validatedData.generalNotaryService ? `- General Notary Service: ${formatGeneralNotaryService(validatedData.generalNotaryService)}\n` : ""}
${validatedData.serviceType === "loan-signing" && validatedData.loanSigningService ? `- Loan Signing Service: ${formatLoanSigningService(validatedData.loanSigningService)}\n` : ""}
${validatedData.serviceType === "custom" && validatedData.customServiceInfo ? `- Custom Service Details: ${validatedData.customServiceInfo}\n` : ""}
${validatedData.serviceType === "unknown" && validatedData.unknownServiceInfo ? `- Additional Information: ${validatedData.unknownServiceInfo}\n` : ""}
- Will You Have All Documents: ${formatDocumentOption(validatedData.hasAllDocuments)}

Appointment Preferences:
${validatedData.preferredDate ? `- Preferred Date: ${validatedData.preferredDate}\n` : ""}
${validatedData.preferredTime ? `- Preferred Time: ${validatedData.preferredTime}\n` : ""}
${validatedData.numberOfDocuments ? `- Number of Documents: ${validatedData.numberOfDocuments}\n` : ""}

${validatedData.additionalDetails ? `Additional Details:\n${validatedData.additionalDetails}\n` : ""}
    `.trim();

    // Send email using Resend
    // Note: RESEND_API_KEY and FROM_EMAIL need to be set in environment variables
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_EMAIL || "john.wilkes@precisionsigninggroup.com";

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY on server");
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }
console.log("Attempting to send email via Resend");
console.log("FROM:", fromEmail);
console.log("TO:", toEmail);

const emailResult = await resend.emails.send({
  from: fromEmail,
  to: [toEmail], // must be an array
  replyTo: validatedData.email,
  subject: `New Contact Form Submission - ${formatServiceType(validatedData.serviceType)}`,
  html: emailContent,
  text: plainTextContent,
});

console.log("RESEND RESULT:", emailResult);

if (emailResult.error) {
  console.error("RESEND ERROR:", emailResult.error);
  return NextResponse.json(
    { success: false, error: emailResult.error },
    { status: 500 }
  );
}

return NextResponse.json(
  {
    success: true,
    message: "Form submitted successfully",
    emailId: emailResult.data?.id ?? null,
    data: validatedData,
  },
  { status: 200 }
);
  } catch (error) {
    console.error("Form submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process form submission",
      },
      { status: 500 }
    );
  }
}

