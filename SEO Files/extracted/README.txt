SEO FILES PACKAGE — PrecisionSigningGroup.com

This folder contains all SEO-related assets, metadata, and implementation guidance
for use with a Next.js (App Router) application.

CONTENTS
--------
/public/
  robots.txt
  sitemap.xml
  humans.txt
  site.webmanifest
  .well-known/security.txt

/jsonld/
  organization.json
  localbusiness.json
  faqpage.example.json

/google/
  search-console-checklist.txt
  gbp-optimization.txt

IMPLEMENTATION PRINCIPLES
-------------------------
- robots.txt + sitemap.xml must be publicly accessible
- JSON-LD injected via <Script type="application/ld+json">
- Organization schema: site-wide
- LocalBusiness schema: homepage/contact only
- FAQPage schema: FAQ page only

This folder is a SOURCE OF TRUTH for SEO configuration.
