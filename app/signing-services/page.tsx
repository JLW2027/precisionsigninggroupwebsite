import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signing Service Companies | Precision Signing Group",
  description: "Find Precision Signing Group on leading signing service platforms including Snapdocs, Signing Order, and more.",
  alternates: {
    canonical: "/signing-services",
  },
  openGraph: {
    title: "Signing Service Companies | Precision Signing Group",
    description: "Find Precision Signing Group on leading signing service platforms including Snapdocs, Signing Order, and more.",
    url: "/signing-services",
    type: "website",
  },
};

export default function SigningServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Signing Service Companies
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find Precision Signing Group on leading signing service platforms. We work with title companies, lenders, and escrow officers through these trusted platforms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-neutral leading-relaxed mb-8">
              Precision Signing Group is available on multiple signing service platforms, making it easy for title companies, lenders, and escrow officers to schedule loan signings and notary services.
            </p>

            {/* Platform Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Snapdocs */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-200">
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                  Snapdocs
                </h3>
                <p className="text-neutral mb-4">
                  Find us on Snapdocs, one of the leading platforms for loan signing services.
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-accent font-semibold inline-flex items-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
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
                </a>
              </div>

              {/* Signing Order */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-200">
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                  Signing Order
                </h3>
                <p className="text-neutral mb-4">
                  Access our services through Signing Order platform.
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-accent font-semibold inline-flex items-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
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
                </a>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                For Signing Service Companies
              </h3>
              <p className="text-neutral leading-relaxed mb-4">
                If you&apos;re a signing service company or platform looking to add Precision Signing Group to your network, please contact us to discuss partnership opportunities.
              </p>
              <div className="space-y-2">
                <p className="text-neutral">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+14253904713" className="text-primary hover:text-accent transition-colors">
                    (425) 390-4713
                  </a>
                </p>
                <p className="text-neutral">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:john.wilkes@precisionsigninggroup.com" className="text-primary hover:text-accent transition-colors break-all">
                    john.wilkes@precisionsigninggroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Notary Services?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you&apos;re scheduling through a platform or directly, we&apos;re here to help with professional notary services.
          </p>
          <Link href="/contact" className="btn-secondary inline-block">
            Schedule Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

