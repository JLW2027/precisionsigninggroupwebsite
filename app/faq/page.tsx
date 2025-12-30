import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "./faq-client";
import { notaryFaqContent } from "@/src/content/notary-faqs";
import { getFAQPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Precision Signing Group",
  description: "Common questions about notary services, mobile notary appointments, document requirements, and how to prepare for your notarization appointment.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Precision Signing Group",
    description: "Common questions about notary services, mobile notary appointments, and document requirements.",
    url: "/faq",
    type: "website",
  },
};

export default function FAQPage() {
  const faqSchema = getFAQPageSchema(notaryFaqContent.faqs);

  return (
    <>
      <Script
        id="faqpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQPageClient />
    </>
  );
}
