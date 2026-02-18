import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const DOCUMENT_CATEGORIES = [
  "estate-planning-trust",
  "business-corporate",
  "real-property-deeds",
  "probate-fiduciary",
  "litigation-affidavits",
  "other",
] as const;

const WITNESS_OPTIONS = ["no", "yes", "not-sure"] as const;

const firmIntakeSchema = z.object({
  firm_name: z.string().min(2, "Firm name is required"),
  contact_name: z.string().min(2, "Contact name is required"),
  contact_email: z.string().email("Valid email is required"),
  contact_phone: z.string().min(10, "Valid phone is required"),
  firm_address: z.string().optional(),
  client_name: z.string().min(2, "Client name is required"),
  document_category: z.enum(DOCUMENT_CATEGORIES),
  number_of_signers: z.coerce.number().min(1).max(10),
  witnesses_required: z.enum(WITNESS_OPTIONS),
  signing_location: z.string().min(2, "Signing location is required"),
  preferred_date: z.string().min(1, "Preferred date is required"),
  preferred_time: z.string().min(1, "Preferred time is required"),
  urgency: z.boolean().optional(),
  capacity_confirm: z.boolean().refine((v) => v === true, "You must confirm signer capacity."),
  special_instructions: z.string().optional(),
});

const documentCategoryLabels: Record<string, string> = {
  "estate-planning-trust": "Estate Planning & Trust Execution",
  "business-corporate": "Business & Corporate Transactions",
  "real-property-deeds": "Real Property & Deeds",
  "probate-fiduciary": "Probate & Fiduciary Matters",
  "litigation-affidavits": "Litigation & Affidavits",
  other: "Other",
};

const witnessLabels: Record<string, string> = {
  no: "No",
  yes: "Yes",
  "not-sure": "Not sure",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = firmIntakeSchema.parse(body);

    const fromEmail = "intake@precisionsigninggroup.com";
    const toEmail = "john.wilkes@precisionsigninggroup.com";

    const documentCategoryLabel = documentCategoryLabels[validatedData.document_category] ?? validatedData.document_category;
    const subjectPrefix = validatedData.urgency ? "[URGENT] " : "";
    const subject = `${subjectPrefix}PSG Firm Intake: ${documentCategoryLabel} — ${validatedData.client_name} — ${validatedData.preferred_date}`;

    const htmlContent = `
      <h2 style="color: #0f172a; font-size: 24px; margin-bottom: 20px;">Law Firm Intake Submission</h2>
      <p style="color: #64748b; margin-bottom: 20px;"><strong>lead_type:</strong> law_firm | <strong>source_page:</strong> /for-law-firms/intake</p>
      ${validatedData.urgency ? '<div style="background-color: #fef2f2; border: 2px solid #dc2626; padding: 12px; border-radius: 8px; margin-bottom: 20px;"><strong style="color: #dc2626;">URGENT REQUEST</strong></div>' : ""}

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 12px;">Firm Information</h3>
        <p><strong>Firm Name:</strong> ${validatedData.firm_name}</p>
        <p><strong>Contact Name:</strong> ${validatedData.contact_name}</p>
        <p><strong>Contact Email:</strong> ${validatedData.contact_email}</p>
        <p><strong>Contact Phone:</strong> ${validatedData.contact_phone}</p>
        ${validatedData.firm_address ? `<p><strong>Firm Address:</strong> ${validatedData.firm_address}</p>` : ""}
      </div>

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 12px;">Signing Details</h3>
        <p><strong>Client Name:</strong> ${validatedData.client_name}</p>
        <p><strong>Document Category:</strong> ${documentCategoryLabel}</p>
        <p><strong>Number of Signers:</strong> ${validatedData.number_of_signers}</p>
        <p><strong>Witnesses Required:</strong> ${witnessLabels[validatedData.witnesses_required]}</p>
        <p><strong>Signing Location:</strong> ${validatedData.signing_location}</p>
        <p><strong>Preferred Date:</strong> ${validatedData.preferred_date}</p>
        <p><strong>Preferred Time:</strong> ${validatedData.preferred_time}</p>
      </div>

      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 12px;">Compliance</h3>
        <p><strong>Capacity confirmed:</strong> Yes</p>
      </div>
      ${validatedData.special_instructions ? `
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 12px;">Special Instructions</h3>
        <p>${validatedData.special_instructions.replace(/\n/g, "<br>")}</p>
      </div>
      ` : ""}
    `.trim();

    const plainText = `
Law Firm Intake Submission
lead_type: law_firm | source_page: /for-law-firms/intake
${validatedData.urgency ? "*** URGENT REQUEST ***\n" : ""}

Firm Information:
- Firm Name: ${validatedData.firm_name}
- Contact Name: ${validatedData.contact_name}
- Contact Email: ${validatedData.contact_email}
- Contact Phone: ${validatedData.contact_phone}
${validatedData.firm_address ? `- Firm Address: ${validatedData.firm_address}\n` : ""}

Signing Details:
- Client Name: ${validatedData.client_name}
- Document Category: ${documentCategoryLabel}
- Number of Signers: ${validatedData.number_of_signers}
- Witnesses Required: ${witnessLabels[validatedData.witnesses_required]}
- Signing Location: ${validatedData.signing_location}
- Preferred Date: ${validatedData.preferred_date}
- Preferred Time: ${validatedData.preferred_time}

Compliance: Capacity confirmed: Yes
${validatedData.special_instructions ? `\nSpecial Instructions:\n${validatedData.special_instructions}\n` : ""}
    `.trim();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: validatedData.contact_email,
      subject,
      html: htmlContent,
      text: plainText,
    });

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Firm request submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
