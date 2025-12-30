import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Precision Signing Group
            </h3>
            <div className="flex flex-col gap-0 text-lg">
              <p className="text-neutral-light/90 leading-tight">
                <a
                  href="tel:+14253904713"
                  className="text-accent font-semibold hover:text-white transition-colors text-lg"
                >
                  (425) 390-4713
                </a>
              </p>
              <p className="text-neutral-light/90 leading-tight">
                <a
                  href="mailto:john.wilkes@precisionsigninggroup.com"
                  className="hover:text-accent transition-colors text-lg"
                >
                  john.wilkes@precisionsigninggroup.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-1 text-accent">Quick Links</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>
                <Link href="/" className="text-neutral-light/90 text-xl hover:text-accent transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services/general-notary"
                  className="text-neutral-light/90 text-xl hover:text-accent transition-colors block"
                >
                  General Notary
                </Link>
              </li>
              <li>
                <Link
                  href="/services/loan-signing"
                  className="text-neutral-light/90 text-xl hover:text-accent transition-colors block"
                >
                  Loan Signing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-light/90 text-xl hover:text-accent transition-colors block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-1 text-accent">Services</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>
                <Link
                  href="/services/business-documents"
                  className="text-neutral-light/90 text-xl hover:text-accent transition-colors block"
                >
                  Business Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-notary"
                  className="text-neutral-light/90 text-xl hover:text-accent transition-colors block"
                >
                  Mobile Notary
                </Link>
              </li>
              <li>
                <Link
                  href="/signing-services"
                  className="text-neutral-light/90 text-xl hover:text-accent transition-colors block"
                >
                  Signing Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-neutral-light/70">
          <p className="font-medium text-lg leading-tight mt-0">
            &copy; {new Date().getFullYear()} Precision Signing Group. All rights reserved.
          </p>
          <p className="text-lg leading-tight mt-0">Professional Notary Services in the Puget Sound Region</p>
          <p className="text-lg leading-tight mt-0 text-accent">
            I am not an attorney licensed to practice law in the State of Washington and cannot provide legal advice or assist in the preparation of legal documents.
          </p>
        </div>
      </div>
    </footer>
  );
}
