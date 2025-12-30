"use client";

import { services, serviceCategories } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import ServiceBox from "@/components/ServiceBox";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import Accordion from "@/components/Accordion";
import { SubService } from "@/lib/services";

export default function ServiceClient({ slug }: { slug: string }) {
  const [selectedService, setSelectedService] = useState<SubService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if this is a new category-based service
  const category = serviceCategories.find((c) => c.slug === slug);
  
  // If not a category, check if it's an old-style service
  const service = !category ? services.find((s) => s.slug === slug) : null;

  if (!category && !service) {
    notFound();
  }

  // If it's a category-based service, render the new layout
  if (category) {
    const handleServiceClick = (subService: SubService) => {
      setSelectedService(subService);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setTimeout(() => setSelectedService(null), 300);
    };

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative text-white py-16 overflow-hidden">
          {/* Background Images for Service Pages */}
          {slug === "general-notary" && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/hunter-reilly-KsPM-LNDhUE-unsplash.jpg"
                alt="Professional notary services"
                fill
                className="object-cover"
              />
            </div>
          )}
          {slug === "loan-signing" && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/felipe-galvan-NAXwZWYVJPQ-unsplash.jpg"
                alt="Loan signing services"
                fill
                className="object-cover"
              />
            </div>
          )}
          {slug === "business-documents" && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/bruce-w-kjtcH8I27v4-unsplash.jpg"
                alt="Business documentation services"
                fill
                className="object-cover"
              />
            </div>
          )}
          {slug === "mobile-notary" && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/jingjie-wong-N-aJC2-MQK0-unsplash.jpg"
                alt="Mobile notary services"
                fill
                className="object-cover"
              />
            </div>
          )}
          
          {/* Gradient Background/Overlay */}
          <div className={`absolute inset-0 ${slug === "general-notary" || slug === "loan-signing" || slug === "business-documents" || slug === "mobile-notary" ? "bg-gradient-to-r from-primary/60 via-primary-dark/60 to-primary-dark/60" : "bg-gradient-to-r from-primary via-primary-dark to-primary-dark"} z-0`}></div>
          
          {/* Content */}
          <div className="section-container relative z-10">
            <div className="flex items-center mb-4">
              <Link href="/" className="text-blue-200 hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Services</span>
              <span className="mx-2">/</span>
              <span>{category.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {category.intro}
            </p>
          </div>
        </div>

        {/* Service Boxes Grid */}
        <div className="section-container py-16">
          <div className="mb-12">
            {/* First row - full width grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {category.subServices.slice(0, 3).map((subService) => (
                <ServiceBox
                  key={subService.id}
                  label={subService.label}
                  onClick={() => handleServiceClick(subService)}
                />
              ))}
            </div>
            {/* Second row - centered if there are 4 items */}
            {category.subServices.length === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="hidden lg:block"></div>
                <ServiceBox
                  key={category.subServices[3].id}
                  label={category.subServices[3].label}
                  onClick={() => handleServiceClick(category.subServices[3])}
                />
                <div className="hidden lg:block"></div>
              </div>
            )}
            {/* If more than 4 items, show remaining in grid */}
            {category.subServices.length > 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.subServices.slice(3).map((subService) => (
                  <ServiceBox
                    key={subService.id}
                    label={subService.label}
                    onClick={() => handleServiceClick(subService)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Disclosure Footer */}
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-base text-neutral-dark italic text-center">
              {category.disclosure.text}
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{category.cta.heading}</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              {category.cta.text}
            </p>
            <Link
              href="/contact"
              className="btn-secondary inline-block"
            >
              {category.cta.buttonLabel}
            </Link>
          </div>
        </div>

        {/* Modal */}
        <ServiceDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      </div>
    );
  }

  // Otherwise, render the old-style service page
  // This should never happen due to the check above, but TypeScript needs it
  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white py-16 overflow-hidden">
        {/* Background Images for Service Pages */}
        {slug === "mobile-notary" && (
          <div className="absolute inset-0 z-0">
            <Image
              src="/jingjie-wong-N-aJC2-MQK0-unsplash.jpg"
              alt="Mobile notary services"
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Gradient Background/Overlay */}
        <div className={`absolute inset-0 ${slug === "mobile-notary" ? "bg-gradient-to-r from-primary/60 via-primary-dark/60 to-primary-dark/60" : "bg-gradient-to-r from-primary via-primary-dark to-primary-dark"} z-0`}></div>
        
        <div className="section-container relative z-10">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Services</span>
            <span className="mx-2">/</span>
            <span>{service.title}</span>
          </div>
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              slug === "mobile-notary" ? "text-accent" : "text-white"
            }`}
          >
            {slug === "mobile-notary" 
              ? "Mobile Notary Services: We Come to YOU"
              : service.title}
          </h1>
          {slug === "mobile-notary" ? (
            <p className="text-2xl text-blue-100 max-w-3xl">
              Professional, compliant notarization delivered to homes, hospitals, care facilities, offices, and job sites throughout the Puget Sound region.
            </p>
          ) : (
            <p className="text-xl text-blue-100 max-w-3xl">
              {service.fullDescription}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {slug === "mobile-notary" ? (
              <>
                {/* Yes, We Will Go There! */}
                <section className="mb-16">
                  <h2 className="text-4xl font-bold text-neutral-dark mb-8">
                    Yes, We Will Go There!
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-dark mb-3">
                        Elder Care, Hospitals & Nursing Facilities
                      </h3>
                      <p className="text-lg text-neutral leading-relaxed">
                        Hospitals, assisted living facilities, rehabilitation centers, and nursing homes frequently require notarization under sensitive circumstances. I have experience working in healthcare environments and understand the importance of patience, privacy, coordination with staff, and respect for the client&rsquo;s condition and capacity. Appointments are conducted with care and professionalism appropriate to these settings.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-dark mb-3">
                        Busy Professionals & Corporate Clients
                      </h3>
                      <p className="text-lg text-neutral leading-relaxed">
                        Mobile notarization minimizes downtime for professionals and teams. I travel to offices, conference rooms, and designated meeting locations to support business, corporate, and real estate signings—allowing work to continue without unnecessary interruptions or rescheduling.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-dark mb-3">
                        Construction Sites & Inconvenient Commercial Locations
                      </h3>
                      <p className="text-lg text-neutral leading-relaxed">
                        Certain documents must be executed where the work is happening. I provide mobile notary services at construction sites, industrial locations, and other non-traditional commercial settings where leaving the site is impractical. Appointments are scheduled to align with operational needs and safety considerations.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-dark mb-3">
                        Time-Sensitive or After-Hours Needs
                      </h3>
                      <p className="text-lg text-neutral leading-relaxed">
                        Some notarizations cannot wait for standard business hours. By appointment and subject to availability, mobile notary services may be arranged for evenings, weekends, and urgent situations. Clear expectations and pricing are provided in advance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-dark mb-3">
                        Estate Planning & Family Matters
                      </h3>
                      <p className="text-lg text-neutral leading-relaxed">
                        Estate planning documents are often executed during periods of transition, urgency, or stress. Mobile notary services allow wills, powers of attorney, affidavits, and related documents to be notarized in a familiar, comfortable setting—without requiring travel or disruption. I work directly with individuals, families, and estate planning professionals to ensure appointments are handled calmly, clearly, and professionally.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How Mobile Notary Appointments Work */}
                <section className="mb-12">
                  <h2 className="text-4xl font-bold text-neutral-dark mb-6">
                    How Mobile Notary Appointments Work
                  </h2>
                  <p className="text-xl text-neutral leading-relaxed">
                    Once you request an appointment, I&rsquo;ll confirm the document type, location, and any special considerations such as witnesses or accessibility needs. You&rsquo;ll receive a clear quote upfront, including any travel fees. At the scheduled time, I arrive with all necessary supplies to complete the notarization efficiently and professionally—so you don&rsquo;t need to travel or rearrange your day.
                  </p>
                </section>

                {/* FAQs */}
                <section className="mb-12">
                  <h2 className="text-4xl font-bold text-neutral-dark mb-6">
                    Common Questions
                  </h2>
                  <div className="space-y-4">
                    <Accordion
                      question="What areas do you serve?"
                      answer="I serve the entire Puget Sound region, including Seattle, Tacoma, Bellevue, Everett, and surrounding communities. If you're unsure whether your location is within my service area, please don't hesitate to ask when you request an appointment."
                      defaultOpen={true}
                      questionClassName="text-xl md:text-2xl"
                      answerClassName="text-lg"
                    />
                    <Accordion
                      question="How much is the travel fee?"
                      answer="Travel fees vary based on distance and timing. When you request an appointment, I'll provide a clear, upfront quote that includes all fees—there are no surprises. You'll know exactly what to expect before we schedule."
                      defaultOpen={true}
                      questionClassName="text-xl md:text-2xl"
                      answerClassName="text-lg"
                    />
                    <Accordion
                      question="Do you offer same-day service?"
                      answer="Yes, subject to availability. I understand that some situations require urgent attention, so I do my best to accommodate same-day requests when possible. The earlier you contact me, the better I can accommodate your timeline."
                      defaultOpen={false}
                      questionClassName="text-xl md:text-2xl"
                      answerClassName="text-lg"
                    />
                  </div>
                </section>
              </>
            ) : (
              <>
                {/* Use Cases */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                    What We Can Help With
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.useCases.map((useCase, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-neutral-dark">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Process */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                    How It Works
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4 font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-neutral-dark">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="border-l-4 border-primary pl-6 py-2">
                        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-neutral">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-lg mb-8 sticky top-24">
              {slug === "mobile-notary" ? (
                <>
                  <h3 className="text-3xl font-bold mb-4">Ready to Schedule a Mobile Notary?</h3>
                  <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                    Appointments are available throughout the Puget Sound region for homes, care facilities, offices, and job sites. Quotes are provided in advance, with no surprises.
                  </p>
                  <Link href="/contact" className="btn-secondary w-full text-center block">
                    Schedule Appointment
                  </Link>
                  <div className="mt-6 pt-6 border-t border-blue-300/30">
                    <p className="text-base text-blue-100 mb-2">
                      Have questions? Contact us:
                    </p>
                    <p className="text-base">
                      <a href="tel:+14253904713" className="hover:text-white transition-colors">(425) 390-4713</a>
                    </p>
                    <p className="text-base">
                      <a href="mailto:john.wilkes@precisionsigninggroup.com" className="hover:text-white transition-colors break-all">john.wilkes@precisionsigninggroup.com</a>
                    </p>
                  </div>
                  <p className="mt-4 text-base text-blue-200 italic">
                    Not a law firm. No legal advice provided.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 text-blue-100">
                    Schedule your appointment today and experience professional service.
                  </p>
                  {service.pricing && (
                    <div className="bg-white/10 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-200 mb-1">Pricing</p>
                      <p className="text-lg font-semibold">{service.pricing}</p>
                    </div>
                  )}
                  <Link href="/contact" className="btn-secondary w-full text-center block">
                    Schedule Appointment
                  </Link>
                  <div className="mt-6 pt-6 border-t border-blue-300/30">
                    <p className="text-sm text-blue-100 mb-2">
                      Have questions? Contact us:
                    </p>
                    <p className="text-sm">
                      <a href="tel:+14253904713" className="hover:text-white transition-colors">Phone: (425) 390-4713</a>
                    </p>
                    <p className="text-sm">
                      <a href="mailto:john.wilkes@precisionsigninggroup.com" className="hover:text-white transition-colors break-all">Email: john.wilkes@precisionsigninggroup.com</a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
            Other Services You May Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.id}
                href={`/services/${otherService.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-neutral-dark mb-3">
                  {otherService.title}
                </h3>
                <p className="text-neutral mb-4">{otherService.shortDescription}</p>
                <div className="text-primary font-semibold flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}







