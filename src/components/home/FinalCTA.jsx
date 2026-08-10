import { CONTACT_MAILTO } from "../../lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-[160px] bg-primary text-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-4xl relative z-10 reveal">
        <h2 className="font-headline-lg-mobile md:text-6xl font-bold mb-8 tracking-tight">
          Building smarter digital products for complex industries.
        </h2>
        <p className="font-body-lg text-primary-fixed-dim mb-12 max-w-2xl mx-auto leading-relaxed">
          Leverage our experience with AgroSense to transform your agricultural data into
          actionable intelligence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={CONTACT_MAILTO}
            className="bg-fresh-leaf text-white px-8 py-4 rounded-lg font-body-md hover:bg-secondary transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Let's Discuss
          </a>
          <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-body-md hover:bg-white/10 transition-colors font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
