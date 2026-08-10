import Icon from "../shared/Icon";
import AFTER_IMAGE from "../../assets/impact-after-photo.png";

const BEFORE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCE9QqM5vpxXHJBeUsZxWq7bHSoq3KgRFLXXa88wGWTCGXChmgJBEbdItWhl0Hq5VGtInLqFJEmRLa4A-G7JzS0eW4H7W-HoML04xtnmvhPAxqTwt_NAM41n3d_hif1hbcLaiZvhlgNfAQIBaAVUpF6g3SvLJyTpisAhhQa6WuBJigrYH-55Dxn0mDveEuOeT5-yntcpq1fVNZ0uYBwW4ix-IbOBfRh9UJuI6yftwU50VNdeXc8XJmI";

export default function Impact() {
  return (
    <section
      id="impact"
      className="pt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface"
    >
      <div className="max-w-4xl mb-16 reveal">
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-8 tracking-tight">
          Technology that Changes the Decision Window.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Transforming raw environmental data into high-level geospatial wisdom. We
          provide the structured digital mapping and advance disease-risk awareness
          needed to optimize enterprise agricultural operations.
        </p>
      </div>

      {/* Before & After Comparison */}
      <div className="mb-16 reveal reveal-delay-1">
        <div className="mb-8">
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">
            The Transformation
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Shifting fragmented agricultural workflows with structured digital operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-surface-container-low rounded-xl border border-primary/10 overflow-hidden group">
            <div className="h-64 relative">
              <img
                className="w-full h-full object-cover opacity-80"
                alt="Traditional field scouting"
                src={BEFORE_IMAGE}
              />
              <div className="absolute top-4 right-4 bg-tertiary-container/90 backdrop-blur text-white px-3 py-1 rounded font-label-caps text-label-caps tracking-widest">
                TRADITIONAL APPROACH
              </div>
            </div>
            <div className="p-8">
              <h4 className="font-headline-md text-headline-md text-text-charcoal mb-4">
                Fragmented Visibility
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="visibility_off" className="text-outline mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Reactive response to visible crop stress, leading to yield loss.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="map" className="text-outline mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Siloed data sources creating incomplete operational maps.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="bg-surface rounded-xl border border-primary/10 shadow-lg shadow-tertiary-container/5 overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-fresh-leaf" />
            <div className="h-64 relative">
              <img
                className="w-full h-full object-cover"
                alt="AgroSense structured digital mapping"
                src={AFTER_IMAGE}
              />
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur text-white px-3 py-1 rounded font-label-caps text-label-caps tracking-widest">
                AGROSENSE INTELLIGENCE
              </div>
              <div className="absolute top-2 left-2 bg-surface rounded-lg shadow-sm px-2.5 py-1.5 w-48">
                <div className="flex items-center gap-1 text-[10px] font-medium text-primary mb-1.5">
                  <span className="font-bold">AgroSense</span>
                  <span className="text-outline">|</span>
                  <span className="text-on-surface-variant font-normal">The Impact</span>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                  <div>
                    <div className="text-[8px] text-outline uppercase tracking-wide whitespace-nowrap">
                      Crop Health
                    </div>
                    <div className="text-xs font-bold text-fresh-leaf">92%</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-outline uppercase tracking-wide">
                      Soil Moisture
                    </div>
                    <div className="text-xs font-bold text-primary">Optimal</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-outline uppercase tracking-wide">
                      Predicted Yield
                    </div>
                    <div className="text-xs font-bold text-primary whitespace-nowrap">
                      +15% <span className="text-[8px] font-normal text-on-surface-variant">vs 5-yr</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] text-outline uppercase tracking-wide">
                      Field ID
                    </div>
                    <div className="text-xs font-bold text-primary">Sector 7G</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h4 className="font-headline-md text-headline-md text-primary mb-4">
                Structured Digital Mapping
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="radar" className="text-fresh-leaf mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Advance disease-risk awareness weeks before visible symptoms appear.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="layers" className="text-fresh-leaf mt-1" />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Unified, high-density geospatial data driving strategic
                    decision-making.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Business Value Impact Areas */}
      <div className="bg-sage-bg py-16 px-8 rounded-2xl border border-primary/5 reveal reveal-delay-2 mb-section-gap">
        <div className="grid md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 flex flex-col justify-center">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-6">
              Quantifiable Business Value
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Our intelligence platform directly impacts the bottom line, turning
              environmental variables into manageable metrics.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-surface p-8 rounded-xl border border-primary/10 hover:shadow-xl hover:shadow-tertiary-container/10 transition-all duration-300">
              <Icon name="trending_down" className="text-4xl text-primary mb-4" fill />
              <div className="font-display-lg text-display-lg text-primary mb-2">32%</div>
              <h4 className="font-headline-md text-headline-md text-text-charcoal mb-2">
                Reduction in Input Costs
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Through precise, localized application of resources based on real-time
                soil and health indices.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-primary/10 hover:shadow-xl hover:shadow-tertiary-container/10 transition-all duration-300">
              <Icon name="eco" className="text-4xl text-fresh-leaf mb-4" fill />
              <div className="font-display-lg text-display-lg text-fresh-leaf mb-2">
                14<span className="text-3xl">days</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-text-charcoal mb-2">
                Advance Risk Detection
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Early warning system for pathogen spread, shifting the intervention
                window significantly forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
