import Icon from "../shared/Icon";

const MAIN_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuATJinV0My5IIg0jWGm0V2o5aEy_qmhXcJEljr5aYl-pfVHQ2BaJqZNMLPLnYBzDjUJ4lWW6OiIm63snIb3xvPv4OCefGj7j1HvOn0zWqC5em1pkB-Eu-VjbqK76PTdGg9W4i978WH0xSqaqULlz1Xqfx9H-t8iqz3V-GSW8H98TX2bgATkanRIGDNMPnyw5Lu0VjllH2dacQtWtXJwkLlncVYGR0ucwjYSV4GddZsnhIuOIfpYY6Iz";

const FARMERS_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKg5fc_82yGjMBeouUAqoNvDL3cP44M9H-tz3XwsroGpdcAavMQg45tf2T5ILNAW4XR77762cIGsrtcoA4VCxlCaBrV6yAwWNHDXv0H7QH5jzXEP1wynuF_fLNGEuz8psgeJeadaKbrjfRv8i2RNcFy8sdMCe5QSTk0bGMRy4X_EofFEno26Ou9UQ69EBqWJXAnakkodAjOeJS0a5WZXB6Gv6bpispURMCAFPXF_7YItf-IP-UFHE_";

export default function Solution() {
  return (
    <section
      id="solution"
      className="pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center reveal">
        {/* Narrative Canvas */}
        <div className="md:col-span-5 md:col-start-1 min-w-0 z-10 space-y-8 relative">
          <span className="inline-block px-3 py-1 bg-fresh-leaf text-white font-label-caps text-label-caps rounded-full uppercase tracking-widest w-fit">
            The Solution
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile xl:font-display-lg xl:text-display-lg text-primary tracking-tight break-words">
            One Connected <br />
            <span className="text-surface-tint">Intelligence Experience.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Introducing the AgroSense ecosystem. We bridge the critical gap between raw
            field data and clear, actionable geospatial insights, helping decision-makers
            understand complex information with confidence.
          </p>
        </div>

        {/* High-Impact Visual Canvas with UI Overlays */}
        <div className="md:col-span-7 md:col-start-6 mt-12 md:mt-0 relative reveal reveal-delay-1">
          <div
            className="rounded-xl overflow-hidden aspect-[4/3] relative ambient-shadow border border-primary/10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${MAIN_IMAGE}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
          </div>

          {/* Floating UI Fragment 1: Field Health */}
          <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-16 bg-surface-container-lowest/90 backdrop-blur-md border border-primary/10 rounded-xl p-4 w-64 ambient-shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-sage-bg flex items-center justify-center flex-shrink-0 text-secondary">
              <Icon name="eco" />
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1">
                Sector 4 Health
              </p>
              <p className="font-headline-md text-headline-md text-primary">Optimal</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-fresh-leaf" />
                <span className="font-data-viz text-data-viz text-on-surface-variant">
                  NDVI 0.82 (+4%)
                </span>
              </div>
            </div>
          </div>

          {/* Floating UI Fragment 2: Connectivity */}
          <div className="absolute -top-6 -right-4 md:top-8 md:-right-8 bg-surface-container-lowest border border-primary/10 rounded-xl p-3 ambient-shadow-sm flex items-center space-x-3">
            <Icon name="satellite_alt" className="text-surface-tint" />
            <span className="font-data-viz text-data-viz text-primary">Live Sync Active</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-gutter reveal reveal-delay-2">
        {/* Bento Item 1: Farmers (Large) */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-2xl border border-primary/5 overflow-hidden ambient-shadow-sm flex flex-col md:flex-row relative group hover:shadow-lg transition-shadow duration-300">
          <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-4">
            <span className="inline-block px-3 py-1 bg-sage-bg text-secondary font-label-caps text-label-caps rounded-full w-max">
              Ground Level
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">For the Farmers</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Direct, tactile insights delivered to the field. Empowering operators with
              precise moisture mapping, hyper-local weather alerts, and yield risk
              assessments.
            </p>
          </div>
          <div
            className="md:w-1/2 relative bg-surface bg-contain md:bg-cover bg-center bg-no-repeat min-h-[250px]"
            style={{ backgroundImage: `url('${FARMERS_IMAGE}')` }}
          >
            <div className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur border border-white/20 p-3 rounded-lg shadow-sm">
              <p className="font-data-viz text-data-viz text-primary font-semibold">
                Moisture: 42%
              </p>
              <div className="w-full bg-surface-dim h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-fresh-leaf w-3/4 h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bento Item 2: Corporate (Tall) */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl border border-primary/5 p-8 ambient-shadow-sm flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full w-max">
              Strategy
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">For Corporate</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Aggregated geospatial intelligence. Monitor portfolio risk, track
              sustainability metrics, and forecast yields across millions of acres.
            </p>
          </div>
          <div className="mt-8 flex-grow flex items-end justify-center relative">
            <div className="w-full h-32 flex items-end justify-between px-4 opacity-80">
              <div className="w-1/6 bg-surface-variant rounded-t-sm h-[40%]" />
              <div className="w-1/6 bg-primary-fixed-dim rounded-t-sm h-[60%]" />
              <div className="w-1/6 bg-surface-variant rounded-t-sm h-[30%]" />
              <div className="w-1/6 bg-fresh-leaf rounded-t-sm h-[90%]" />
              <div className="w-1/6 bg-primary-fixed-dim rounded-t-sm h-[75%]" />
            </div>
            <svg
              className="absolute inset-0 w-full h-full text-secondary"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                className="opacity-50"
                d="M0,80 Q20,60 40,70 T80,20 L100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Bento Item 3: The Platform Engine (Full Width) */}
        <div className="md:col-span-12 bg-primary rounded-2xl p-8 md:p-12 ambient-shadow flex flex-col md:flex-row items-stretch md:items-center justify-between relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 md:w-1/2 space-y-6">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-primary">
              The AgroSense Engine
            </h3>
            <p className="font-body-lg text-body-lg text-primary-fixed max-w-lg">
              Our proprietary ingestion layer harmonizes satellite imagery, IoT sensors,
              and historical data, translating raw pixels into predictive models.
            </p>
          </div>
          <div className="relative z-10 md:w-5/12 mt-8 md:mt-0">
            <div className="relative w-full">
              <div className="absolute inset-4 bg-surface/10 rounded-xl border border-white/20 backdrop-blur-sm transform rotate-3" />
              <div className="absolute inset-2 bg-surface/20 rounded-xl border border-white/30 backdrop-blur-md transform -rotate-2" />
              <div className="relative bg-surface-container-lowest rounded-xl border border-white/10 shadow-2xl p-6 flex flex-col text-primary">
                <div className="flex justify-between items-center mb-4 border-b border-surface-variant pb-2">
                  <span className="font-label-caps text-label-caps tracking-wide">
                    Data Pipeline Status
                  </span>
                  <Icon name="check_circle" className="text-fresh-leaf text-sm" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant font-data-viz">
                      Sentinel-2 Ingestion
                    </span>
                    <span className="bg-sage-bg text-secondary px-2 py-0.5 rounded text-xs">
                      Active
                    </span>
                  </div>
                  <div className="w-full bg-surface-variant h-1 rounded-full">
                    <div className="bg-secondary w-full h-full rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-on-surface-variant font-data-viz">
                      NDVI Processing
                    </span>
                    <span className="bg-sage-bg text-secondary px-2 py-0.5 rounded text-xs">
                      Active
                    </span>
                  </div>
                  <div className="w-full bg-surface-variant h-1 rounded-full">
                    <div className="bg-fresh-leaf w-3/4 h-full rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
