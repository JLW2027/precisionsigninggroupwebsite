import React from "react";

// Site constants for SEO
const SITE_URL = "https://www.precisionsigninggroup.com";
const SITE_NAME = "Precision Signing Group";
const PHONE = "(425) 390-4713";
const EMAIL = "john.wilkes@precisionsigninggroup.com";
const LOGO_URL = `${SITE_URL}/logo.png`; // Update this path if logo is located elsewhere

/**
 * Generates Organization schema for site-wide use
 * Includes logo and optional sameAs (only if profiles actually exist)
 */
export function getOrganizationSchema(sameAs?: string[]) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    logo: LOGO_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "Customer Service",
      email: EMAIL,
    },
  };

  // Only add sameAs if real profile URLs are provided
  if (sameAs && sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
}

/**
 * Generates LocalBusiness schema (conservative approach)
 * Keep @type as "LocalBusiness" unless certain of specific type
 * Do NOT add street address unless published on website AND matches GBP exactly
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    areaServed: {
      "@type": "GeoCircle",
      name: "Puget Sound region",
    },
    serviceArea: {
      "@type": "City",
      name: "Puget Sound region",
    },
    // Note: address, geo coordinates, hours, priceRange omitted unless maintained consistently
  };
}

/**
 * Extracts plain text from React.ReactNode for FAQPage schema
 * Deterministic conversion rules:
 * - Strings: use directly
 * - Arrays/JSX: join segments with spaces
 * - Bullets: join with "; " consistently
 * - Strip links: keep visible text only
 */
function extractText(node: string | React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "object" && node !== null) {
    // Handle React elements
    if ("props" in node) {
      const props = (node as any).props;
      
      // If it's a Link component, extract just the text content
      if (props?.href || props?.className?.includes("link")) {
        return extractText(props.children);
      }

      // Handle children
      if (props?.children) {
        const children = props.children;
        
        // Array of children
        if (Array.isArray(children)) {
          return children
            .map((child: any) => {
              // Handle list items
              if (child?.props?.children) {
                const childText = extractText(child.props.children);
                return childText;
              }
              return extractText(child);
            })
            .filter(Boolean)
            .join("; ");
        }
        
        // Single child
        return extractText(children);
      }
    }

    // Handle arrays directly
    if (Array.isArray(node)) {
      return node
        .map((item) => extractText(item))
        .filter(Boolean)
        .join("; ");
    }
  }

  // Fallback: convert to string
  return String(node);
}

/**
 * Generates FAQPage schema from FAQ data
 * Converts React.ReactNode answers to plain text using deterministic rules
 */
export function getFAQPageSchema(
  faqs: Array<{ question: string; answer: string | React.ReactNode }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const answerText = extractText(faq.answer);
      
      // Verify no "[object Object]" appears
      if (answerText.includes("[object Object]")) {
        console.warn(`FAQ answer contains "[object Object]": ${faq.question}`);
      }

      return {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText,
        },
      };
    }),
  };
}







