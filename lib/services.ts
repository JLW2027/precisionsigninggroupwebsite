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
  introSubtext?: string;
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
    intro: "Professional mobile notarization for individuals and businesses throughout the Puget Sound region. We verify identity, willingness, and awareness at the time of signing to ensure documents are executed properly and in compliance with Washington State requirements.",
    subServices: [
      {
        id: "acknowledgements",
        label: "Acknowledgements",
        title: "Acknowledgements",
        blocks: [
          {
            type: "p",
            text: "Notarization of documents requiring identity verification and acknowledgment of signature.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Real estate documents",
              "Business agreements",
              "Financial or banking forms",
              "Personal legal documents",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
          },
        ],
      },
      {
        id: "oaths-affirmations-jurats",
        label: "Oaths & Affirmations (Jurats)",
        title: "Oaths & Affirmations (Jurats)",
        blocks: [
          {
            type: "p",
            text: "Administration of oaths or affirmations for sworn statements requiring verification under penalty of perjury.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Affidavits",
              "Sworn declarations",
              "Court-related documents",
              "Verification statements",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
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
            text: "Witnessing signatures when required by document terms or Washington State requirements.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Estate documents",
              "Business agreements",
              "Real property documents",
              "Formal contracts requiring witnesses",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
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
            text: "Certification of copies when permitted under Washington State law.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Personal records",
              "Business documentation",
              "Educational documents (non-public records)",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
          },
        ],
      },
      {
        id: "event-act-witnessing",
        label: "Event / Act Witnessing",
        title: "Event / Act Witnessing",
        blocks: [
          {
            type: "p",
            text: "Neutral witnessing of formal signings or document executions.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Corporate meetings",
              "Formal business signings",
              "Estate document execution sessions",
              "Recorded statements",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
          },
        ],
      },
      {
        id: "fingerprinting-services",
        label: "Fingerprinting Services",
        title: "Fingerprinting Services",
        blocks: [
          {
            type: "p",
            text: "Mobile fingerprinting services when required for licensing, employment, or regulatory purposes.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Background checks",
              "Professional licensing",
              "Employment screening",
              "Regulatory filings",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. No legal advice is provided.",
          },
        ],
      },
      {
        id: "i9-verification",
        label: "i9 Verification",
        title: "i9 Verification",
        blocks: [
          {
            type: "p",
            text: "Authorized representative services for Form I-9 employment eligibility verification.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Remote hires",
              "Corporate onboarding",
              "HR compliance support",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. No legal advice is provided.",
          },
        ],
      },
      {
        id: "apostille-services",
        label: "Apostille Services",
        title: "Apostille Services",
        blocks: [
          {
            type: "p",
            text: "Assistance with apostille processing for documents intended for international use.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Business filings abroad",
              "International adoptions",
              "Foreign property matters",
              "International powers of attorney",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
          },
        ],
      },
      {
        id: "loan-signing-services",
        label: "Loan Signing Services",
        title: "Loan Signing Services",
        blocks: [
          {
            type: "p",
            text: "Professional execution support for real estate and business loan documents.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Mortgage refinances",
              "Purchase closings",
              "SBA loans",
              "Commercial financing",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
          },
        ],
      },
      {
        id: "mobile-after-hours-notary",
        label: "Mobile & After-Hours Notary",
        title: "Mobile & After-Hours Notary",
        blocks: [
          {
            type: "p",
            text: "Mobile notary services at your home, office, hospital, or other location—including evenings and weekends when available.",
          },
          {
            type: "bullets",
            title: "Common Uses",
            items: [
              "Time-sensitive signings",
              "Hospital or care facility visits",
              "Business office appointments",
              "Urgent real estate matters",
            ],
          },
          {
            type: "small",
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
          },
        ],
      },
    ],
    disclosure: {
      text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
          },
        ],
      },
    ],
    disclosure: {
      text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
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
            text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
          },
        ],
      },
    ],
    disclosure: {
      text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.",
    },
    cta: {
      heading: "Need business notary services?",
      text: "We provide mobile notary services at your office or business location. Volume pricing available for businesses with regular notarization needs.",
      buttonLabel: "Schedule Business Notary",
    },
  },
  {
    id: "business-owner-services",
    title: "Business Document Execution",
    slug: "business-owner-services",
    intro: "Professional execution support for corporate and closely held businesses. We handle governance documents, ownership transfers, financing paperwork, and related business records with discretion, accuracy, and efficiency.",
    subServices: [
      {
        id: "corporate-resolutions-bylaws",
        label: "Corporate Resolutions & Bylaws",
        title: "Corporate Resolutions & Bylaws",
        blocks: [
          { type: "p", text: "Notarization of board resolutions, bylaws, shareholder consents, and corporate governance documents required for banking, transactions, and compliance." },
          { type: "bullets", title: "Common Applications", items: ["Board or shareholder resolutions", "Corporate bylaws", "Officer certifications", "Banking authority documents"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "operating-agreements-llc-amendments",
        label: "Operating Agreements & LLC Amendments",
        title: "Operating Agreements & LLC Amendments",
        blocks: [
          { type: "p", text: "Notarization of LLC operating agreements, amendments, partnership agreements, and governance updates." },
          { type: "bullets", title: "Common Applications", items: ["Forming or amending an LLC", "Adding or removing members", "Internal governance updates", "Banking or vendor requirements"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "buy-sell-agreements",
        label: "Buy-Sell Agreements",
        title: "Buy-Sell Agreements",
        blocks: [
          { type: "p", text: "Notarization of buy-sell agreements governing ownership transfers between business owners, partners, or shareholders." },
          { type: "bullets", title: "Common Applications", items: ["Business succession planning", "Partner or shareholder exits", "Transfer of ownership interests", "Estate-related ownership transitions"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "stock-shareholder-documents",
        label: "Stock & Shareholder Documents",
        title: "Stock & Shareholder Documents",
        blocks: [
          { type: "p", text: "Notarization of stock certificates, transfer documents, shareholder agreements, and related equity documentation." },
          { type: "bullets", title: "Common Applications", items: ["Stock issuance or transfers", "Shareholder agreements", "Voting agreements", "Equity restructuring"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "assignment-of-interest",
        label: "Assignment of Interest (LLC / Partnership)",
        title: "Assignment of Interest (LLC / Partnership)",
        blocks: [
          { type: "p", text: "Notarization of membership or partnership interest transfer documents." },
          { type: "bullets", title: "Common Applications", items: ["Selling or gifting ownership interest", "Partnership transfers", "Admitting or removing members", "Ownership restructuring"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "commercial-lease-documents",
        label: "Commercial Lease Documents",
        title: "Commercial Lease Documents",
        blocks: [
          { type: "p", text: "Notarization of commercial leases, amendments, subleases, and related real property documentation for business use." },
          { type: "bullets", title: "Common Applications", items: ["Commercial lease agreements", "Lease extensions or amendments", "Sublease agreements", "Estoppel certificates"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "sba-business-loan-documents",
        label: "SBA & Business Loan Documents",
        title: "SBA & Business Loan Documents",
        blocks: [
          { type: "p", text: "Execution support for SBA loan packages, commercial financing documents, and lender-required forms." },
          { type: "bullets", title: "Common Applications", items: ["SBA loan signings", "Business loan closings", "Lender certifications", "Personal guarantees for business financing"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. Loan terms are not interpreted or explained." },
        ],
      },
      {
        id: "affidavits-verification",
        label: "Affidavits & Verification",
        title: "Affidavits & Verification",
        blocks: [
          { type: "p", text: "Notarization of business affidavits, sworn statements, and verification documents for regulatory or transactional purposes." },
          { type: "bullets", title: "Common Applications", items: ["Regulatory filings", "Due diligence documentation", "Authority verifications", "Transaction support"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "other-business-documents",
        label: "Other Business Documents",
        title: "Other Business Documents",
        blocks: [
          { type: "p", text: "Notarization of additional business-related documents requiring a neutral execution resource." },
          { type: "bullets", title: "Common Applications", items: ["Vendor agreements", "NDAs", "Custom contracts", "Compliance documentation"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
    ],
    disclosure: { text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
    cta: {
      heading: "Ready to schedule?",
      text: "Contact us to arrange notarial services at your office or preferred location. We work with business owners across the Puget Sound region.",
      buttonLabel: "Schedule Business Notary",
    },
  },
  {
    id: "estate-planning-services",
    title: "Estate Document Execution",
    slug: "estate-planning-services",
    intro: "Discreet notarial support for estate planning and fiduciary matters. We assist with wills, trusts, powers of attorney, certifications of trust, and related estate documentation in accordance with Washington State requirements.",
    subServices: [
      {
        id: "wills-self-proving-affidavits",
        label: "Wills & Self-Proving Affidavits",
        title: "Wills & Self-Proving Affidavits",
        blocks: [
          { type: "p", text: "Notarization and witnessing of last wills and testaments and related self-proving affidavits in accordance with Washington State requirements." },
          { type: "bullets", title: "Execution Support Includes", items: ["Identity verification", "Required witnessing and notarization", "Self-proving affidavit execution", "Discreet document handling"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "revocable-irrevocable-trusts",
        label: "Revocable & Irrevocable Trusts",
        title: "Revocable & Irrevocable Trusts",
        blocks: [
          { type: "p", text: "Notarization of revocable and irrevocable trust documents and related execution materials." },
          { type: "bullets", title: "Common Applications", items: ["Trust execution", "Trust funding documentation", "Related estate planning documents"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "trust-amendments-certifications",
        label: "Trust Amendments & Certifications of Trust",
        title: "Trust Amendments & Certifications of Trust",
        blocks: [
          { type: "p", text: "Notarization of trust amendments, restatements, and certifications used for financial or real property matters." },
          { type: "bullets", title: "Common Applications", items: ["Trust updates", "Certification of trust for banks", "Trustee documentation"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "durable-poa-financial",
        label: "Durable Powers of Attorney (Financial)",
        title: "Durable Powers of Attorney (Financial)",
        blocks: [
          { type: "p", text: "Notarization of durable powers of attorney for financial matters, authorizing an agent to act on your behalf." },
          { type: "bullets", title: "Common Applications", items: ["Estate planning updates", "Designating financial agents", "Banking or real estate authority"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "healthcare-directives-medical-poa",
        label: "Healthcare Directives & Medical POA",
        title: "Healthcare Directives & Medical POA",
        blocks: [
          { type: "p", text: "Notarization of healthcare directives, living wills, and medical powers of attorney when required." },
          { type: "bullets", title: "Common Applications", items: ["Healthcare directives", "Medical powers of attorney", "Living wills", "POLST forms when notarization is required"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "real-property-transfers",
        label: "Real Property Transfers (Deeds to/from Trust)",
        title: "Real Property Transfers (Deeds to/from Trust)",
        blocks: [
          { type: "p", text: "Notarization of deeds and real property transfer documents used in estate planning." },
          { type: "bullets", title: "Common Applications", items: ["Funding property into a trust", "Property transfers from a trust", "Estate-related real property transactions"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "probate-affidavit-documents",
        label: "Probate & Affidavit Documents",
        title: "Probate & Affidavit Documents",
        blocks: [
          { type: "p", text: "Notarization of probate-related affidavits and estate administration documents." },
          { type: "bullets", title: "Common Applications", items: ["Small estate affidavits", "Probate filings", "Heirship affidavits", "Court-related estate documentation"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "other-estate-documents",
        label: "Other Estate Documents",
        title: "Other Estate Documents",
        blocks: [
          { type: "p", text: "Notarization of additional estate-related documents requiring formal execution." },
          { type: "bullets", title: "Common Applications", items: ["Beneficiary designations", "Transfer-on-death documents", "Estate verification letters", "Attorney-prepared estate forms"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
    ],
    disclosure: { text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
    cta: {
      heading: "Need estate document notarization?",
      text: "Contact us to schedule discreet notarial services for your estate documents. We serve individuals and families throughout the Puget Sound region.",
      buttonLabel: "Schedule Estate Notary",
    },
  },
  {
    id: "for-law-firms",
    title: "Law Firm & Professional Office Support",
    slug: "for-law-firms",
    intro: "Reliable execution support for estate planning, business transactions, litigation matters, and real property documents. We integrate seamlessly with firm workflows and uphold the professionalism your clients expect.",
    introSubtext: "Available for recurring firm engagements, volume needs, and time-sensitive signings.",
    subServices: [
      {
        id: "estate-planning-trust-execution",
        label: "Estate Planning & Trust Execution Support",
        title: "Estate Planning & Trust Execution Support",
        blocks: [
          { type: "p", text: "Execution support for wills, trusts, powers of attorney, and related estate planning documents prepared by your firm." },
          { type: "bullets", title: "Execution Support Includes", items: ["Client signings at your office or off-site", "Notarization per Washington requirements", "Discreet document handling", "Flexible scheduling for firm needs"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "business-corporate-transaction",
        label: "Business & Corporate Transaction Support",
        title: "Business & Corporate Transaction Support",
        blocks: [
          { type: "p", text: "Execution support for corporate resolutions, operating agreements, contracts, and financing documentation." },
          { type: "bullets", title: "Common Applications", items: ["Entity governance documents", "Mergers and acquisitions", "Commercial agreements", "Regulatory filings"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "real-property-deed-execution",
        label: "Real Property & Deed Execution",
        title: "Real Property & Deed Execution",
        blocks: [
          { type: "p", text: "Execution support for deeds and real property documentation when clients require a neutral notary." },
          { type: "bullets", title: "Common Applications", items: ["Deed signings", "Property transfers", "Trust-related real estate transactions", "Time-sensitive closings"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "probate-fiduciary-administration",
        label: "Probate & Fiduciary Administration",
        title: "Probate & Fiduciary Administration",
        blocks: [
          { type: "p", text: "Execution support for trustees, executors, and fiduciaries handling estate administration matters." },
          { type: "bullets", title: "Common Applications", items: ["Trustee certifications", "Probate documentation", "Estate administration affidavits", "Fiduciary compliance documentation"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "litigation-affidavit-services",
        label: "Litigation & Affidavit Services",
        title: "Litigation & Affidavit Services",
        blocks: [
          { type: "p", text: "Execution support for affidavits, sworn statements, and litigation-related documents." },
          { type: "bullets", title: "Common Applications", items: ["Sworn declarations", "Witness affidavits", "Court-required notarizations", "Time-sensitive litigation support"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "on-site-after-hours-support",
        label: "On-Site & After-Hours Firm Support",
        title: "On-Site & After-Hours Firm Support",
        blocks: [
          { type: "p", text: "Mobile execution services at your office, courthouse, or client location—including evenings and weekends when available." },
          { type: "bullets", title: "Execution Support Includes", items: ["Office or off-site signings", "After-hours availability", "Urgent scheduling when possible", "Dedicated point of contact for ongoing firm engagements"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
      {
        id: "other-legal-documents",
        label: "Other Legal Documents",
        title: "Other Legal Documents",
        blocks: [
          { type: "p", text: "Execution support for additional legal documents requiring notarization." },
          { type: "bullets", title: "Common Applications", items: ["Custom agreements", "Verification letters", "One-off client signings", "Attorney-prepared documents"] },
          { type: "small", text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
        ],
      },
    ],
    disclosure: { text: "Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided." },
    cta: {
      heading: "Partner with a Reliable Execution Resource",
      text: "We support law firms and professional offices across the Puget Sound region with dependable, neutral notarial execution. Contact us to discuss ongoing firm support, referral relationships, or one-off client needs.",
      buttonLabel: "Discuss Ongoing Support",
    },
  },
];
