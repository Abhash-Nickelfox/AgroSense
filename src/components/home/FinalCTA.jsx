import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-[160px] bg-primary text-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-4xl relative z-10 reveal">
        <h2 className="font-headline-lg-mobile md:text-6xl font-bold mb-8 tracking-tight">
          From Fragmented Workflows to Structured Intelligence.
        </h2>
        <p className="font-body-lg text-primary-fixed-dim mb-12 max-w-2xl mx-auto leading-relaxed">
          Leverage our experience with AgroSense to transform your agricultural data into
          actionable intelligence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/discuss"
            className="bg-fresh-leaf text-white px-8 py-4 rounded-lg font-body-md hover:bg-secondary transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Let's Discuss
          </Link>
        </div>
      </div>
    </section>
  );
}
