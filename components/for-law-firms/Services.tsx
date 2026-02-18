export default function Services() {
  const items = [
    "Estate Planning & Trust Execution",
    "Corporate & Business Transaction Execution",
    "Real Property & Deed Acknowledgments",
    "Probate & Fiduciary Documentation",
    "Affidavits & Sworn Statements",
    "On-Site & After-Hours Office Support",
    "Hospital & Care Facility Visits",
  ];

  return (
    <section className="py-16 bg-neutral-light/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">
          Execution Support Services
        </h2>
        <ul className="list-none space-y-3 mb-8">
          {items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-accent mr-3 mt-1">&#8212;</span>
              <span className="text-lg text-neutral-dark">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-neutral italic">
          All notarizations performed in accordance with Washington State notarial law.
        </p>
      </div>
    </section>
  );
}
