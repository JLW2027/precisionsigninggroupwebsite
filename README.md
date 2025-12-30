# Precision Signing Group Website

A modern, professional website for Precision Signing Group - a mobile notary and loan signing service serving the Puget Sound region.

## Features

- Responsive design optimized for all devices
- Dynamic service pages with detailed information
- Contact form integration (Google Forms ready)
- SEO optimized with metadata
- Professional color scheme (blue, green, grey)
- Fast loading with Next.js optimizations

## Services Offered

1. **General Notary Services** - Comprehensive notarial services for personal and business documents
2. **Loan Signing Services** - Certified loan signing agent for mortgage transactions
3. **Real Estate Documents** - Property transfers, deeds, and real estate agreements
4. **Estate Planning Documents** - Wills, trusts, and healthcare directives
5. **Business Documents** - Corporate documents and commercial agreements
6. **Mobile Notary Services** - Convenient on-location service throughout Puget Sound

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Hosting platform (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── contact/
│   │   └── page.tsx        # Contact/intake form page
│   └── services/
│       └── [slug]/
│           └── page.tsx    # Dynamic service pages
├── components/
│   ├── Navigation.tsx      # Site navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section component
│   └── ServiceCard.tsx     # Service card component
├── lib/
│   └── services.ts         # Service data and content
└── public/                 # Static assets (images, etc.)
```

## Customization

### Adding Your Google Form

1. Create a Google Form at [forms.google.com](https://forms.google.com)
2. Include these fields:
   - Full Name
   - Phone Number
   - Email Address
   - Service Type (dropdown)
   - Preferred Date/Time
   - Location
   - Number of Documents
   - Additional Details
3. Get the embed code: Click "Send" → Select embed icon
4. Update `app/contact/page.tsx` and replace the placeholder with your iframe code

### Updating Contact Information

Edit the following files to add your actual contact details:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Adding Images

Place images in the `public/` folder and reference them in components:
```tsx
import Image from 'next/image'
<Image src="/your-image.jpg" alt="Description" width={500} height={300} />
```

## Deployment to Vercel

### Step 1: Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js and configure build settings
5. Click "Deploy"

### Step 2: Connect Your GoDaddy Domain

#### In Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your domain: `www.precisionsigninggroup.com`
4. Vercel will provide DNS records to configure

#### In GoDaddy:
1. Log in to your GoDaddy account
2. Go to "My Products" → "Domains"
3. Click "DNS" next to your domain
4. Add the DNS records provided by Vercel:
   - **A Record**: Point to Vercel's IP (provided by Vercel)
   - **CNAME Record**: Point www to your Vercel domain

5. Save changes and wait for DNS propagation (can take up to 48 hours, usually faster)

### Step 3: Verify Setup

Once DNS propagates, visit your domain to ensure it's working correctly.

## Alternative Hosting Options

While Vercel is recommended, you can also deploy to:
- **Netlify** - Similar to Vercel, easy deployment
- **Cloudflare Pages** - Fast edge deployment
- **AWS Amplify** - Amazon's hosting solution
- **Traditional hosting** - Build static export with `next export`

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions for all pages
- Optimized page titles
- Mobile-responsive design
- Fast loading times
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse score targets: 90+ across all metrics
- Optimized images with Next.js Image component
- CSS optimization with Tailwind
- Code splitting with Next.js App Router

## Support

For questions about the website or to schedule notary services:
- Visit: www.precisionsigninggroup.com/contact
- Service Area: Puget Sound Region (Seattle, Tacoma, Bellevue, Everett)

## License

© 2024 Precision Signing Group. All rights reserved.
