"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const SERVICE_TYPES = ["general-notary", "business-documentation", "estate-planning", "attorney-law-firm", "custom", "unknown"] as const;
const HAS_DOCS = ["yes", "no-print", "other"] as const;
// Form validation schema with conditional validation
const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address"),

    serviceType: z
      .enum(SERVICE_TYPES)
      .or(z.literal(""))
      .refine((v) => v !== "", { message: "Please select a service type" }),

    generalNotaryService: z.string().optional(),
    businessDocumentationService: z.string().optional(),
    estatePlanningService: z.string().optional(),
    attorneyLawFirmService: z.string().optional(),
    customServiceInfo: z.string().optional(),
    unknownServiceInfo: z.string().optional(),

    hasAllDocuments: z
      .enum(HAS_DOCS)
      .or(z.literal(""))
      .refine((v) => v !== "", { message: "Please select an option" }),

    preferredDate: z.string().optional(),
    preferredTime: z.string().optional(),
    location: z.string().min(2, "Please enter your location/city"),
    numberOfDocuments: z.string().optional(),
    additionalDetails: z.string().optional(),
    urgentRequest: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.serviceType === "general-notary") {
        return !!data.generalNotaryService && data.generalNotaryService.length > 0;
      }
      return true;
    },
    {
      message: "Please select a general notary service",
      path: ["generalNotaryService"],
    }
  )
  .refine(
    (data) => {
      if (data.serviceType === "business-documentation") {
        return !!data.businessDocumentationService && data.businessDocumentationService.length > 0;
      }
      return true;
    },
    {
      message: "Please select a business documentation service",
      path: ["businessDocumentationService"],
    }
  )
  .refine(
    (data) => {
      if (data.serviceType === "estate-planning") {
        return !!data.estatePlanningService && data.estatePlanningService.length > 0;
      }
      return true;
    },
    {
      message: "Please select an estate planning service",
      path: ["estatePlanningService"],
    }
  )
  .refine(
    (data) => {
      if (data.serviceType === "attorney-law-firm") {
        return !!data.attorneyLawFirmService && data.attorneyLawFirmService.length > 0;
      }
      return true;
    },
    {
      message: "Please select an attorney or law firm service",
      path: ["attorneyLawFirmService"],
    }
  )
  .refine(
    (data) => {
      if (data.serviceType === "unknown") {
        return !!data.unknownServiceInfo && data.unknownServiceInfo.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please provide information to help us assist you",
      path: ["unknownServiceInfo"],
    }
  );

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your form has been submitted successfully. We'll contact you shortly.",
        });
        reset();
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "There was an error submitting your form. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-dark mb-2">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            errors.fullName ? "border-red-500" : "border-gray-300 focus:border-primary"
          }`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            errors.phone ? "border-red-500" : "border-gray-300 focus:border-primary"
          }`}
          placeholder="(425) 555-1234"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            errors.email ? "border-red-500" : "border-gray-300 focus:border-primary"
          }`}
          placeholder="john.doe@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Type of Service Needed */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold text-neutral-dark mb-2">
          Type of Service Needed <span className="text-accent">*</span>
        </label>
        <select
          id="serviceType"
          {...register("serviceType")}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
            errors.serviceType ? "border-red-500" : "border-gray-300 focus:border-primary"
          }`}
        >
          <option value="">Select a service type</option>
          <option value="business-documentation">Business Document Execution</option>
          <option value="estate-planning">Estate Document Execution</option>
          <option value="attorney-law-firm">Law Firm & Professional Office Support</option>
          <option value="general-notary">General Notary Services</option>
          <option value="custom">Custom Service</option>
          <option value="unknown">I Don&apos;t Know</option>
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Conditional: General Notary Service */}
      {serviceType === "general-notary" && (
        <div className="animate-fade-in">
          <label htmlFor="generalNotaryService" className="block text-sm font-semibold text-neutral-dark mb-2">
            General Notary Service Needed <span className="text-accent">*</span>
          </label>
          <select
            id="generalNotaryService"
            {...register("generalNotaryService")}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
              errors.generalNotaryService ? "border-red-500" : "border-gray-300 focus:border-primary"
            }`}
          >
            <option value="">Select a service</option>
            <option value="acknowledgements">Acknowledgements</option>
            <option value="oaths-affirmations-jurats">Oaths & Affirmations (Jurats)</option>
            <option value="signature-witnessing">Signature Witnessing</option>
            <option value="copy-certification">Copy Certification</option>
            <option value="event-act-witnessing">Event / Act Witnessing</option>
            <option value="fingerprinting-services">Fingerprinting Services</option>
            <option value="i9-verification">i9 Verification</option>
            <option value="apostille-services">Apostille Services</option>
            <option value="loan-signing-services">Loan Signing Services</option>
            <option value="mobile-after-hours-notary">Mobile & After-Hours Notary</option>
          </select>
          {errors.generalNotaryService && (
            <p className="mt-1 text-sm text-red-600">{errors.generalNotaryService.message}</p>
          )}
        </div>
      )}

      {/* Conditional: Business Document Execution */}
      {serviceType === "business-documentation" && (
        <div className="animate-fade-in">
          <label htmlFor="businessDocumentationService" className="block text-sm font-semibold text-neutral-dark mb-2">
            Business Document Execution <span className="text-accent">*</span>
          </label>
          <select
            id="businessDocumentationService"
            {...register("businessDocumentationService")}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
              errors.businessDocumentationService ? "border-red-500" : "border-gray-300 focus:border-primary"
            }`}
          >
            <option value="">Select a service</option>
            <option value="corporate-resolutions-bylaws">Corporate Resolutions & Bylaws</option>
            <option value="operating-agreements-llc-amendments">Operating Agreements & LLC Amendments</option>
            <option value="buy-sell-agreements">Buy-Sell Agreements</option>
            <option value="stock-shareholder-documents">Stock & Shareholder Documents</option>
            <option value="assignment-of-interest">Assignment of Interest (LLC / Partnership)</option>
            <option value="commercial-lease-documents">Commercial Lease Documents</option>
            <option value="sba-business-loan-documents">SBA & Business Loan Documents</option>
            <option value="affidavits-verification">Affidavits & Verification</option>
            <option value="other-business-documents">Other Business Documents</option>
          </select>
          {errors.businessDocumentationService && (
            <p className="mt-1 text-sm text-red-600">{errors.businessDocumentationService.message}</p>
          )}
        </div>
      )}

      {/* Conditional: Estate Documentation Execution */}
      {serviceType === "estate-planning" && (
        <div className="animate-fade-in">
          <label htmlFor="estatePlanningService" className="block text-sm font-semibold text-neutral-dark mb-2">
            Estate Document Execution <span className="text-accent">*</span>
          </label>
          <select
            id="estatePlanningService"
            {...register("estatePlanningService")}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
              errors.estatePlanningService ? "border-red-500" : "border-gray-300 focus:border-primary"
            }`}
          >
            <option value="">Select a service</option>
            <option value="wills-self-proving-affidavits">Wills & Self-Proving Affidavits</option>
            <option value="revocable-irrevocable-trusts">Revocable & Irrevocable Trusts</option>
            <option value="trust-amendments-certifications">Trust Amendments & Certifications of Trust</option>
            <option value="durable-poa-financial">Durable Powers of Attorney (Financial)</option>
            <option value="healthcare-directives-medical-poa">Healthcare Directives & Medical POA</option>
            <option value="real-property-transfers">Real Property Transfers (Deeds to/from Trust)</option>
            <option value="probate-affidavit-documents">Probate & Affidavit Documents</option>
            <option value="other-estate-documents">Other Estate Documents</option>
          </select>
          {errors.estatePlanningService && (
            <p className="mt-1 text-sm text-red-600">{errors.estatePlanningService.message}</p>
          )}
        </div>
      )}

      {/* Conditional: Law Firm & Professional Office Support */}
      {serviceType === "attorney-law-firm" && (
        <div className="animate-fade-in">
          <label htmlFor="attorneyLawFirmService" className="block text-sm font-semibold text-neutral-dark mb-2">
            Law Firm & Professional Office Support <span className="text-accent">*</span>
          </label>
          <select
            id="attorneyLawFirmService"
            {...register("attorneyLawFirmService")}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
              errors.attorneyLawFirmService ? "border-red-500" : "border-gray-300 focus:border-primary"
            }`}
          >
            <option value="">Select a service</option>
            <option value="estate-planning-trust-execution">Estate Planning & Trust Execution Support</option>
            <option value="business-corporate-transaction">Business & Corporate Transaction Support</option>
            <option value="real-property-deed-execution">Real Property & Deed Execution</option>
            <option value="probate-fiduciary-administration">Probate & Fiduciary Administration</option>
            <option value="litigation-affidavit-services">Litigation & Affidavit Services</option>
            <option value="on-site-after-hours-support">On-Site & After-Hours Firm Support</option>
            <option value="other-legal-documents">Other Legal Documents</option>
          </select>
          {errors.attorneyLawFirmService && (
            <p className="mt-1 text-sm text-red-600">{errors.attorneyLawFirmService.message}</p>
          )}
        </div>
      )}

      {/* Conditional: Custom Service Info */}
      {serviceType === "custom" && (
        <div className="animate-fade-in">
          <label htmlFor="customServiceInfo" className="block text-sm font-semibold text-neutral-dark mb-2">
            Please Describe Your Custom Service Needs
          </label>
          <textarea
            id="customServiceInfo"
            {...register("customServiceInfo")}
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
            placeholder="Please provide details about your custom service needs..."
          />
        </div>
      )}

      {/* Conditional: I Don&apos;t Know */}
      {serviceType === "unknown" && (
        <div className="animate-fade-in">
          <label htmlFor="unknownServiceInfo" className="block text-sm font-semibold text-neutral-dark mb-2">
            Please Provide Any Information To Help Us Better Assist You <span className="text-accent">*</span>
          </label>
          <textarea
            id="unknownServiceInfo"
            {...register("unknownServiceInfo")}
            rows={4}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
              errors.unknownServiceInfo ? "border-red-500" : "border-gray-300 focus:border-primary"
            }`}
            placeholder="Please provide any information that might help us understand your needs..."
          />
          {errors.unknownServiceInfo && (
            <p className="mt-1 text-sm text-red-600">{errors.unknownServiceInfo.message}</p>
          )}
        </div>
      )}

      {/* Will You Have All Documents */}
      <div>
        <label htmlFor="hasAllDocuments" className="block text-sm font-semibold text-neutral-dark mb-2">
          Will You Have All Documents <span className="text-accent">*</span>
        </label>
        <select
          id="hasAllDocuments"
          {...register("hasAllDocuments")}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
            errors.hasAllDocuments ? "border-red-500" : "border-gray-300 focus:border-primary"
          }`}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes, I Will Have All Documents</option>
          <option value="no-print">No I Need You to Print Documents and Bring With You</option>
          <option value="other">Other</option>
        </select>
        {errors.hasAllDocuments && (
          <p className="mt-1 text-sm text-red-600">{errors.hasAllDocuments.message}</p>
        )}
      </div>

      {/* Urgent Request */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="urgentRequest"
          {...register("urgentRequest")}
          className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="urgentRequest" className="text-sm font-semibold text-neutral-dark">
          This is an urgent request
        </label>
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-semibold text-neutral-dark mb-2">
          Preferred Date
        </label>
        <input
          type="date"
          id="preferredDate"
          {...register("preferredDate")}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
        />
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferredTime" className="block text-sm font-semibold text-neutral-dark mb-2">
          Preferred Time
        </label>
        <input
          type="text"
          id="preferredTime"
          {...register("preferredTime")}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          placeholder="e.g., 2:00 PM or Morning"
        />
      </div>

      {/* Location/City */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-neutral-dark mb-2">
          Location/City <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="location"
          {...register("location")}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            errors.location ? "border-red-500" : "border-gray-300 focus:border-primary"
          }`}
          placeholder="Seattle, WA"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>

      {/* Number of Documents */}
      <div>
        <label htmlFor="numberOfDocuments" className="block text-sm font-semibold text-neutral-dark mb-2">
          Number of Documents
        </label>
        <input
          type="number"
          id="numberOfDocuments"
          {...register("numberOfDocuments")}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          placeholder="1"
          min="1"
        />
      </div>

      {/* Additional Details */}
      <div>
        <label htmlFor="additionalDetails" className="block text-sm font-semibold text-neutral-dark mb-2">
          Additional Details/Questions
        </label>
        <textarea
          id="additionalDetails"
          {...register("additionalDetails")}
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
          placeholder="Any additional information or questions you'd like to share..."
        />
      </div>

      {/* Submit Status Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 border-2 border-green-200 text-green-800"
              : "bg-red-50 border-2 border-red-200 text-red-800"
          }`}
        >
          <p className="font-semibold">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

