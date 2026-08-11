const EDITORIAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHOhaw-mQA6_7zoZlYKCEoTr2Pm2iIElvCh-ANokrIufoc_GdLPwMy_xZac-Lkx4rNZZtjzL3WhvNHYqCdXtqwQwGNoXXZOXJtyawzIsXiQGmqcw5FmQfx1Y95HpU1PnFwjVJbSKY4abiUDZV1x6mrECnRxUMhGNlpVcwrQy_4MOuYI-_m9W6FTDV2tCRI4JrUMrdZ_XlRrf63nikTz7sIhkdvmbZ7pej6CGLJH6a9wKncyLlbFoS-";

export default function Challenge() {
  return (
    <section
      id="challenge"
      className="pt-section-gap pb-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto relative overflow-hidden bg-background reveal"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
        <div className="md:col-span-12">
          <span className="inline-block px-3 py-1 bg-sage-bg text-primary font-label-caps text-label-caps rounded-full mb-6 uppercase tracking-widest">
            The Problem Space
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-8">
            The Fragmented Reality of
            <br />
            Modern Farming.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            There's a gap between raw environmental data and useful geospatial insights.
            Today's decision-makers are overwhelmed by disconnected information, while
            important environmental changes often go unnoticed until it's too late.
          </p>
        </div>
      </div>

      {/* Editorial Image Breakout */}
      <div className="mt-16 relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden soft-shadow reveal reveal-delay-1">
        <div
          className="bg-cover bg-center w-full h-full absolute inset-0"
          style={{ backgroundImage: `url('${EDITORIAL_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <p className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-white text-center max-w-3xl backdrop-blur-sm bg-primary/20 p-6 rounded-lg border border-white/10">
            "The challenge isn't acquiring data. It's synthesizing chaos into clarity."
          </p>
        </div>
      </div>
    </section>
  );
}
