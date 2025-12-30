import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer from "@/components/StaggerContainer";
import { services } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { getLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Precision Signing Group | Mobile Notary Services in Puget Sound",
  description: "Professional mobile notary and loan signing services throughout the Puget Sound region. We come to you for maximum convenience.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Precision Signing Group | Mobile Notary Services in Puget Sound",
    description: "Professional mobile notary and loan signing services throughout the Puget Sound region. We come to you for maximum convenience.",
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
      <section id="services" className="py-24 bg-gradient-to-b from-white to-neutral-light/30 relative overflow-hidden">
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
          <AnimatedSection variant="fadeUp" className="text-center mb-20">
            <h2 className="text-5xl font-bold text-neutral-dark mb-6">
              Our Services
            </h2>
            <p className="text-2xl text-neutral-dark max-w-5xl mx-auto leading-relaxed">
              Precision Signing Group provides professional, mobile notary services throughout the Greater Puget Sound Area. We specialize in loan signings, general notarizations, and business document services. Our certified notary public comes to your location, making the process convenient and stress-free.
            </p>
          </AnimatedSection>

          <div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {services
                .filter((service) => !['real-estate', 'estate-planning', 'mobile-notary'].includes(service.slug))
                .map((service) => (
                  <ServiceCard
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.shortDescription}
                    href={`/services/${service.slug}`}
                  />
                ))}
            </StaggerContainer>
            
            {/* Mobile Notary Services - Centered */}
            <div className="flex justify-center">
              <StaggerContainer>
                {services
                  .filter((service) => service.slug === 'mobile-notary')
                  .map((service) => (
                    <ServiceCard
                      key={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.shortDescription}
                      href={`/services/${service.slug}`}
                      callout={
                        service.slug === "mobile-notary" ? (
                          <span className="text-[#dc2626] font-bold uppercase tracking-wide">
                            WE COME TO YOU!
                          </span>
                        ) : undefined
                      }
                    />
                  ))}
              </StaggerContainer>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-neutral-dark/70 leading-tight max-w-none">
              I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
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
                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                  Serving the Puget Sound region, we provide professional, reliable, and convenient mobile notary services. Our commitment to excellence ensures your documents are handled with care and professionalism. There&apos;s no place we won&apos;t go for you!
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
                      Certified & Experienced
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed">
                      Licensed notary public and certified loan signing agent
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
                      Mobile Convenience
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed">
                      We come to your home, office, or preferred location
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
                      Fast & Reliable
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed">
                      Same-day service available with prompt document handling
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
                      Puget Sound Coverage
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed">
                      Serving Seattle, Tacoma, Bellevue, Everett, and beyond
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
                <div className="mt-10 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-soft">
                  <p className="text-lg text-neutral-dark leading-relaxed">
                    <strong className="text-accent">Note:</strong> Travel fees may apply based on location and distance. Contact us for a detailed quote.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden">
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
      <section className="py-20 bg-gradient-to-b from-neutral-light/50 to-white">
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
