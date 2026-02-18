import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer from "@/components/StaggerContainer";
import { serviceCategories } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { getLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Precision Signing Group | Business & Estate Notary in Puget Sound",
  description: "Structured document execution for business, estate, and fiduciary matters. Professional notarial support for attorneys, business owners, trustees, and individuals across the Puget Sound region.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Precision Signing Group | Business & Estate Notary in Puget Sound",
    description: "Structured document execution for business, estate, and fiduciary matters. Professional notarial support for attorneys, business owners, trustees, and individuals across the Puget Sound region.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 md:py-28 bg-gradient-to-b from-white to-neutral-light/30 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ryan-wilson-HkF6feHrGBE-unsplash.jpg"
            alt="Seattle cityscape"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="section-container relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-dark mb-6">
              Our Services
            </h2>
            <p className="text-xl text-neutral-dark max-w-[700px] mx-auto leading-relaxed">
              We support attorneys, business owners, trustees, and individuals with structured document execution and professional notarial services tailored to the complexity of the matter.
            </p>
          </AnimatedSection>

          <div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories
                .filter((c) => ["business-owner-services", "estate-planning-services", "for-law-firms"].includes(c.slug))
                .map((category) => {
                  const descriptions: Record<string, string> = {
                    "business-owner-services": "Execution support for corporate governance, operating agreements, transactions, and structured business matters.",
                    "estate-planning-services": "Discreet notarial support for estate planning, trusts, powers of attorney, and fiduciary documents.",
                    "for-law-firms": "Reliable execution support for estate planning, litigation matters, corporate transactions, and real property documents.",
                  };
                  return (
                    <ServiceCard
                      key={category.id}
                      icon=""
                      title={category.title}
                      description={descriptions[category.slug] || category.intro}
                      href={`/services/${category.slug}`}
                    />
                  );
                })}
            </StaggerContainer>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-dark/70 leading-tight max-w-[700px] mx-auto">
              Not an attorney. Documents must be prepared by legal counsel. No legal advice is provided.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Service Mobile Notary Support - Secondary */}
      <section className="py-16 md:py-20 bg-neutral-light/40 relative overflow-hidden">
        <div className="section-container">
          <AnimatedSection variant="fadeUp" className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6">
              Full-Service Mobile Notary Support
            </h2>
            <p className="text-lg text-neutral-dark/90 leading-relaxed mb-6">
              In addition to structured estate and business engagements, we provide full-service mobile notary support for individuals and everyday document needs throughout the Puget Sound region.
            </p>
            <p className="text-base text-neutral-dark/80 leading-relaxed mb-8">
              This includes acknowledgments, jurats, affidavits, certified copies (where permitted), and signature witnessing — delivered with the same professionalism and reliability.
            </p>
            <Link
              href="/services/general-notary"
              className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-28 bg-white relative overflow-hidden">
        {/* Background Image for entire section */}
        <div className="absolute inset-0 z-0">
            <Image
            src="/wei-zeng-G2kQ0r7ZxvY-unsplash.jpg"
            alt="Seattle cityscape"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Why Choose Precision Signing Group?
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.2}>
                <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-[700px]">
                  Precision Signing Group serves professionals and individuals who require careful, compliant, and efficient document execution. We integrate seamlessly into business, estate, and legal workflows — ensuring every signing is handled correctly the first time.
                </p>
              </AnimatedSection>
              <StaggerContainer staggerDelay={0.15} className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center mr-4 mt-1 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-2xl">
                      Licensed and Commissioned
                    </h3>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Washington Notary Public
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center mr-4 mt-1 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-2xl">
                      Mobile Service
                    </h3>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      To offices, residences, and agreed meeting locations
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center mr-4 mt-1 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-2xl">
                      Responsive Scheduling
                    </h3>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Same-day and urgent scheduling when available
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center mr-4 mt-1 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-2xl">
                      Regional Coverage
                    </h3>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Throughout the Greater Puget Sound region
                    </p>
                  </div>
                </div>
              </StaggerContainer>
            </div>

            <AnimatedSection variant="slideLeft" delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden shadow-large bg-primary-dark p-10 text-white ml-24">
                <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-lg">
                  Service Area
                </h3>
                <p className="text-lg text-blue-100 mb-6">
                  Serving the Greater Puget Sound region, including:
                </p>
                <div className="space-y-4">
                  <p className="flex items-center text-xl text-white drop-shadow-md">
                    <span className="mr-3 text-accent text-2xl drop-shadow-lg">•</span>
                    Seattle & Greater Seattle Area
                  </p>
                  <p className="flex items-center text-xl text-white drop-shadow-md">
                    <span className="mr-3 text-accent text-2xl drop-shadow-lg">•</span>
                    Tacoma & Pierce County
                  </p>
                  <p className="flex items-center text-xl text-white drop-shadow-md">
                    <span className="mr-3 text-accent text-2xl drop-shadow-lg">•</span>
                    Bellevue & Eastside Communities
                  </p>
                  <p className="flex items-center text-xl text-white drop-shadow-md">
                    <span className="mr-3 text-accent text-2xl drop-shadow-lg">•</span>
                    Everett & Snohomish County
                  </p>
                  <p className="flex items-center text-xl text-white drop-shadow-md">
                    <span className="mr-3 text-accent text-2xl drop-shadow-lg">•</span>
                    Surrounding Puget Sound Communities
                  </p>
                </div>
                <p className="mt-8 text-sm text-blue-200/90">
                  Travel fees may apply based on location and distance. Contact us for a detailed quote.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden">
        {/* Accent glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="section-container text-center relative z-10">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Get Started?
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.4}>
            <Link href="/contact" className="btn-secondary inline-block text-xl px-10 py-4">
              Schedule Your Appointment
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 md:py-28 bg-gradient-to-b from-neutral-light/50 to-white">
        <div className="section-container">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection variant="fadeUp">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white text-3xl mb-6 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                  📞
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                  Call Us
                </h3>
                <p className="text-neutral leading-relaxed text-lg mb-2">
                  Contact us for quotes and scheduling
                </p>
                <a
                  href="tel:+14253904713"
                  className="text-primary hover:text-accent font-semibold transition-colors text-lg"
                >
                  (425) 390-4713
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark text-white text-3xl mb-6 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                  Email Us
                </h3>
                <p className="text-neutral leading-relaxed text-lg mb-2">
                  Quick response to all inquiries
                </p>
                <a
                  href="mailto:john.wilkes@precisionsigninggroup.com"
                  className="text-primary hover:text-accent font-semibold transition-colors break-all text-lg"
                >
                  john.wilkes@precisionsigninggroup.com
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white text-3xl mb-6 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                  🕐
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                  Flexible Hours
                </h3>
                <p className="text-neutral leading-relaxed text-lg">
                  Evening and weekend appointments available
                </p>
              </div>
            </AnimatedSection>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
