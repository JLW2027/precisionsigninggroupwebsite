import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Request Execution Support for Your Firm
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/for-law-firms/intake" className="btn-secondary inline-block text-center">
            Submit Firm Intake
          </Link>
          <Link href="/contact" className="bg-white/95 text-primary hover:bg-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center">
            Contact
          </Link>
        </div>
        <p className="text-sm text-blue-100 max-w-xl mx-auto">
          For firms requiring ongoing support, inquire about preferred scheduling arrangements.
        </p>
      </div>
    </section>
  );
}
