import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getOrganizationSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.precisionsigninggroup.com"),
  title: "Precision Signing Group | Mobile Notary Services in Puget Sound",
  description: "Professional mobile notary and loan signing services throughout the Puget Sound region. General notary work, real estate documents, estate planning, and business documents.",
  keywords: "mobile notary, loan signing, notary public, Puget Sound, Seattle, notary services, real estate documents, estate planning",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Precision Signing Group | Mobile Notary Services in Puget Sound",
    description: "Professional mobile notary and loan signing services throughout the Puget Sound region.",
    url: "/",
    siteName: "Precision Signing Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Signing Group | Mobile Notary Services",
    description: "Professional mobile notary and loan signing services throughout the Puget Sound region.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en">
      <body className={inter.className}>
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
