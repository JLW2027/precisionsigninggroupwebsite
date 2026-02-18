import type { Metadata } from "next";
import Link from "next/link";
import FirmIntakeForm from "@/components/forms/FirmIntakeForm";

export const metadata: Metadata = {
  title: "Firm Intake | Precision Signing Group",
  description:
    "Submit a law firm document execution request with scheduling and signer details.",
  alternates: {
    canonical: "/for-law-firms/intake",
  },
  openGraph: {
    title: "Firm Intake | Precision Signing Group",
    description:
      "Submit a law firm document execution request with scheduling and signer details.",
    url: "/for-law-firms/intake",
    type: "website",
  },
};

export default function FirmIntakePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="section-container">
          <div className="flex items-center mb-4 text-blue-200 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/for-law-firms" className="hover:text-white">For Law Firms</Link>
            <span className="mx-2">/</span>
            <span>Intake</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Firm Intake
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Submit your execution request with firm and signer details. We will confirm availability and next steps shortly.
          </p>
        </div>
      </section>

      <div className="section-container py-16">
        <div className="max-w-2xl">
          <FirmIntakeForm />
        </div>
      </div>
    </div>
  );
}
