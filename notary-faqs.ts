export type NotaryFaqItem = {
  id: string;
  question: string;
  answer: string;
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
    "id": "what-does-notary-do",
    "question": "What does a notary public do?",
    "answer": "A notary public is an impartial public official who verifies the identity of signers, confirms they are signing willingly and knowingly, and performs specific notarial acts required by law. Notaries help deter fraud but do not validate the contents or legality of documents."
  },
  {
    "id": "what-can-notarize",
    "question": "What types of documents can a notary notarize?",
    "answer": "A notary can notarize many types of documents, including Powers of Attorney, affidavits and sworn statements, deeds and real estate documents, business agreements and contracts, trusts and estate planning documents, and loan and mortgage documents. The document must be complete, and the required notarial act must be clearly indicated."
  },
  {
    "id": "what-cannot-notarize",
    "question": "What can a notary NOT notarize?",
    "answer": "A notary cannot notarize incomplete or blank documents, notarize documents without the signer present, notarize their own signature or documents they have a direct interest in, provide legal advice or explain legal consequences, or prepare or draft legal documents (unless separately authorized)."
  },
  {
    "id": "legal-advice",
    "question": "Can a notary give legal advice or tell me which notarization I need?",
    "answer": "No. A notary public is not an attorney and cannot give legal advice or recommend which notarial act you should use. If you are unsure, the document issuer, receiving agency, or an attorney can advise you."
  },
  {
    "id": "what-id",
    "question": "What identification do I need to bring?",
    "answer": "Signers must present valid, government-issued photo identification, such as a state-issued driver’s license, state ID card, or a U.S. or foreign passport. The ID must be current or issued within the timeframe allowed by Washington State law."
  },
  {
    "id": "all-signers-present",
    "question": "Do all signers need to be present?",
    "answer": "Yes. Every person whose signature is being notarized must personally appear before the notary at the time of notarization. This applies even if multiple signers are listed on the document."
  },
  {
    "id": "sign-before",
    "question": "Can I sign the document before the appointment?",
    "answer": "It depends on the notarial act. For acknowledgments, the document may be signed beforehand. For jurats, oaths, affirmations, and signature witnessing, the document must be signed in the notary’s presence. If you are unsure, wait until the appointment."
  },
  {
    "id": "what-to-bring",
    "question": "What should I bring to my notary appointment?",
    "answer": "Please bring the complete document(s) to be notarized, valid government-issued photo ID, all required signers, any witnesses required by the document (unless arranged in advance), and payment for notary services."
  },
  {
    "id": "witnesses",
    "question": "Are witnesses required?",
    "answer": "Some documents require witnesses in addition to notarization. If your document requires witnesses, please bring them to the appointment unless you’ve arranged otherwise in advance."
  },
  {
    "id": "common-mistakes",
    "question": "What are common mistakes that delay notarization?",
    "answer": "Common issues include missing or expired identification, incomplete or blank documents, signers not present, incorrect or missing notarial wording, and documents requiring witnesses who are not available. Preparing in advance helps ensure a smooth appointment."
  },
  {
    "id": "refuse",
    "question": "Can a notary refuse to notarize a document?",
    "answer": "Yes. A notary must refuse if identity cannot be properly verified, the signer appears unwilling or unaware, the document is incomplete, or the requested notarial act is unlawful."
  },
  {
    "id": "mobile",
    "question": "Do you provide mobile notary services?",
    "answer": "Yes. Mobile notary services are available by appointment, including evenings and weekends. I travel to homes, offices, hospitals, care facilities, and other agreed-upon locations."
  },
  {
    "id": "loan-signing",
    "question": "Do you offer loan signing services?",
    "answer": "Yes. As a Notary Signing Agent, I facilitate loan signings by verifying identity and ensuring documents are executed correctly. I do not explain or interpret loan documents; questions should be directed to the lender, title company, or attorney."
  },
  {
    "id": "fees",
    "question": "Are notary fees regulated?",
    "answer": "Washington State sets maximum fees for certain notarial acts. Travel, convenience, and after-hours fees may apply for mobile services and will be disclosed in advance."
  },
  {
    "id": "not-legal-approval",
    "question": "Is notarization the same as legal approval?",
    "answer": "No. Notarization does not validate or approve the contents of a document. It only verifies identity, willingness, and the act of signing."
  }
],
  disclosure: {
    text:
      "I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.",
  },
  cta: {
    heading: "Have additional questions or need to schedule an appointment?",
    text: "Contact me or book a notary appointment online.",
    buttonLabel: "Schedule a Notary Appointment",
    href: "/schedule",
  },
};
