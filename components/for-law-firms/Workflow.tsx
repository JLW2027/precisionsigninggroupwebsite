const steps = [
  "Firm submits an execution request.",
  "We confirm signer details and appointment logistics.",
  "On-site execution with structured verification.",
  "Completion confirmation sent immediately after the appointment.",
];

export default function Workflow() {
  return (
    <section className="py-16 bg-neutral-light/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-10">
          How We Work With Firms
        </h2>
        <ol className="list-none space-y-6">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-lg text-neutral-dark pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
