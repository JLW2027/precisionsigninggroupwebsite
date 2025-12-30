import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Precision Signing Group",
  description: "Schedule an appointment with Precision Signing Group. Mobile notary services throughout the Puget Sound region.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Precision Signing Group",
    description: "Schedule an appointment with Precision Signing Group. Mobile notary services throughout the Puget Sound region.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Ready to schedule an appointment? Fill out our intake form below and we&apos;ll get back to you promptly.
          </p>
          <p className="text-lg text-blue-100 mt-2">
            Email <a href="mailto:john.wilkes@precisionsigninggroup.com" className="underline">john.wilkes@precisionsigninggroup.com</a> for a reply within 24 hours.
          </p>
          <p className="text-sm text-blue-50 mt-6 max-w-3xl">
            I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3 font-bold text-primary">Phone</span>
                  </div>
                  <a href="tel:+14253904713" className="text-primary hover:text-accent font-semibold transition-colors">
                    (425) 390-4713
                  </a>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3 font-bold text-primary">Email</span>
                  </div>
                  <a href="mailto:john.wilkes@precisionsigninggroup.com" className="text-primary hover:text-accent font-semibold transition-colors break-all">
                    john.wilkes@precisionsigninggroup.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3 font-bold text-primary">Location</span>
                  </div>
                  <p className="text-neutral text-lg">
                    Puget Sound Region including:
                  </p>
                  <ul className="text-neutral text-lg mt-2 space-y-1">
                    <li>• Seattle & surrounding areas</li>
                    <li>• Bellevue & Eastside</li>
                    <li>• Tacoma & Pierce County</li>
                    <li>• Everett & Snohomish County</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3 font-bold text-primary">Hours</span>
                  </div>
                  <p className="text-neutral text-lg">
                    Flexible scheduling available including evenings and weekends by appointment
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-light rounded-lg">
                <p className="text-lg text-neutral-dark font-semibold">
                  <strong>Same-Day Service:</strong> Available for urgent requests. Contact us as early as possible for best availability.
                </p>
              </div>
              <div className="mt-6 rounded-lg overflow-hidden border border-neutral-light">
                <Image
                  src="/john-wilkes-intake.jpeg"
                  alt="John Wilkes standing outdoors"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                Intake Form
              </h2>
              <p className="text-neutral mb-8">
                Please fill out the form below with your information and service needs. We&apos;ll contact you shortly to confirm your appointment details.
              </p>

              {/* Contact Form */}
              <ContactForm />

              <div className="mt-8 text-center">
                <p className="text-neutral text-lg mb-4">
                  Prefer to call or email instead?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+14253904713" className="btn-primary">
                    Call Us
                  </a>
                  <a href="mailto:john.wilkes@precisionsigninggroup.com" className="btn-secondary">
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3">
                  What to Prepare
                </h3>
                <ul className="text-neutral text-lg space-y-2">
                  <li>• Valid government-issued photo ID</li>
                  <li>• Your documents (unsigned)</li>
                  <li>• Any specific instructions from requesting party</li>
                  <li>• Payment method</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3">
                  Response Time
                </h3>
                <p className="text-neutral text-lg mb-3">
                  We typically respond to all appointment requests within:
                </p>
                <ul className="text-neutral text-lg space-y-2">
                  <li>• Standard requests: 4-6 hours</li>
                  <li>• Urgent requests: 1-2 hours</li>
                  <li>• After-hours: Next business day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Professional Mobile Notary Services
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Serving the Puget Sound region with reliable, convenient, and professional notary services
          </p>
        </div>
      </section>
    </div>
  );
}
