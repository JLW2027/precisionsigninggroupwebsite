---
name: SEO Implementation Plan
overview: Comprehensive SEO implementation plan for Precision Signing Group website based on SEO_Files package, covering public files, JSON-LD structured data, page metadata, and Google Search Console/GBP setup.
todos:
  - id: phase1-public-files
    content: Copy static public files from SEO_Files to /public directory (robots.txt, sitemap.xml, humans.txt, site.webmanifest, security.txt)
    status: pending
  - id: phase2-1-seo-utils
    content: Create /lib/seo.ts with utility functions for generating JSON-LD schemas (Organization, LocalBusiness, FAQPage)
    status: pending
  - id: phase2-2-org-schema
    content: Implement Organization schema in app/layout.tsx using Script component with application/ld+json
    status: pending
    dependencies:
      - phase2-1-seo-utils
  - id: phase2-3-localbusiness-schema
    content: Implement LocalBusiness schema on homepage and contact page
    status: pending
    dependencies:
      - phase2-1-seo-utils
  - id: phase2-4-faq-schema
    content: Implement FAQPage schema on FAQ page, converting FAQ content to JSON-LD format
    status: pending
    dependencies:
      - phase2-1-seo-utils
  - id: phase3-1-canonicals
    content: Add canonical URLs to all pages using metadata.alternates.canonical
    status: pending
  - id: phase3-2-metadata-enhance
    content: Enhance page metadata with OpenGraph and Twitter card data
    status: pending
  - id: phase3-3-faq-metadata
    content: Add metadata export to FAQ page (app/faq/page.tsx)
    status: pending
  - id: phase4-sitemap-update
    content: Update app/sitemap.ts to include signing-services page and improve lastModified dates
    status: pending
  - id: phase7-manifest-update
    content: Populate site.webmanifest with proper PWA manifest data
    status: pending
    dependencies:
      - phase1-public-files
  - id: phase5-search-console
    content: "EXTERNAL: Verify domain in Google Search Console and submit sitemap"
    status: pending
    dependencies:
      - phase4-sitemap-update
  - id: phase6-gbp-setup
    content: "EXTERNAL: Set up and optimize Google Business Profile with NAP consistency"
    status: pending
---

# SEO Implementation Plan for Precision Signing Group

## Overview
This plan implements SEO best practices for the Precision Signing Group Next.js (App Router) website, based on the authoritative SEO_Files package. The implementation follows Next.js App Router conventions and maintains separation between code changes, configuration, and external Google actions.

## Current State Analysis
- ✅ `app/robots.ts` exists (Next.js route handler)
- ✅ `app/sitemap.ts` exists (Next.js route handler)
- ✅ Basic metadata in `app/layout.tsx` and some pages
- ✅ FAQ page exists with content structure
- ❌ No JSON-LD structured data implemented
- ❌ Public files (robots.txt, sitemap.xml, etc.) not in `/public`
- ❌ Missing canonical URLs
- ❌ FAQPage structured data not implemented
- ❌ Organization/LocalBusiness schemas not implemented

## Implementation Steps

### Phase 1: Public Files Setup

#### Step 1.1: Copy Static Public Files
**Location**: Copy from `SEO_Files/extracted/public/` to `/public/`

**Files to copy:**
1. `robots.txt` → `/public/robots.txt`
   - Note: This will coexist with `app/robots.ts` (Next.js will prioritize route handler)
   - Keep both for redundancy
   
2. `sitemap.xml` → `/public/sitemap.xml`
   - Note: This is a static fallback; `app/sitemap.ts` is the primary source
   - Static file serves as backup if route handler fails

3. `humans.txt` → `/public/humans.txt`
   - Simple text file for human-readable site info

4. `site.webmanifest` → `/public/site.webmanifest`
   - PWA manifest file (currently empty `{}`, needs content)

5. `.well-known/security.txt` → `/public/.well-known/security.txt`
   - Security contact information
   - Update email to: `security@precisionsigninggroup.com` or appropriate contact

**Action**: Copy files, update security.txt email if needed

---

### Phase 2: JSON-LD Structured Data Implementation

#### Step 2.1: Create JSON-LD Utility Functions
**File**: Create `/lib/seo.ts`

**Purpose**: Centralized functions for generating JSON-LD schemas

**Functions needed:**
- `getOrganizationSchema()` - Returns Organization schema
- `getLocalBusinessSchema()` - Returns LocalBusiness schema  
- `getFAQPageSchema(faqs)` - Returns FAQPage schema from FAQ data
- `generateStructuredData(schema)` - Helper to inject script tag

**Implementation**: Create utility module with typed schema builders

---

#### Step 2.2: Implement Organization Schema (Site-wide)
**File**: `app/layout.tsx`

**Schema Source**: `SEO_Files/extracted/jsonld/organization.json` (currently placeholder)

**Required Fields** (based on Schema.org Organization):
- `@context`: "https://schema.org"
- `@type`: "Organization"
- `name`: "Precision Signing Group"
- `url`: "https://www.precisionsigninggroup.com"
- `logo`: Logo URL
- `contactPoint`: Phone and email
- `address`: Business address (if available)
- `sameAs`: Social media profiles (if any)

**Implementation**: 
- Import utility from `/lib/seo.ts`
- Add `<Script>` tag in RootLayout component
- Inject Organization schema in `<head>`

---

#### Step 2.3: Implement LocalBusiness Schema (Homepage & Contact)
**Files**: 
- `app/page.tsx` (homepage)
- `app/contact/page.tsx`

**Schema Source**: `SEO_Files/extracted/jsonld/localbusiness.json` (currently placeholder)

**Required Fields** (based on Schema.org LocalBusiness):
- `@context`: "https://schema.org"
- `@type`: "LocalBusiness" (or "NotaryPublic" if available)
- `name`: "Precision Signing Group"
- `image`: Business image
- `telephone`: "(425) 390-4713"
- `email`: "john.wilkes@precisionsigninggroup.com"
- `address`: Full address object
- `geo`: Geographic coordinates (if available)
- `areaServed`: "Puget Sound region"
- `priceRange`: If applicable
- `openingHours`: Service hours
- `serviceArea`: Service coverage area

**Implementation**:
- Convert homepage to use metadata export (if not already)
- Add `<Script>` tag with LocalBusiness schema
- Repeat for contact page

---

#### Step 2.4: Implement FAQPage Schema
**File**: `app/faq/page.tsx`

**Schema Source**: 
- `SEO_Files/extracted/jsonld/faqpage.example.json` (placeholder)
- `notary-faq-jsonld.json` (existing file with full FAQ structure)

**Required Structure**:
- `@context`: "https://schema.org"
- `@type`: "FAQPage"
- `mainEntity`: Array of Question/Answer objects

**Data Source**: `src/content/notary-faqs.tsx` - Extract FAQ items and convert to JSON-LD format

**Implementation**:
- Create function to convert `notaryFaqContent.faqs` to FAQPage schema
- Handle React.ReactNode answers (convert to plain text)
- Inject via `<Script>` tag in FAQ page component
- Ensure answers are plain text strings (no HTML/JSX)

---

### Phase 3: Page-Level Metadata Enhancement

#### Step 3.1: Add Canonical URLs
**Files**: All page components with metadata exports

**Implementation Pattern**:
```typescript
export const metadata: Metadata = {
  // ... existing metadata
  alternates: {
    canonical: 'https://www.precisionsigninggroup.com/[page-path]'
  }
}
```

**Pages to update**:
1. `app/layout.tsx` - Root canonical
2. `app/page.tsx` - Homepage canonical
3. `app/contact/page.tsx` - Contact canonical
4. `app/faq/page.tsx` - FAQ canonical (convert to metadata export)
5. `app/services/[slug]/page.tsx` - Dynamic service page canonicals
6. `app/signing-services/page.tsx` - Signing services canonical

**Note**: Service pages need dynamic canonical URLs based on slug

---

#### Step 3.2: Enhance Existing Metadata
**Files**: All pages with metadata exports

**Enhancements needed**:
- Add `openGraph` metadata (title, description, images, type)
- Add `twitter` card metadata
- Ensure unique titles and descriptions per page
- Add `keywords` where appropriate (though less important now)

**Priority Pages**:
1. Homepage (`app/page.tsx`)
2. Service pages (`app/services/[slug]/page.tsx`)
3. Contact page (`app/contact/page.tsx`)
4. FAQ page (`app/faq/page.tsx`)

---

#### Step 3.3: Convert FAQ Page to Metadata Export
**File**: `app/faq/page.tsx`

**Current State**: Uses "use client" directive, no metadata export

**Action**: 
- Add metadata export (can coexist with "use client" if needed)
- Or create separate metadata file/function
- Ensure FAQ page has proper title, description, canonical

---

### Phase 4: Sitemap Enhancement

#### Step 4.1: Update Dynamic Sitemap
**File**: `app/sitemap.ts`

**Current State**: Has basic structure but missing:
- `/signing-services` page
- Proper lastModified dates (currently all use `new Date()`)
- Change frequency optimization

**Updates needed**:
1. Add `/signing-services` entry
2. Set realistic `lastModified` dates (or use file modification times)
3. Adjust priorities based on page importance
4. Consider adding `images` array for image sitemap support

---

### Phase 5: Google Search Console Setup

#### Step 5.1: Domain Verification
**Source**: `SEO_Files/extracted/google/search-console-checklist.txt`

**External Actions** (Google):
1. Access Google Search Console: https://search.google.com/search-console
2. Add property: `www.precisionsigninggroup.com`
3. Verify domain ownership using one of:
   - HTML file upload (upload verification file to `/public/`)
   - HTML tag (add meta tag to `app/layout.tsx`)
   - DNS record (add TXT record to domain DNS)
   - Google Analytics (if connected)
4. Verify both `www` and non-www versions if applicable

**Code Changes** (if HTML tag method):
- Add verification meta tag to `app/layout.tsx` metadata

---

#### Step 5.2: Submit Sitemap
**External Actions** (Google):
1. In Google Search Console, navigate to "Sitemaps"
2. Submit: `https://www.precisionsigninggroup.com/sitemap.xml`
3. Monitor submission status
4. Check for errors/warnings

**No code changes needed** - sitemap already accessible at `/sitemap.xml`

---

#### Step 5.3: Request Indexing (Initial)
**External Actions** (Google):
1. Use "URL Inspection" tool in Search Console
2. Request indexing for key pages:
   - Homepage
   - Contact page
   - FAQ page
   - Main service pages

---

### Phase 6: Google Business Profile Optimization

#### Step 6.1: GBP Setup Checklist
**Source**: `SEO_Files/extracted/google/gbp-optimization.txt`

**External Actions** (Google):
1. Claim/verify Google Business Profile
2. Ensure NAP consistency:
   - **N**ame: "Precision Signing Group"
   - **A**ddress: [Business address]
   - **P**hone: "(425) 390-4713"
3. Add business categories:
   - Notary Public
   - Mobile Notary Service
   - Loan Signing Service
4. Add service areas: Puget Sound region cities
5. Add business hours
6. Add photos
7. Enable messaging (if desired)
8. Add website URL: `https://www.precisionsigninggroup.com`

**Code Changes** (for consistency):
- Ensure NAP appears consistently across site:
  - Footer (`components/Footer.tsx`) ✅ Already has phone/email
  - Contact page (`app/contact/page.tsx`) ✅ Already has contact info
  - LocalBusiness schema (Phase 2.3) - Will ensure consistency

---

#### Step 6.2: GBP Landing Page Optimization
**External Actions** (Google):
1. Set primary landing page in GBP settings
2. Ensure landing page has:
   - Clear service descriptions
   - Contact information
   - Service area information
   - Call-to-action buttons

**Code Review**:
- Verify homepage (`app/page.tsx`) has all required elements ✅
- Verify contact page has clear CTAs ✅

---

### Phase 7: Additional SEO Enhancements

#### Step 7.1: Update site.webmanifest
**File**: `/public/site.webmanifest`

**Current State**: Empty `{}`

**Content needed**:
```json
{
  "name": "Precision Signing Group",
  "short_name": "PSG",
  "description": "Professional mobile notary and loan signing services",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#0f172a",
  "icons": [...]
}
```

**Action**: Populate with proper PWA manifest data

---

#### Step 7.2: Update humans.txt
**File**: `/public/humans.txt`

**Current State**: "Precision Signing Group — Seattle, WA"

**Enhancement**: Add more details (team, contact, etc.) if desired

---

#### Step 7.3: Security.txt Enhancement
**File**: `/public/.well-known/security.txt`

**Current State**: `Contact: mailto:security@precisionsigninggroup.com`

**Action**: Verify email is correct or update to appropriate security contact

---

## Implementation Order

### Week 1: Foundation
1. ✅ Phase 1: Copy public files
2. ✅ Phase 2.1: Create SEO utility functions
3. ✅ Phase 2.2: Implement Organization schema
4. ✅ Phase 2.3: Implement LocalBusiness schema

### Week 2: Content & Metadata
5. ✅ Phase 2.4: Implement FAQPage schema
6. ✅ Phase 3.1: Add canonical URLs
7. ✅ Phase 3.2: Enhance metadata
8. ✅ Phase 3.3: Convert FAQ page metadata

### Week 3: Optimization
9. ✅ Phase 4.1: Update sitemap
10. ✅ Phase 7.1-7.3: Additional enhancements

### Week 4: Google Setup (External)
11. ✅ Phase 5: Google Search Console setup
12. ✅ Phase 6: Google Business Profile optimization

---

## Testing Checklist

After implementation, verify:
- [ ] `/robots.txt` accessible (both route handler and static file)
- [ ] `/sitemap.xml` accessible and valid
- [ ] JSON-LD schemas validate (use Google Rich Results Test)
- [ ] All pages have canonical URLs
- [ ] FAQPage schema appears on `/faq` page
- [ ] Organization schema appears site-wide
- [ ] LocalBusiness schema appears on homepage and contact
- [ ] Metadata appears correctly in page source
- [ ] Google Search Console verification successful
- [ ] Sitemap submitted and processed
- [ ] GBP NAP matches website

---

## Notes

1. **Next.js App Router**: Uses route handlers (`robots.ts`, `sitemap.ts`) which take precedence over static files
2. **JSON-LD Injection**: Use Next.js `<Script>` component with `type="application/ld+json"`
3. **Metadata**: Next.js 14+ uses `Metadata` type exports, not `<Head>` component
4. **FAQ Answers**: Some answers are React.ReactNode - need to convert to plain text for JSON-LD
5. **Dynamic Routes**: Service pages need dynamic metadata and canonicals based on slug
6. **Client Components**: FAQ page uses "use client" - metadata can still be exported separately

---

## Files to Create/Modify

### New Files:
- `/lib/seo.ts` - SEO utility functions
- `/public/robots.txt` - Static robots file
- `/public/sitemap.xml` - Static sitemap backup
- `/public/humans.txt` - Humans.txt file
- `/public/site.webmanifest` - PWA manifest
- `/public/.well-known/security.txt` - Security contact

### Modified Files:
- `/app/layout.tsx` - Add Organization schema, enhance metadata
- `/app/page.tsx` - Add LocalBusiness schema, canonical, enhance metadata
- `/app/contact/page.tsx` - Add LocalBusiness schema, canonical, enhance metadata
- `/app/faq/page.tsx` - Add FAQPage schema, metadata export, canonical
- `/app/services/[slug]/page.tsx` - Add dynamic metadata, canonical
- `/app/signing-services/page.tsx` - Add canonical, enhance metadata
- `/app/sitemap.ts` - Add signing-services page, improve dates

### External Actions Only:
- Google Search Console verification and sitemap submission
- Google Business Profile setup and optimization