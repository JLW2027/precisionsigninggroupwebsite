import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | Precision Signing Group",
  description:
    "Clear pricing for estate, business, and general notary services. Washington State fees honored; custom quotes for structured engagements. Travel confirmed before booking.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Precision Signing Group",
    description:
      "Clear pricing for estate, business, and general notary services. Washington State fees honored; custom quotes for structured engagements. Travel confirmed before booking.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/jingjie-wong-N-aJC2-MQK0-unsplash.jpg"
            alt="Professional notary workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary-dark/90 to-primary-dark/90" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
              Clear, Professional Pricing
            </h1>
            <p className="mt-4 text-xl text-blue-100 leading-relaxed">
              Execution support for estate, business, and general notarial needs.
            </p>
            <ul className="mt-6 max-w-3xl space-y-2 text-lg text-blue-100">
              {[
                "Washington State statutory fees honored",
                "Custom quotes for structured engagements",
                "Travel confirmed before booking",
                "No surprise charges",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium inline-block">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-secondary inline-block">
              Schedule Appointment
            </Link>
            </div>
            </div>
        </div>
      </section>

      <PricingContent />
    </div>
  );
}
