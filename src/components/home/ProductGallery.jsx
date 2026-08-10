import MODULE_01_IMAGE from "../../assets/product-gallery-module-01.png";

const MODULES = [
  { tag: "MODULE 01", title: "FIELD", image: MODULE_01_IMAGE },
  { tag: "MODULE 02", title: "HEALTH", offset: true },
  { tag: "MODULE 03", title: "RISK" },
];

export default function ProductGallery() {
  return (
    <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12 items-end reveal">
          <div className="md:col-span-8">
            <div className="font-label-caps text-label-caps text-outline mb-6 uppercase tracking-wider">
              Section 06 — Product Gallery
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary max-w-2xl">
              Designed to make complexity feel simple.
            </h2>
          </div>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-12 md:overflow-visible md:snap-none reveal reveal-delay-1">
          {MODULES.map((mod) => (
            <div
              key={mod.tag}
              className={`min-w-[80vw] sm:min-w-[400px] md:min-w-0 md:col-span-4 snap-center group ${
                mod.offset ? "md:mt-12" : ""
              }`}
            >
              <div className="aspect-[3/4] bg-surface rounded-2xl flex items-end justify-center border border-outline-variant/20 shadow-sm relative overflow-hidden">
                {mod.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${mod.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-variant/50 to-surface-variant flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <span className="font-label-caps text-outline/40 text-4xl tracking-widest rotate-90 opacity-20">
                      MOCKUP
                    </span>
                  </div>
                )}
                <div className="relative z-10 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end h-1/2">
                  <span className="font-label-caps text-white/80 tracking-widest mb-1">
                    {mod.tag}
                  </span>
                  <span className="font-headline-md text-white">{mod.title}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="min-w-[85vw] sm:min-w-[600px] md:min-w-0 md:col-span-12 snap-center group md:mt-8">
            <div className="aspect-[4/3] md:aspect-[21/9] bg-surface rounded-3xl flex items-end justify-start border border-outline-variant/20 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-surface-variant/80 to-surface-variant/30 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                <span className="font-label-caps text-outline/40 text-5xl tracking-widest opacity-10">
                  DASHBOARD MOCKUP
                </span>
              </div>
              <div className="relative z-10 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end h-full md:h-1/2 md:w-1/2">
                <span className="font-label-caps text-white/80 tracking-widest mb-2">
                  MASTER VIEW
                </span>
                <span className="font-headline-lg-mobile md:text-5xl font-bold text-white leading-tight">
                  OVERVIEW &amp;
                  <br />
                  INTELLIGENCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
