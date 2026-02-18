const cards = [
  {
    title: "Discretion",
    body: "Professional composure in sensitive environments. We never provide legal interpretation.",
  },
  {
    title: "Accuracy",
    body: "Attention to signature capacity, correct certificates, and document integrity.",
  },
  {
    title: "Reliability",
    body: "Punctual, prepared, and available for time-sensitive matters.",
  },
];

export default function WhyPSG() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-12 text-center">
          Why Firms Work With PSG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg border border-neutral-light shadow-soft p-6"
            >
              <h3 className="text-xl font-bold text-neutral-dark mb-4">{card.title}</h3>
              <p className="text-neutral leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
