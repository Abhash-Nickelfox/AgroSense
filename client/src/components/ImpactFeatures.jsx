import Icon from "./Icon";

const IMPACTS = [
  { icon: "map", title: "Structured Mapping", desc: "Precise boundaries and geospatial accuracy." },
  { icon: "monitor_heart", title: "Health Visibility", desc: "Continuous monitoring of crop stress levels." },
  { icon: "warning", title: "Disease-Risk Awareness", desc: "Proactive identification of potential threats." },
  { icon: "lock", title: "Consent-Governed Sharing", desc: "Secure and controlled data access for all parties." },
  { icon: "hub", title: "Connected Operations", desc: "Unified platform for seamless collaboration." },
];

export default function ImpactFeatures() {
  return (
    <section className="py-section-gap bg-surface-container-lowest border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 reveal">
          {IMPACTS.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-secondary shrink-0">
                <Icon name={item.icon} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
