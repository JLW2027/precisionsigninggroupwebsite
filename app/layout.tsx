import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getOrganizationSchema, ORGANIZATION_SAME_AS } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.precisionsigninggroup.com"),
  title: "Precision Signing Group | Business & Estate Notary in Puget Sound",
  description: "Precision Signing Group specializes in business and estate document execution for owners, fiduciaries, and professional offices across the Puget Sound region. Our role is simple: execute accurately, professionally, and without disruption.",
  keywords: "business notary, estate planning notary, notary public, Puget Sound, Seattle, fiduciary notary, attorney notary, business documents, estate documents",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Precision Signing Group | Business & Estate Notary in Puget Sound",
    description: "Precision Signing Group specializes in business and estate document execution for owners, fiduciaries, and professional offices across the Puget Sound region.",
    url: "/",
    siteName: "Precision Signing Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Signing Group | Business & Estate Notary",
    description: "Precision Signing Group specializes in business and estate document execution for owners, fiduciaries, and professional offices across the Puget Sound region.",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema(ORGANIZATION_SAME_AS);

  return (
    <html lang="en">
      <body className={inter.className}>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
