const FACTS = [
  { label: "Industry", value: "AgriTech" },
  { label: "Platform", value: "Mobile + Web" },
  { label: "Product", value: "Agricultural Intelligence" },
  { label: "Focus", value: "Field Mapping · Crop Health · Predictive Insights", small: true },
];

export default function ProjectFacts() {
  return (
    <section className="py-12 bg-surface border-y border-outline-variant/20 reveal">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-4">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="md:col-span-3 md:border-l md:border-outline-variant/30 md:pl-4"
            >
              <div className="font-label-caps text-label-caps text-outline mb-2 uppercase">
                {fact.label}
              </div>
              <div
                className={`font-body-md text-primary font-medium ${
                  fact.small ? "text-sm leading-relaxed" : ""
                }`}
              >
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
