const STACK = ["React Native", "Django", "Laravel", "Figma"];

export default function Technology() {
  return (
    <section className="py-20 bg-surface reveal">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <div className="font-label-caps text-label-caps text-outline mb-10 uppercase tracking-wider">
          Section 09 — Technology
        </div>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-outline items-center">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="font-bold text-xl tracking-wider opacity-50 hover:opacity-100 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
