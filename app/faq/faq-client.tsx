"use client";

import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import AnimatedSection from "@/components/AnimatedSection";
import { notaryFaqContent } from "@/src/content/notary-faqs";
import type { NotaryFaqItem } from "@/src/content/notary-faqs";

function getFaqById(id: string): NotaryFaqItem | undefined {
  return notaryFaqContent.faqs.find((f) => f.id === id);
}

export default function FAQPageClient() {
  const faqById = (id: string) => getFaqById(id);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ben-dutton-16ziVZtz8vA-unsplash.jpg"
            alt="FAQ background"
            fill
            className="object-cover"
          />
        </div>

        {/* Stronger overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary-dark/80 to-primary-dark/90 z-0" />

        {/* Content */}
        <div className="section-container relative z-10">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {notaryFaqContent.page.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {notaryFaqContent.page.intro}
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-container py-16 relative">
        {/* Background Image - reduced impact */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/andrea-leopardi-GV8eF1jJpSs-unsplash.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
          />
        </div>
        <div className="absolute inset-0 bg-white/30 z-0" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* FAQ Panel */}
          <div className="bg-white/95 backdrop-blur-sm border border-neutral-light rounded-2xl shadow-md p-6 md:p-10">
            <div className="space-y-3">
              {notaryFaqContent.faqGroups.map((group, groupIndex) => (
                <Accordion
                  key={group.title}
                  question={group.title}
                  answer={
                    <div className="space-y-3">
                      {group.faqs.map((faqId) => {
                        const faq = faqById(faqId);
                        if (!faq) return null;
                        return (
                          <Accordion
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            questionClassName="text-base md:text-lg py-1"
                            answerClassName="py-4 text-base"
                          />
                        );
                      })}
                    </div>
                  }
                  questionClassName="text-lg font-semibold"
                  defaultOpen={false}
                />
              ))}
            </div>

            {/* Disclosure */}
            <AnimatedSection variant="fadeUp" delay={0.5} className="mt-10">
              <div className="bg-blue-50/80 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-base text-neutral-dark italic text-center">
                  {notaryFaqContent.disclosure.text}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA Section - matches panel width, stronger spacing */}
          <AnimatedSection variant="fadeUp" delay={0.6} className="mt-12">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 rounded-2xl text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {notaryFaqContent.cta.heading}
              </h2>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                {notaryFaqContent.cta.text}
              </p>
              {notaryFaqContent.cta.reassurance && (
                <p className="text-blue-200/90 text-base mb-8 max-w-xl mx-auto">
                  {notaryFaqContent.cta.reassurance}
                </p>
              )}
              <Link
                href={notaryFaqContent.cta.href}
                className="btn-secondary inline-block"
              >
                {notaryFaqContent.cta.buttonLabel}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
