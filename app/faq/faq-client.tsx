"use client";

import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import AnimatedSection from "@/components/AnimatedSection";
import { notaryFaqContent } from "@/src/content/notary-faqs";

export default function FAQPageClient() {
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
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary-dark/60 to-primary-dark/60 z-0"></div>
        
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/andrea-leopardi-GV8eF1jJpSs-unsplash.jpg"
            alt="FAQ background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-4">
            {notaryFaqContent.faqs.map((faq, index) => (
              <AnimatedSection key={faq.id} variant="fadeUp" delay={index * 0.05}>
                <Accordion question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>

          {/* Disclosure Section */}
          <AnimatedSection variant="fadeUp" delay={0.7} className="mt-12">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-base text-neutral-dark italic text-center">
                {notaryFaqContent.disclosure.text}
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection variant="fadeUp" delay={0.8} className="mt-12">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                {notaryFaqContent.cta.heading}
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                {notaryFaqContent.cta.text}
              </p>
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







