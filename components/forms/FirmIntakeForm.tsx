"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const DOCUMENT_CATEGORIES = [
  { value: "estate-planning-trust", label: "Estate Planning & Trust Execution" },
  { value: "business-corporate", label: "Business & Corporate Transactions" },
  { value: "real-property-deeds", label: "Real Property & Deeds" },
  { value: "probate-fiduciary", label: "Probate & Fiduciary Matters" },
  { value: "litigation-affidavits", label: "Litigation & Affidavits" },
  { value: "other", label: "Other" },
] as const;

const schema = z.object({
  firm_name: z.string().min(2, "Firm name is required"),
  contact_name: z.string().min(2, "Contact name is required"),
  contact_email: z.string().email("Valid email is required"),
  contact_phone: z.string().min(10, "Valid phone is required"),
  firm_address: z.string().optional(),
  client_name: z.string().min(2, "Client name is required"),
  document_category: z.string().min(1, "Please select a category"),
  number_of_signers: z.number().min(1).max(10),
  witnesses_required: z.enum(["no", "yes", "not-sure"]),
  signing_location: z.string().min(2, "Signing location is required"),
  preferred_date: z.string().min(1, "Preferred date is required"),
  preferred_time: z.string().min(1, "Preferred time is required"),
  urgency: z.boolean().optional(),
  capacity_confirm: z.boolean().refine((v) => v === true, "You must confirm signer capacity."),
  special_instructions: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function FirmIntakeForm() {
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      number_of_signers: 1,
      witnesses_required: "no",
      urgency: false,
      capacity_confirm: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/firm-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setSuccess(true);
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : "Submission failed. Please try again.");
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-neutral-dark mb-4">Request Received</h2>
        <p className="text-neutral leading-relaxed">
          We&apos;ll confirm availability and next steps shortly. For urgent requests, please call (425) 390-4713.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Section A: Firm Information */}
      <div>
        <h3 className="text-xl font-bold text-neutral-dark mb-4">Firm Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="firm_name" className="block text-sm font-semibold text-neutral-dark mb-1">
              Firm Name <span className="text-accent">*</span>
            </label>
            <input
              id="firm_name"
              {...register("firm_name")}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.firm_name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.firm_name && <p className="mt-1 text-sm text-red-600">{errors.firm_name.message}</p>}
          </div>
          <div>
            <label htmlFor="contact_name" className="block text-sm font-semibold text-neutral-dark mb-1">
              Contact Name <span className="text-accent">*</span>
            </label>
            <input
              id="contact_name"
              {...register("contact_name")}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.contact_name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.contact_name && <p className="mt-1 text-sm text-red-600">{errors.contact_name.message}</p>}
          </div>
          <div>
            <label htmlFor="contact_email" className="block text-sm font-semibold text-neutral-dark mb-1">
              Contact Email <span className="text-accent">*</span>
            </label>
            <input
              id="contact_email"
              type="email"
              {...register("contact_email")}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.contact_email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.contact_email && <p className="mt-1 text-sm text-red-600">{errors.contact_email.message}</p>}
          </div>
          <div>
            <label htmlFor="contact_phone" className="block text-sm font-semibold text-neutral-dark mb-1">
              Contact Phone <span className="text-accent">*</span>
            </label>
            <input
              id="contact_phone"
              type="tel"
              {...register("contact_phone")}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.contact_phone ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.contact_phone && <p className="mt-1 text-sm text-red-600">{errors.contact_phone.message}</p>}
          </div>
          <div>
            <label htmlFor="firm_address" className="block text-sm font-semibold text-neutral-dark mb-1">
              Firm Address
            </label>
            <input
              id="firm_address"
              {...register("firm_address")}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            />
          </div>
        </div>
      </div>

      {/* Section B: Signing Details */}
      <div>
        <h3 className="text-xl font-bold text-neutral-dark mb-4">Signing Details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="client_name" className="block text-sm font-semibold text-neutral-dark mb-1">
              Client Name <span className="text-accent">*</span>
            </label>
            <input
              id="client_name"
              {...register("client_name")}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.client_name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.client_name && <p className="mt-1 text-sm text-red-600">{errors.client_name.message}</p>}
          </div>
          <div>
            <label htmlFor="document_category" className="block text-sm font-semibold text-neutral-dark mb-1">
              Document Category <span className="text-accent">*</span>
            </label>
            <select
              id="document_category"
              {...register("document_category")}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.document_category ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select category</option>
              {DOCUMENT_CATEGORIES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.document_category && <p className="mt-1 text-sm text-red-600">{errors.document_category.message}</p>}
          </div>
          <div>
            <label htmlFor="number_of_signers" className="block text-sm font-semibold text-neutral-dark mb-1">
              Number of Signers <span className="text-accent">*</span>
            </label>
            <input
              id="number_of_signers"
              type="number"
              min={1}
              max={10}
              {...register("number_of_signers", { valueAsNumber: true })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.number_of_signers ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.number_of_signers && <p className="mt-1 text-sm text-red-600">{errors.number_of_signers.message}</p>}
          </div>
          <div>
            <label htmlFor="witnesses_required" className="block text-sm font-semibold text-neutral-dark mb-1">
              Witnesses Required
            </label>
            <select
              id="witnesses_required"
              {...register("witnesses_required")}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="signing_location" className="block text-sm font-semibold text-neutral-dark mb-1">
              Signing Location <span className="text-accent">*</span>
            </label>
            <input
              id="signing_location"
              {...register("signing_location")}
              placeholder="Address or facility name"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.signing_location ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.signing_location && <p className="mt-1 text-sm text-red-600">{errors.signing_location.message}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferred_date" className="block text-sm font-semibold text-neutral-dark mb-1">
                Preferred Date <span className="text-accent">*</span>
              </label>
              <input
                id="preferred_date"
                type="date"
                {...register("preferred_date")}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.preferred_date ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.preferred_date && <p className="mt-1 text-sm text-red-600">{errors.preferred_date.message}</p>}
            </div>
            <div>
              <label htmlFor="preferred_time" className="block text-sm font-semibold text-neutral-dark mb-1">
                Preferred Time <span className="text-accent">*</span>
              </label>
              <input
                id="preferred_time"
                {...register("preferred_time")}
                placeholder="e.g. 2pm or morning"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.preferred_time ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.preferred_time && <p className="mt-1 text-sm text-red-600">{errors.preferred_time.message}</p>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              id="urgency"
              type="checkbox"
              {...register("urgency")}
              className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="urgency" className="text-sm font-semibold text-neutral-dark">
              This is an urgent request
            </label>
          </div>
        </div>
      </div>

      {/* Section C: Compliance */}
      <div>
        <h3 className="text-xl font-bold text-neutral-dark mb-4">Compliance</h3>
        <div className="flex items-start gap-3">
          <input
            id="capacity_confirm"
            type="checkbox"
            {...register("capacity_confirm")}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <div>
            <label htmlFor="capacity_confirm" className="block text-sm font-semibold text-neutral-dark">
              Signer has capacity to execute documents <span className="text-accent">*</span>
            </label>
            <p className="text-sm text-neutral mt-1">If there are concerns, please note them in instructions.</p>
            {errors.capacity_confirm && <p className="mt-1 text-sm text-red-600">{errors.capacity_confirm.message}</p>}
          </div>
        </div>
      </div>

      {/* Section D: Special Instructions */}
      <div>
        <h3 className="text-xl font-bold text-neutral-dark mb-4">Special Instructions</h3>
        <textarea
          id="special_instructions"
          {...register("special_instructions")}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white resize-none"
          placeholder="Optional"
        />
      </div>

      {submitError && (
        <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200 text-red-800">
          <p className="font-semibold">{submitError}</p>
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary text-center ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Submitting..." : "Submit Firm Request"}
        </button>
      </div>
    </form>
  );
}
