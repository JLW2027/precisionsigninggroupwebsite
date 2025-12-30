import type { Metadata } from "next";
import { services, serviceCategories } from "@/lib/services";
import ServiceClient from "./service-client";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = serviceCategories.find((c) => c.slug === params.slug);
  const service = !category ? services.find((s) => s.slug === params.slug) : null;
  
  const title = category?.title || service?.title || "Service";
  const description = category?.intro || service?.fullDescription || "Professional notary services";
  
  return {
    title: `${title} | Precision Signing Group`,
    description,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
    openGraph: {
      title: `${title} | Precision Signing Group`,
      description,
      url: `/services/${params.slug}`,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServiceClient slug={params.slug} />;
}
