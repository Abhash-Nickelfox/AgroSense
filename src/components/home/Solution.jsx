import Icon from "../shared/Icon";
import FARMERS_IMAGE from "../../assets/farmers-image.png";
import MAIN_IMAGE from "../../assets/main-image.png";

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
          <div className="absolute -bottom-8 -left-4 md:bottom-12 md:-left-4 lg:-left-6 xl:-left-16 bg-surface-container-lowest/90 backdrop-blur-md border border-primary/10 rounded-xl p-4 w-64 ambient-shadow-sm flex items-start space-x-4">
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
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-gutter reveal reveal-delay-2">
        {/* Bento Item 1: Farmers (Large) */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl border border-primary/5 overflow-hidden ambient-shadow-sm flex flex-col md:flex-row relative group hover:shadow-lg transition-shadow duration-300">
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
            className="md:w-1/2 relative bg-surface bg-cover bg-left bg-no-repeat min-h-[420px] sm:min-h-[440px] md:min-h-[440px]"
            style={{ backgroundImage: `url('${FARMERS_IMAGE}')` }}
          >
            {/* Soil moisture readout — rendered as real markup (not baked
                into the image) so it's always crisp and typo-free, and
                scales cleanly with the container instead of relying on a
                fixed pixel size. */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-[75%] max-w-[240px] bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl p-3 sm:p-4 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
                <Icon name="eco" className="text-fresh-leaf text-sm" fill />
                <span className="text-xs sm:text-sm font-bold">AgroSense</span>
                <span className="text-white/60 text-xs sm:text-sm">|</span>
                <span className="text-white/85 text-xs sm:text-sm">The Solution</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-[10px] sm:text-label-caps text-white/85 tracking-wide">
                  SOIL MOISTURE
                </span>
                <Icon name="water_drop" className="text-white/85 text-sm" />
              </div>
              <span className="inline-block px-2 py-0.5 bg-white/15 border border-white/40 rounded text-[9px] sm:text-[10px] font-bold tracking-wide mb-3">
                OPTIMAL
              </span>

              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                  <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="27"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="5"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="27"
                      fill="none"
                      stroke="white"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 27}
                      strokeDashoffset={2 * Math.PI * 27 * (1 - 0.68)}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold">
                    68%
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs text-white/85 space-y-0.5">
                  <div>
                    STATUS: <span className="font-bold text-white">Ideal Range</span>
                  </div>
                  <div>
                    TEMP: <span className="font-bold text-white">18.4&deg;C</span>
                  </div>
                  <div>
                    pH: <span className="font-bold text-white">6.5</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/25 pt-3 mb-3 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="location_on" className="text-xs" />
                </div>
                <div className="text-[10px] sm:text-xs leading-tight">
                  <div className="text-white/75">FIELD SECTOR A4</div>
                  <div className="font-bold text-white">SUNNY | 21&deg;C</div>
                </div>
              </div>

              <div className="border-t border-white/25 pt-3">
                <div className="flex justify-between text-[9px] sm:text-[10px] font-bold tracking-wide mb-2">
                  <span>MOISTURE TREND</span>
                  <span className="font-normal text-white/75">9:00 AM | 72%</span>
                </div>
                <svg viewBox="0 0 100 30" className="w-full h-5 sm:h-6" preserveAspectRatio="none">
                  <polyline
                    points="0,20 20,15 40,22 60,8 80,12 100,5"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

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
        <div className="@container lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-primary/5 p-8 ambient-shadow-sm relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col @md:flex-row @md:items-center gap-8 @md:gap-6">
            <div className="relative z-10 space-y-4 @md:w-3/5">
              <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full w-max">
                Strategy
              </span>
              <h3 className="font-headline-md text-headline-md text-primary">For Corporate</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Aggregated geospatial intelligence. Monitor portfolio risk, track
                sustainability metrics, and forecast yields across millions of acres.
              </p>
            </div>
            <div className="flex-grow @md:w-2/5 flex items-end justify-center relative">
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
        </div>

        {/* Bento Item 3: The Platform Engine (Full Width) */}
        <div className="lg:col-span-12 bg-primary rounded-2xl p-8 md:p-12 ambient-shadow flex flex-col md:flex-row items-stretch md:items-center justify-between relative overflow-hidden">
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
