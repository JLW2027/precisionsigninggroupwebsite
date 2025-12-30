import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const pricingHighlights = [
  {
    title: "General Notary Services",
    price: "$15 + Travel / Convenience Fees",
    description:
      "Includes single-signature notarizations, acknowledgments, jurats, and other standard acts. Travel and convenience offsets cover getting to your preferred location.",
    features: [
      "Flexible scheduling for homes, offices, and care facilities",
      "Digital confirmation of completion",
      "Travel details confirmed before you book",
    ],
    note: "Travel/convenience fees are calculated per appointment and disclosed before confirmation.",
  },
  {
    title: "Loan Signing Services",
    price: "$125 per package + Travel / Convenience Fees",
    description:
      "Full loan signing support for buyer and seller closings, refinances, HELOCs, and other lender-required packages.",
    features: [
      "Step-by-step guidance through complex signings",
      "Identity verification plus notarization of all required documents",
      "Secure transport of completed documents to the lender, title, or escrow officer",
    ],
    note:
      "Most appointments within the Greater Puget Sound area do not need extra travel fees, but every appointment is individually reviewed before completion to confirm the final price.",
  },
  {
    title: "Other Costs",
    price: "Custom pricing",
    description:
      "Additional services such as printing, remote notarizations, or multi-location trips may adjust the total price.",
    features: [
      "Distance, complexity, or printing requirements reflected in every quote",
      "Copies, printing, and administrative support available on request",
      "Transparent breakdown of how extra costs are applied",
    ],
    note:
      "All pricing is agreed upon before finalizing appointment details so there are no surprises.",
  },
];

export const metadata: Metadata = {
  title: "Pricing | Precision Signing Group",
  description:
    "Transparent pricing for general notary services, loan signing appointments, and additional travel or convenience costs in the Puget Sound area.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Precision Signing Group",
    description:
      "Transparent pricing for general notary services, loan signing appointments, and additional travel or convenience costs in the Puget Sound area.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative text-white">
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
        <div className="section-container relative z-10 py-24 flex flex-col gap-4">
          <p className="text-base font-semibold uppercase tracking-[0.4em] text-accent">
            Transparent Fees
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-accent">
            Pricing built around clarity and convenience
          </h1>
          <p className="max-w-3xl text-xl md:text-2xl text-blue-100">
            Every appointment includes a full explanation of travel or convenience fees so you know the final investment before we arrive. We work with title companies, lenders, and private clients to deliver professional service at predictable rates.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-white/40 rounded-full text-base font-semibold text-white/90">
              Travel fees confirmed before booking
            </span>
            <span className="px-4 py-2 border border-white/40 rounded-full text-base font-semibold text-white/90">
              Loan packages include document return
            </span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="mx-auto grid w-full max-w-[1300px] gap-6 md:grid-cols-3">
          {pricingHighlights.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-medium"
            >
              <p className="text-2xl font-black uppercase tracking-widest text-neutral-dark whitespace-nowrap">
                {card.title}
              </p>
              <p className="text-3xl font-semibold text-accent mt-4">{card.price}</p>
              <p className="mt-3 text-lg text-neutral leading-relaxed">{card.description}</p>
              <ul className="mt-4 space-y-2 text-base text-neutral-dark">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-accent text-lg leading-none">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base text-neutral-dark/80 italic">{card.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-medium text-center">
          <h2 className="text-3xl font-bold">Booking clarity</h2>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Travel and convenience fees are determined once we confirm your location, document volume, and any special handling needs. For loan signings, we typically do not charge additional travel fees inside the Greater Puget Sound area, but we still review every request to confirm the final pricing before locking in your appointment.
          </p>
          <div className="mt-6 space-y-3 text-lg text-blue-100/90">
            <p>• We will confirm final pricing in writing before your appointment.</p>
            <p>• Need printing, copies, or courier services? Just ask and we will bundle the costs ahead of time.</p>
            <p>• All pricing agreements are captured inside the appointment summary to avoid surprises.</p>
          </div>
          <div className="mt-6">
            <Link href="/contact" className="btn-secondary inline-block">
              Confirm Pricing & Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

