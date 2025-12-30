import React from "react";
import Link from "next/link";

// SINGLE SOURCE OF TRUTH: This file is the exclusive source for FAQ page content.
// All FAQ content, including questions, answers, page metadata, disclosure, and CTA
// must be edited here. Changes to this file will automatically update the FAQ page.

export type NotaryFaqItem = {
  id: string;
  question: string;
  answer: string | React.ReactNode;
};

export type NotaryFaqPageContent = {
  page: {
    title: string;
    intro: string;
  };
  faqs: NotaryFaqItem[];
  disclosure: {
    text: string;
  };
  cta: {
    heading: string;
    text: string;
    buttonLabel: string;
    href: string;
  };
};

export const notaryFaqContent: NotaryFaqPageContent = {
  page: {
    title: "Frequently Asked Questions",
    intro:
      "Notary services are designed to help prevent fraud and ensure documents are signed properly. Below are answers to common questions about what a notary can and cannot do, how to prepare for an appointment, and how to avoid common issues that delay notarization.",
  },
  faqs: [
    {
      id: "what-does-notary-do",
      question: "What does a notary public do?",
      answer:
        "A notary public is an impartial public official who verifies the identity of signers, confirms they are signing willingly and knowingly, and performs specific notarial acts required by law. Notaries help deter fraud but do not validate the contents or legality of documents.",
    },
    {
      id: "what-can-notarize",
      question: "What types of documents can a notary notarize?",
      answer: (
        <>
          A notary can notarize many types of documents, including:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>Powers of Attorney</li>
            <li>Affidavits and sworn statements</li>
            <li>Deeds and real estate documents</li>
            <li>Business agreements and contracts</li>
            <li>Trusts and estate planning documents</li>
            <li>Loan and mortgage documents</li>
          </ul>
          <p className="mt-2 italic">
            The document must be complete, and the required notarial act must be
            clearly indicated.
          </p>
        </>
      ),
    },
    {
      id: "what-cannot-notarize",
      question: "What can a notary NOT notarize?",
      answer: (
        <>
          A notary cannot:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>Notarize incomplete or blank documents</li>
            <li>Notarize documents without the signer present</li>
            <li>
              Notarize their own signature or documents they have a direct
              interest in
            </li>
            <li>Provide legal advice or explain legal consequences</li>
            <li>
              Prepare or draft legal documents (unless separately authorized)
            </li>
          </ul>
          <p className="mt-2 italic">
            Confirm the document is finalized and lawful before requesting notarization.
          </p>
        </>
      ),
    },
    {
      id: "legal-advice",
      question:
        "Can a notary give legal advice or tell me which notarization I need?",
      answer:
        "No. A notary public is not an attorney and cannot give legal advice or recommend which notarial act you should use. If you are unsure, the document issuer, receiving agency, or an attorney can advise you.",
    },
    {
      id: "what-id",
      question: "What identification do I need to bring?",
      answer: (
        <>
          Signers must present valid, government-issued photo identification,
          such as:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>State-issued driver&apos;s license</li>
            <li>State ID card</li>
            <li>U.S. or foreign passport</li>
          </ul>
          <p className="mt-2 italic">
            The ID must be current or issued within the timeframe allowed by
            Washington State law.
          </p>
        </>
      ),
    },
    {
      id: "all-signers-present",
      question: "Do all signers need to be present?",
      answer: (
        <>
          <p>
            Yes. Every person whose signature is being notarized must personally
            appear before the notary at the time of notarization. This applies
            even if multiple signers are listed on the document.
          </p>
          <p className="mt-2 italic text-sm">
            *Please confirm requirements if a Power of Attorney is involved.
          </p>
        </>
      ),
    },
    {
      id: "sign-before",
      question: "Can I sign the document before the appointment?",
      answer: (
        <>
          It depends on the notarial act:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>
              For acknowledgments, the document may be signed beforehand.
            </li>
            <li>
              For jurats, oaths, affirmations, and signature witnessing, the
              document must be signed in the notary&apos;s presence.
            </li>
          </ul>
          <p className="mt-2 italic">If you are unsure, wait until the appointment.</p>
        </>
      ),
    },
    {
      id: "what-to-bring",
      question: "What should I bring to my notary appointment?",
      answer: (
        <>
          Please bring:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>The complete document(s) to be notarized</li>
            <li>Valid government-issued photo ID</li>
            <li>All required signers</li>
            <li>
              Any witnesses required by the document (unless arranged in advance)
            </li>
            <li>Payment for notary services</li>
          </ul>
          <p className="mt-2 italic">
            Have everything ready so the appointment can proceed without delays.
          </p>
        </>
      ),
    },
    {
      id: "witnesses",
      question: "Are witnesses required?",
      answer:
        "Some documents require witnesses in addition to notarization. The notary may be able to serve as a witness only if permitted by law and if they are not prohibited by the document or transaction.",
    },
    {
      id: "common-mistakes",
      question: "What are common mistakes that delay notarization?",
      answer: (
        <>
          Common issues include:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>Missing or expired identification</li>
            <li>Incomplete or blank documents</li>
            <li>Signers not present</li>
            <li>Incorrect notarial wording</li>
            <li>Documents requiring witnesses who are not available</li>
          </ul>
          <p className="mt-2 italic">
            Preparing in advance helps ensure a smooth appointment.
          </p>
        </>
      ),
    },
    {
      id: "refuse",
      question: "Can a notary refuse to notarize a document?",
      answer: (
        <>
          Yes. A notary must refuse if:
          <ul className="list-disc list-outside mt-2 space-y-1 pl-6">
            <li>Identity cannot be properly verified</li>
            <li>The signer appears unwilling or unaware</li>
            <li>The document is incomplete</li>
            <li>The notarial act requested is unlawful</li>
          </ul>
          <p className="mt-2 italic">
            Refusal is required when the law or the document expressly prevents the notarization.
          </p>
        </>
      ),
    },
    {
      id: "mobile",
      question: "Do you provide mobile notary services?",
      answer: (
        <>
          Yes. Mobile notary services are available by appointment, including
          evenings and weekends. I travel to homes, offices, hospitals, care
          facilities, and other agreed-upon locations.{" "}
          <Link
            href="/contact"
            className="text-accent hover:text-accent-dark font-semibold underline"
          >
            Schedule an appointment
          </Link>{" "}
          to get started.
        </>
      ),
    },
    {
      id: "loan-signing",
      question: "Do you offer loan signing services?",
      answer:
        "Yes. As a Notary Signing Agent, I facilitate loan signings by verifying identity and ensuring documents are executed correctly. I do not explain or interpret loan documents; questions should be directed to the lender, title company, or attorney.",
    },
    {
      id: "fees",
      question: "Are notary fees regulated?",
      answer:
        "Washington State sets maximum fees for certain notarial acts. Travel, convenience, and after-hours fees may apply for mobile services and will be disclosed in advance.",
    },
    {
      id: "not-legal-approval",
      question: "Is notarization the same as legal approval?",
      answer:
        "No. Notarization does not validate or approve the contents of a document. It only verifies identity, willingness, and the act of signing.",
    },
  ],
  disclosure: {
    text:
      "I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.",
  },
  cta: {
    heading: "Have additional questions or need to schedule an appointment?",
    text: "Contact me or book a notary appointment online.",
    buttonLabel: "Schedule Appointment",
    href: "/contact",
  },
};

