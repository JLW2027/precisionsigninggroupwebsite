export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  useCases: string[];
  process: string[];
  faqs: { question: string; answer: string; }[];
  pricing?: string;
}

// New types for category-based services with sub-services and modals
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "bullets"; title: string; items: string[] }
  | { type: "small"; text: string };

export interface SubService {
  id: string;
  label: string;
  title: string;
  blocks: ContentBlock[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  intro: string;
  subServices: SubService[];
  disclosure: {
    text: string;
  };
  cta: {
    heading: string;
    text: string;
    buttonLabel: string;
  };
}

export const services: Service[] = [
  {
    id: "general-notary",
    title: "General Notary Services",
    slug: "general-notary",
    icon: "",
    shortDescription: "Comprehensive notarial services for personal and business documents requiring official authentication.",
    fullDescription: "Our general notary services provide professional authentication for a wide variety of documents. As a commissioned notary public, we verify identities, witness signatures, and administer oaths to ensure your documents are legally recognized.",
    useCases: [
      "Affidavits and sworn statements",
      "Powers of attorney",
      "Contracts and agreements",
      "Medical consent forms",
      "Travel consent letters",
      "Certified copies of documents"
    ],
    process: [
      "Contact us to schedule an appointment",
      "Bring valid government-issued photo ID",
      "Present your documents (unsigned if witnessing signatures)",
      "We verify your identity and notarize your documents",
      "Receive your properly notarized documents"
    ],
    faqs: [
      {
        question: "What ID do I need to bring?",
        answer: "You need a current, valid government-issued photo ID such as a driver's license, passport, or state ID card."
      },
      {
        question: "Can you notarize documents written in another language?",
        answer: "Yes, as long as the notarial certificate is in English and you can communicate with me in English to confirm you understand what you're signing."
      },
      {
        question: "Do I need to sign the document before you arrive?",
        answer: "No, please do not sign until you're in front of the notary. We need to witness you signing the document."
      }
    ],
    pricing: "Starting at $15 per signature"
  },
  {
    id: "loan-signing",
    title: "Loan Signing Services",
    slug: "loan-signing",
    icon: "",
    shortDescription: "Certified loan signing agent for mortgage closings, refinances, and home equity transactions.",
    fullDescription: "As a certified loan signing agent, we facilitate smooth mortgage transactions by professionally handling loan document signings. We work with title companies, escrow officers, and lenders to ensure all documents are properly executed and returned promptly.",
    useCases: [
      "Purchase mortgage closings",
      "Refinance transactions",
      "Home equity lines of credit (HELOC)",
      "Reverse mortgages",
      "Seller-side closings",
      "Loan modifications"
    ],
    process: [
      "Title company or lender schedules appointment with us",
      "We receive and review loan documents in advance",
      "Meet with borrowers at their preferred location",
      "Guide borrowers through the signing process",
      "Return documents immediately via overnight shipping",
      "Provide scan-backs as requested"
    ],
    faqs: [
      {
        question: "How long does a loan signing take?",
        answer: "Most loan signings take 45-60 minutes, though it can vary depending on the loan type and number of borrowers."
      },
      {
        question: "Where can we meet for the signing?",
        answer: "We can meet at your home, office, or another convenient location within the Puget Sound area."
      },
      {
        question: "What if we find an error in the documents?",
        answer: "We'll immediately contact your lender or title company to resolve any errors before completing the signing."
      }
    ],
    pricing: "Contact for quote based on location and loan type"
  },
  {
    id: "real-estate",
    title: "Real Estate Documents",
    slug: "real-estate",
    icon: "",
    shortDescription: "Notarization of deeds, property transfers, lease agreements, and other real estate documents.",
    fullDescription: "We provide specialized notary services for real estate transactions, ensuring all property-related documents are properly executed and legally binding. Our expertise helps facilitate smooth real estate transactions.",
    useCases: [
      "Deed transfers and quit claim deeds",
      "Real estate purchase agreements",
      "Lease and rental agreements",
      "Property disclosure statements",
      "Homestead declarations",
      "Subordination agreements"
    ],
    process: [
      "Schedule your mobile notary appointment",
      "Prepare all necessary real estate documents",
      "We travel to your location with proper identification",
      "Verify all parties' identities",
      "Notarize signatures and complete certificates",
      "Provide copies for your records"
    ],
    faqs: [
      {
        question: "Do all parties need to be present?",
        answer: "Yes, all parties who need to sign the document must be present with valid identification."
      },
      {
        question: "Can you notarize documents for property in another state?",
        answer: "Yes, as long as the notarization takes place in Washington state and follows Washington notary laws."
      },
      {
        question: "How quickly can you respond for urgent real estate transactions?",
        answer: "We offer same-day service for urgent situations. Contact us as early as possible for best availability."
      }
    ],
    pricing: "Starting at $25 per appointment"
  },
  {
    id: "estate-planning",
    title: "Estate Planning Documents",
    slug: "estate-planning",
    icon: "",
    shortDescription: "Notarization of wills, trusts, healthcare directives, and other estate planning documents.",
    fullDescription: "Protect your legacy with properly notarized estate planning documents. We handle sensitive estate planning documentation with professionalism, discretion, and attention to detail.",
    useCases: [
      "Last will and testament",
      "Living trusts and trust amendments",
      "Advance healthcare directives",
      "Durable power of attorney",
      "Living wills",
      "Beneficiary designations"
    ],
    process: [
      "Contact us to schedule a confidential appointment",
      "We meet you at your home or preferred location",
      "Review documents to ensure proper completion",
      "Verify identity and mental capacity",
      "Witness and notarize signatures",
      "Provide guidance on document storage"
    ],
    faqs: [
      {
        question: "Should I have my will prepared before contacting you?",
        answer: "Yes, we notarize completed documents. We recommend working with an attorney to prepare your estate planning documents."
      },
      {
        question: "Do witnesses need to be present?",
        answer: "For certain documents like wills, witnesses may be required in addition to notarization. Check with your attorney about specific requirements."
      },
      {
        question: "How do you ensure confidentiality?",
        answer: "We maintain strict confidentiality and handle all estate planning documents with the utmost discretion and professionalism."
      }
    ],
    pricing: "Starting at $20 per document"
  },
  {
    id: "business-documents",
    title: "Business Documents",
    slug: "business-documents",
    icon: "",
    shortDescription: "Corporate documents, contracts, agreements, and other business notarization needs.",
    fullDescription: "Keep your business running smoothly with professional notarization services for corporate documents. We work with businesses of all sizes to provide convenient mobile notary services at your office or job site.",
    useCases: [
      "Articles of incorporation",
      "Corporate resolutions and bylaws",
      "Commercial leases",
      "Business contracts and agreements",
      "Commercial loan documents",
      "Corporate affidavits"
    ],
    process: [
      "Schedule an appointment at your business location",
      "Prepare all signers with valid identification",
      "We arrive at your scheduled time",
      "Notarize all required signatures",
      "Provide professional certificates and seals",
      "Deliver executed documents promptly"
    ],
    faqs: [
      {
        question: "Do you offer volume discounts for multiple documents?",
        answer: "Yes, we offer competitive rates for businesses with regular notarization needs. Contact us for a quote."
      },
      {
        question: "Can you notarize for multiple employees at once?",
        answer: "Yes, we can notarize for multiple signers during a single appointment, making it convenient for your team."
      },
      {
        question: "Do you have experience with commercial transactions?",
        answer: "Yes, we regularly work with businesses on various commercial documents and understand corporate requirements."
      }
    ],
    pricing: "Volume pricing available - contact for quote"
  },
  {
    id: "mobile-notary",
    title: "Mobile Notary Services",
    slug: "mobile-notary",
    icon: "",
    shortDescription: "Convenient mobile notary service throughout the Puget Sound region.",
    fullDescription: "Professional, compliant notarization delivered to homes, hospitals, care facilities, offices, and job sites throughout the Puget Sound region. Designed for estate planning, healthcare, and business situations where travel, timing, or accessibility makes a traditional office visit impractical.",
    useCases: [
      "Home signings for homebound individuals",
      "Office appointments for busy professionals",
      "Hospital and healthcare facility visits",
      "Real estate site signings",
      "After-hours appointments",
      "Weekend and holiday service (by appointment)"
    ],
    process: [
      "Contact us with your location and document type",
      "We provide a quote including travel fees",
      "Schedule a convenient time and location",
      "We travel to you with all necessary supplies",
      "Complete professional notarization service",
      "No need for you to leave your location"
    ],
    faqs: [
      {
        question: "What areas do you serve?",
        answer: "We serve the entire Puget Sound region, including Seattle, Tacoma, Bellevue, Everett, and surrounding communities."
      },
      {
        question: "How much is the travel fee?",
        answer: "Travel fees vary based on distance and timing. We provide upfront quotes with no hidden fees."
      },
      {
        question: "Do you offer same-day service?",
        answer: "Yes, subject to availability. Contact us as early as possible for same-day requests."
      },
      {
        question: "Can you come to hospitals or nursing homes?",
        answer: "Yes, we regularly provide mobile notary services at healthcare facilities and are experienced in these settings."
      }
    ],
    pricing: "Notary fees plus travel fee based on location"
  }
];

// Service categories with detailed sub-services for modal display
export const serviceCategories: ServiceCategory[] = [
  {
    id: "general-notary",
    title: "General Notary Services",
    slug: "general-notary",
    intro: "Notarial acts help deter fraud by verifying identity, willingness, and awareness at the time a document is signed. Below are the most common types of notarial services provided, along with examples of when they're typically needed in personal or business situations.",
    subServices: [
      {
        id: "acknowledgments",
        label: "Acknowledgments",
        title: "Acknowledgments",
        blocks: [
          {
            type: "p",
            text: "An acknowledgment confirms that the signer personally appeared before the notary, was properly identified, and acknowledged that they signed the document voluntarily.",
          },
          {
            type: "p",
            text: "Important note: The document may be signed before or in front of the notary — the signer is acknowledging the signature as their own.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Deeds (quitclaim, warranty, special warranty)",
              "Powers of Attorney",
              "Business formation documents",
              "Trusts and estate planning documents",
              "Contracts and agreements",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "Transferring or refinancing property",
              "Granting authority to another person",
              "Executing formal legal or business agreements",
            ],
          },
        ],
      },
      {
        id: "jurats",
        label: "Jurats (Oaths & Affirmations)",
        title: "Jurats (Oaths & Affirmations)",
        blocks: [
          {
            type: "p",
            text: "A jurat requires the signer to sign the document in the notary's presence and swear (or affirm) that the contents of the document are true.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Affidavits",
              "Sworn statements",
              "Court-related documents",
              "Financial or insurance declarations",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "Submitting sworn information to a court or agency",
              "Providing a written statement under oath",
              "Completing official forms requiring a sworn declaration",
            ],
          },
        ],
      },
      {
        id: "signature-witnessing",
        label: "Signature Witnessing",
        title: "Signature Witnessing",
        blocks: [
          {
            type: "p",
            text: "The notary verifies the signer's identity and witnesses the act of signing the document.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Employment or HR forms",
              "Consent forms",
              "Private agreements",
              "Travel consent letters",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "When an organization requires proof that a signature was witnessed",
              "When parties want an added layer of verification for a private agreement",
            ],
          },
        ],
      },
      {
        id: "copy-certification",
        label: "Copy Certification",
        title: "Copy Certification",
        blocks: [
          {
            type: "p",
            text: "The notary certifies that a copy of a document is a true and accurate copy of the original, when permitted by Washington State law.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Passports (copy only)",
              "Diplomas or transcripts",
              "Contracts or records",
              "Personal or business files",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "Submitting copies to schools, employers, or agencies",
              "Retaining certified copies for records",
              "Providing documentation without surrendering originals",
            ],
          },
          {
            type: "small",
            text: "Note: Some documents (such as vital records) must be certified by the issuing authority, not a notary.",
          },
        ],
      },
      {
        id: "oaths-standalone",
        label: "Oaths & Affirmations (Standalone)",
        title: "Oaths & Affirmations (Standalone)",
        blocks: [
          {
            type: "p",
            text: "The notary administers a spoken oath or affirmation without notarizing a document.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: ["Depositions", "Verbal declarations", "Official proceedings"],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "When an oath is required but no written document is involved",
              "In professional, regulatory, or formal settings",
            ],
          },
        ],
      },
      {
        id: "mobile-after-hours",
        label: "Mobile & After-Hours Notary",
        title: "Mobile & After-Hours Notary",
        blocks: [
          {
            type: "p",
            text: "I travel to your location for notarizations, including evenings and weekends by appointment.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Homes",
              "Offices",
              "Hospitals or care facilities",
              "Job sites or meeting locations",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "Limited mobility or tight schedules",
              "Time-sensitive transactions",
              "Group or multi-signer events",
            ],
          },
        ],
      },
    ],
    disclosure: {
      text: "I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.",
    },
    cta: {
      heading: "Not sure which service you need?",
      text: "If your document already specifies the notarial act required, I can help ensure it is completed correctly. If you are unsure, the document's issuer or an attorney can advise which notarization is appropriate.",
      buttonLabel: "Schedule a Notary Appointment",
    },
  },
  {
    id: "loan-signing",
    title: "Loan Signing Services",
    slug: "loan-signing",
    intro: "As a certified Loan Signing Agent, I facilitate the signing of loan documents by verifying identity, ensuring documents are signed correctly, and returning them securely to the hiring party. I work with title companies, escrow officers, and lenders to provide professional loan signing services.",
    subServices: [
      {
        id: "full-purchase",
        label: "Full Purchase Packages",
        title: "Full Purchase Packages",
        blocks: [
          {
            type: "p",
            text: "Complete signing services for home purchase transactions, ensuring all mortgage documents are properly executed for buyers.",
          },
          {
            type: "bullets",
            title: "What's included",
            items: [
              "Review of closing documents",
              "Identity verification of all borrowers",
              "Guidance through the signing process",
              "Notarization of required documents",
              "Prompt return of documents to the required recipient(s)",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I do not explain or interpret loan documents. Questions are directed to the lender, title company, or an attorney.",
          },
        ],
      },
      {
        id: "buyers-package",
        label: "Buyer's Packages",
        title: "Buyer's Packages",
        blocks: [
          {
            type: "p",
            text: "Focused signing packages for buyers, delivering a calm, efficient experience that keeps your closing on track.",
          },
          {
            type: "bullets",
            title: "What's included",
            items: [
              "Review of buyer loan documents before the appointment",
              "Identity verification for all borrowers",
              "Walkthrough of signing order and borrower initials",
              "Notarization of required signatures",
              "Secure return of signed documents to the lender, title, or escrow officer",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I do not explain or interpret loan documents. Questions are directed to the lender, title company, or an attorney.",
          },
        ],
      },
      {
        id: "heloc",
        label: "HELOC",
        title: "Home Equity Line of Credit (HELOC)",
        blocks: [
          {
            type: "p",
            text: "Professional signing services for home equity lines of credit, helping homeowners access their equity with properly executed documents.",
          },
          {
            type: "bullets",
            title: "What's included",
            items: [
              "HELOC agreement signing",
              "Identity verification",
              "Notarization of required documents",
              "Document return to lender",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I do not explain or interpret loan documents. Questions are directed to the lender, title company, or an attorney.",
          },
        ],
      },
      {
        id: "refinances",
        label: "Refinances",
        title: "Mortgage Refinances",
        blocks: [
          {
            type: "p",
            text: "Expert handling of refinance loan signings, ensuring smooth processing of your refinance transaction.",
          },
          {
            type: "bullets",
            title: "What's included",
            items: [
              "Complete refinance package signing",
              "Explanation of signing process (not document content)",
              "Notarization of all required documents",
              "Same-day document return",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I do not explain or interpret loan documents. Questions are directed to the lender, title company, or an attorney.",
          },
        ],
      },
      {
        id: "reverse-mortgages",
        label: "Reverse Mortgages",
        title: "Reverse Mortgage Signings",
        blocks: [
          {
            type: "p",
            text: "Experienced handling of reverse mortgage signings, ensuring borrowers are comfortable with each step of this specialized transaction.",
          },
          {
            type: "bullets",
            title: "What's included",
            items: [
              "Review of HUD counseling certificates and disclosures",
              "Identity verification and signer eligibility confirmation",
              "Notarization of all required reverse mortgage documents",
              "Document return to the lender or servicer with secure tracking",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I do not explain or interpret loan documents. Questions are directed to the lender, title company, or an attorney.",
          },
        ],
      },
      {
        id: "seller-packages",
        label: "Seller Packages",
        title: "Seller Closing Packages",
        blocks: [
          {
            type: "p",
            text: "Professional signing services for sellers, ensuring all closing documents are properly executed for a smooth property sale.",
          },
          {
            type: "bullets",
            title: "What's included",
            items: [
              "Deed signing and notarization",
              "Title transfer documents",
              "Seller's disclosure statements",
              "Settlement statement review",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I do not explain or interpret loan documents. Questions are directed to the lender, title company, or an attorney.",
          },
        ],
      },
    ],
    disclosure: {
      text: "I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents. I do not explain or interpret loan documents.",
    },
    cta: {
      heading: "Need a certified loan signing agent?",
      text: "Contact us to schedule your loan signing appointment. We work directly with title companies, lenders, and escrow officers to ensure your closing goes smoothly.",
      buttonLabel: "Schedule Loan Signing",
    },
  },
  {
    id: "business-documents",
    title: "Business Documentation Services",
    slug: "business-documents",
    intro: "Professional notarization services for business and corporate documents. I work with businesses of all sizes to provide convenient mobile notary services for corporate governance, contracts, and business operations.",
    subServices: [
      {
        id: "corporate-affidavits",
        label: "Corporate Affidavits",
        title: "Corporate Affidavits",
        blocks: [
          {
            type: "p",
            text: "Notarization of sworn statements made by corporate officers or representatives regarding business matters.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Affidavits of authority",
              "Financial affidavits",
              "Compliance declarations",
              "Business verification statements",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "Submitting sworn business information",
              "Regulatory compliance requirements",
              "Legal proceedings involving the company",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I am not an attorney and cannot provide legal advice. Please consult legal counsel for document interpretation.",
          },
        ],
      },
      {
        id: "corporate-resolutions",
        label: "Corporate Resolutions & Bylaws",
        title: "Corporate Resolutions & Bylaws",
        blocks: [
          {
            type: "p",
            text: "Notarization of corporate governance documents, including board resolutions and company bylaws.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Board resolutions",
              "Corporate bylaws",
              "Shareholder resolutions",
              "Authorization documents",
            ],
          },
          {
            type: "bullets",
            title: "When you might need it",
            items: [
              "Opening business bank accounts",
              "Executing major business decisions",
              "Corporate compliance requirements",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I am not an attorney and cannot provide legal advice. Please consult legal counsel for document interpretation.",
          },
        ],
      },
      {
        id: "operating-agreements",
        label: "Operating Agreements",
        title: "Operating Agreements",
        blocks: [
          {
            type: "p",
            text: "Notarization of LLC operating agreements and partnership agreements that govern business operations.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "LLC operating agreements",
              "Partnership agreements",
              "Member agreements",
              "Management agreements",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I am not an attorney and cannot provide legal advice. Please consult legal counsel for document interpretation.",
          },
        ],
      },
      {
        id: "vendor-contracts",
        label: "Vendor Contracts",
        title: "Vendor Contracts & Business Agreements",
        blocks: [
          {
            type: "p",
            text: "Notarization of business contracts, vendor agreements, and commercial transactions.",
          },
          {
            type: "bullets",
            title: "Common examples",
            items: [
              "Vendor and supplier contracts",
              "Commercial leases",
              "Business purchase agreements",
              "Non-disclosure agreements",
              "Construction contracts",
            ],
          },
          {
            type: "small",
            text: "Compliance note: I am not an attorney and cannot provide legal advice. Please consult legal counsel for document interpretation.",
          },
        ],
      },
    ],
    disclosure: {
      text: "I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.",
    },
    cta: {
      heading: "Need business notary services?",
      text: "We provide mobile notary services at your office or business location. Volume pricing available for businesses with regular notarization needs.",
      buttonLabel: "Schedule Business Notary",
    },
  },
];
