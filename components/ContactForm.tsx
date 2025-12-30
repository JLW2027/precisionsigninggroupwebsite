"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema with conditional validation
const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address"),
    serviceType: z.enum(["general-notary", "loan-signing", "custom", "unknown"], {
      required_error: "Please select a service type",
    }),
    generalNotaryService: z.string().optional(),
    loanSigningService: z.string().optional(),
    customServiceInfo: z.string().optional(),
    unknownServiceInfo: z.string().optional(),
    hasAllDocuments: z.enum(["yes", "no-print", "other"], {
      required_error: "Please select an option",
    }),
    preferredDate: z.string().optional(),
    preferredTime: z.string().optional(),
    location: z.string().min(2, "Please enter your location/city"),
    numberOfDocuments: z.string().optional(),
    additionalDetails: z.string().optional(),
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
      if (data.serviceType === "loan-signing") {
        return !!data.loanSigningService && data.loanSigningService.length > 0;
      }
      return true;
    },
    {
      message: "Please select a loan signing service",
      path: ["loanSigningService"],
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
          <option value="general-notary">General Notary Services</option>
          <option value="loan-signing">Loan Signing Service</option>
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
            <option value="acknowledgement">Acknowledgement</option>
            <option value="oath-acknowledgement">Oath and/or Acknowledgement</option>
            <option value="verification-oath">Verification upon Oath and/or Acknowledgement</option>
            <option value="copy-certification">Copy Certification</option>
            <option value="signature-witnessing">Signature Witnessing</option>
            <option value="event-act-witnessing">Event / Act Witnessing</option>
          </select>
          {errors.generalNotaryService && (
            <p className="mt-1 text-sm text-red-600">{errors.generalNotaryService.message}</p>
          )}
        </div>
      )}

      {/* Conditional: Loan Signing Service */}
      {serviceType === "loan-signing" && (
        <div className="animate-fade-in">
          <label htmlFor="loanSigningService" className="block text-sm font-semibold text-neutral-dark mb-2">
            Loan Signing Service <span className="text-accent">*</span>
          </label>
          <select
            id="loanSigningService"
            {...register("loanSigningService")}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white ${
              errors.loanSigningService ? "border-red-500" : "border-gray-300 focus:border-primary"
            }`}
          >
            <option value="">Select a service</option>
            <option value="full-purchase">Full Purchase Package</option>
            <option value="buyers-package">Buyer&apos;s Package</option>
            <option value="sellers-package">Seller&apos;s Package</option>
            <option value="heloc">HELOC</option>
            <option value="refinance">Refinance</option>
          </select>
          {errors.loanSigningService && (
            <p className="mt-1 text-sm text-red-600">{errors.loanSigningService.message}</p>
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
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Form"}
        </button>
      </div>
    </form>
  );
}

