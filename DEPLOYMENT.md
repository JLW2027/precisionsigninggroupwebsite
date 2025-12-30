# Deployment Guide - Precision Signing Group Website

This guide will walk you through deploying your website to Vercel and connecting your GoDaddy domain.

## Prerequisites

- GitHub account (free)
- Vercel account (free tier available)
- Access to your GoDaddy domain settings
- Your website code ready to deploy

## Step 1: Push Code to GitHub

1. Create a new repository on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it something like "precision-signing-group-website"
   - Keep it private if desired

2. Initialize git in your project (if not already done):
```bash
cd /Users/johnwilkes/Desktop/Precision_Signing_Group.Website2025
git init
git add .
git commit -m "Initial commit - Precision Signing Group website"
```

3. Push to GitHub:
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Visit [vercel.com](https://vercel.com) and sign up/login
   - Recommended: Sign up with GitHub for seamless integration

2. Click "Add New..." → "Project"

3. Import your GitHub repository:
   - Select your repository from the list
   - Or paste the repository URL

4. Configure your project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. Click "Deploy"
   - Vercel will build and deploy your site
   - This typically takes 2-3 minutes

6. Your site is now live!
   - You'll receive a URL like: `https://your-project-name.vercel.app`

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd /Users/johnwilkes/Desktop/Precision_Signing_Group.Website2025
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N** (first time)
   - Project name? `precision-signing-group`
   - Directory? `./`
   - Override settings? **N**

5. Deploy to production:
```bash
vercel --prod
```

## Step 3: Connect Your GoDaddy Domain

### In Vercel Dashboard:

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter your domain: `precisionsigninggroup.com`
4. Also add: `www.precisionsigninggroup.com`
5. Click "Add"

Vercel will show you DNS records to configure. Keep this page open!

### DNS Configuration Options:

#### Option A: Using Nameservers (Recommended - Easiest)

Vercel may provide nameservers. If so:

1. In GoDaddy:
   - Go to "My Products" → Select your domain
   - Click "Manage DNS"
   - Scroll to "Nameservers" section
   - Click "Change"
   - Select "Custom"
   - Enter Vercel's nameservers (provided by Vercel)
   - Save

This gives Vercel full DNS control and is the simplest option.

#### Option B: Using DNS Records (More Control)

If you want to keep GoDaddy as your nameserver:

1. In GoDaddy:
   - Go to "My Products" → Select your domain
   - Click "Manage DNS"

2. Add A Record for root domain:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP - verify in Vercel dashboard)
   - TTL: 600 seconds

3. Add CNAME Record for www:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (verify in Vercel dashboard)
   - TTL: 600 seconds

4. Delete conflicting records:
   - Remove any existing A records pointing to other IPs
   - Remove any CNAME records for @ or www that conflict

5. Save all changes

### Verify DNS Configuration:

1. Wait for DNS propagation (5 minutes to 48 hours, usually 10-30 minutes)

2. Check status in Vercel:
   - Go to Settings → Domains
   - Look for green checkmarks next to your domains

3. Test your domain:
   - Visit `https://www.precisionsigninggroup.com`
   - Visit `https://precisionsigninggroup.com`
   - Both should work!

## Step 4: Configure SSL Certificate

Good news: Vercel automatically provisions SSL certificates for your domain!

- Certificates are free (via Let's Encrypt)
- Auto-renewal is handled by Vercel
- HTTPS is enforced automatically

## Step 5: Post-Deployment Checklist

### Update Your Google Form

1. Create your intake form at [forms.google.com](https://forms.google.com)

2. Required fields:
   - Full Name (Short answer)
   - Phone Number (Short answer)
   - Email Address (Short answer)
   - Service Type (Dropdown with your 6 services)
   - Preferred Date (Date picker)
   - Preferred Time (Short answer)
   - Location/City (Short answer)
   - Number of Documents (Short answer)
   - Additional Details (Paragraph)

3. Get the embed code:
   - Click "Send" button
   - Click the `<>` (embed) icon
   - Copy the iframe code

4. Update your website:
   - Edit `app/contact/page.tsx`
   - Find the placeholder section
   - Replace with your iframe code
   - Commit and push to GitHub (Vercel will auto-deploy)

### Test Everything:

- [ ] Homepage loads correctly
- [ ] All service pages work
- [ ] Contact form displays
- [ ] Navigation works on mobile
- [ ] All links are functional
- [ ] Footer displays correctly
- [ ] Forms submit successfully

### SEO Setup:

1. Submit your sitemap to Google:
   - Visit [Google Search Console](https://search.google.com/search-console)
   - Add your property: `https://www.precisionsigninggroup.com`
   - Submit sitemap: `https://www.precisionsigninggroup.com/sitemap.xml`

2. Verify site ownership (Google will provide options)

## Step 6: Continuous Deployment

Great news! Vercel is now watching your GitHub repository:

- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Rollback capability if needed

To update your site:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically build and deploy within 2-3 minutes.

## Monitoring & Analytics

### Add Analytics (Optional):

1. In Vercel Dashboard:
   - Go to your project
   - Click "Analytics" tab
   - Enable Vercel Analytics (free tier available)

2. Or add Google Analytics:
   - Get your GA4 tracking ID
   - Add to `app/layout.tsx`

## Troubleshooting

### Domain Not Working?

**DNS hasn't propagated yet:**
- Wait 10-30 minutes, sometimes up to 48 hours
- Check DNS with: [dnschecker.org](https://dnschecker.org)

**Wrong DNS records:**
- Double-check A and CNAME records match Vercel's instructions
- Remove any conflicting records

**SSL certificate not issued:**
- DNS must be properly configured first
- Can take 10-15 minutes after DNS is correct
- Check Vercel dashboard for certificate status

### Build Failing?

**Check the build logs in Vercel:**
- Go to your project → "Deployments"
- Click on the failed deployment
- Review the logs for errors

**Common fixes:**
```bash
# Clear cache and rebuild locally first
rm -rf .next node_modules
npm install
npm run build
```

### Site is slow?

**Next.js Image optimization:**
- Make sure you're using `next/image` for images
- Optimize image sizes before uploading

**Check Vercel Analytics:**
- Identify slow pages
- Optimize as needed

## Support & Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GoDaddy DNS Help**: [godaddy.com/help](https://www.godaddy.com/help)

## Cost Breakdown

- **Vercel Hosting**: Free tier includes:
  - Unlimited bandwidth
  - 100GB/month bandwidth
  - Automatic SSL
  - Perfect for this website

- **GoDaddy Domain**: Your existing registration fee (typically $15-20/year)

- **Total Monthly Cost**: $0 (using free tiers)

## Future Enhancements

Consider adding:
- [ ] Contact phone number and email (once you're ready to share)
- [ ] Professional headshot or business logo
- [ ] Customer testimonials
- [ ] Service area map integration
- [ ] Online booking system
- [ ] Payment processing for deposits
- [ ] Live chat widget

---

**Questions?** Review the Vercel docs or check your deployment logs for specific error messages.

**Ready to deploy?** Start with Step 1 above!













