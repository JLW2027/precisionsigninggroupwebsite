import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 md:py-24">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Professional Document Execution for Law Firms
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mb-10">
          Discreet, reliable notarial services for estate planning, business transactions, and fiduciary matters throughout the Puget Sound region.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/for-law-firms/intake" className="btn-secondary text-center inline-block">
            Request Execution Support
          </Link>
          <Link
            href="/contact"
            className="bg-white/95 text-primary hover:bg-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium text-center"
          >
            Schedule Firm Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
