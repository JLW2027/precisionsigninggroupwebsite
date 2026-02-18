"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";

const cards = [
  {
    title: "General Notary",
    subtitle: "State Fees + Travel",
    description: "Standard acknowledgments, jurats, affidavits, and signature witnessing.",
    bullets: ["WA statutory notarization fees", "Travel confirmed in advance", "Flexible scheduling"],
    cta: "Book General Notary",
    href: "/contact",
  },
  {
    title: "Estate & Trust Execution",
    subtitle: "Custom Engagement Pricing",
    description: "Wills, trusts, POAs, healthcare directives, probate affidavits, deed transfers.",
    bullets: ["Coordinated execution support", "Witness guidance (when applicable)", "Discreet handling"],
    cta: "Request Estate Quote",
    href: "/contact",
  },
  {
    title: "Business & Corporate Execution",
    subtitle: "Custom Engagement Pricing",
    description: "Corporate resolutions, operating agreements, contracts, governance documents.",
    bullets: ["Attorney coordination", "Transactional support", "Deadline-sensitive availability"],
    cta: "Request Business Quote",
    href: "/contact",
  },
];

const accordionItems = [
  {
    question: "What determines pricing?",
    answer: (
      <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-dark">
        <li>Document volume</li>
        <li>Location & travel</li>
        <li>Witness coordination</li>
        <li>Scheduling urgency</li>
        <li>Printing or courier needs</li>
      </ul>
    ),
  },
  {
    question: "Real Property & Deed Signings",
    answer: (
      <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-dark">
        <li>Property transfers</li>
        <li>Trust-related deeds</li>
        <li>Commercial or private closings</li>
        <li>After-hours signings</li>
      </ul>
    ),
  },
  {
    question: "Additional Services",
    answer: (
      <>
        <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-dark">
          <li>Large document printing</li>
          <li>Multi-location signings</li>
          <li>After-hours appointments</li>
          <li>Courier coordination</li>
        </ul>
        <p className="mt-3 text-neutral-dark font-medium">All additional services are confirmed before booking.</p>
      </>
    ),
  },
];

const processSteps = [
  "You send document details",
  "We confirm requirements and logistics",
  "You receive written pricing confirmation",
  "We execute with precision",
];

export default function PricingContent() {
  return (
    <div className="bg-slate-50/50">
      <div className="section-container py-16">
        {/* Section 1: 3 cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-neutral-light bg-white p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col min-h-[320px] md:min-h-[360px]"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-3">
                  {card.title}
                </h2>
                <p className="text-xl font-semibold text-accent mb-4">
                  {card.subtitle}
                </p>
                <p className="text-neutral leading-relaxed">
                  {card.description}
                </p>
                <ul className="mt-4 space-y-3 text-neutral-dark flex-1">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-neutral-light">
                  <Link href={card.href} className="btn-primary w-full text-center block">
                    {card.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Accordion */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Details & Additional Options
          </h2>
          <div className="max-w-4xl space-y-4">
            {accordionItems.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                answerClassName="py-3"
              />
            ))}
          </div>
        </section>

        {/* Section 3: Trust builder */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Professional Engagement Process
          </h2>
          <ol className="max-w-4xl space-y-4">
            {processSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-lg text-neutral-dark pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-lg text-neutral leading-relaxed max-w-4xl">
            Most Puget Sound appointments are straightforward and efficiently handled.
          </p>
        </section>
      </div>
    </div>
  );
}
