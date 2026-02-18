import type { Metadata } from "next";
import Hero from "@/components/for-law-firms/Hero";
import WhoWeSupport from "@/components/for-law-firms/WhoWeSupport";
import Services from "@/components/for-law-firms/Services";
import WhyPSG from "@/components/for-law-firms/WhyPSG";
import Workflow from "@/components/for-law-firms/Workflow";
import CTA from "@/components/for-law-firms/CTA";

export const metadata: Metadata = {
  title: "For Law Firms | Precision Signing Group",
  description:
    "Professional document execution and notarial services for attorneys and law firms across the Puget Sound region.",
  alternates: {
    canonical: "/for-law-firms",
  },
  openGraph: {
    title: "For Law Firms | Precision Signing Group",
    description:
      "Professional document execution and notarial services for attorneys and law firms across the Puget Sound region.",
    url: "/for-law-firms",
    type: "website",
  },
};

export default function ForLawFirmsPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeSupport />
      <Services />
      <WhyPSG />
      <Workflow />
      <CTA />
    </div>
  );
}
