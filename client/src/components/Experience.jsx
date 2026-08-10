import Icon from "./Icon";
import FIELD_MAPPING_IMAGE from "../assets/Agrosense landing page..png";
import PREDICTIVE_RISK_IMAGE from "../assets/Agrosense  landing Page 2..png";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16 reveal">
        <div className="md:col-span-8 md:col-start-3 text-center reveal-up">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
            Designed for the Moments that Matter.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            We believe intelligence shouldn't be overwhelming. AgroSense translates
            complex geospatial data and predictive modeling into a clean, authoritative
            interface, allowing you to focus on high-level decision-making with
            absolute clarity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 reveal reveal-delay-1">
        {/* Feature 1: Field Mapping (Large Span) */}
        <div className="md:col-span-12 bg-surface-container-lowest rounded-xl border border-primary/10 overflow-hidden ambient-shadow relative group">
          <div className="absolute inset-x-0 bottom-0 h-48 md:h-56 bg-gradient-to-t from-primary/90 to-transparent z-10 flex flex-col justify-end p-8 md:p-12">
            <span className="inline-block px-3 py-1 bg-sage-bg text-primary font-label-caps text-label-caps rounded-full w-max mb-4">
              Precision Cartography
            </span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-white mb-2">
              Field Mapping, Redefined
            </h3>
            <p className="font-body-md text-body-md text-white/90 max-w-xl">
              High-resolution satellite imagery layered with proprietary vegetative
              indices. Pan, zoom, and analyze with zero latency.
            </p>
          </div>
          <img
            alt="Field Mapping Interface"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            src={FIELD_MAPPING_IMAGE}
          />
        </div>

        {/* Feature 2: Predictive Risk (Wide) */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-0 bg-surface-container-low rounded-xl border border-primary/10 overflow-hidden ambient-shadow">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-surface text-risk-amber border border-risk-amber/20 font-label-caps text-label-caps rounded-full w-max mb-6">
              Early Warning System
            </span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">
              Predictive Risk Timeline
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Identify potential yield threats weeks before they manifest visually. Our
              models integrate micro-climate forecasts with soil health indices to flag
              anomalies.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="warning" className="text-risk-amber mr-3 mt-1" fill />
                <div>
                  <h4 className="font-data-viz text-data-viz text-primary font-semibold">
                    Drought Stress Alert
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Zone B showing 15% deviation from optimal moisture curve.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="check_circle" className="text-fresh-leaf mr-3 mt-1" fill />
                <div>
                  <h4 className="font-data-viz text-data-viz text-primary font-semibold">
                    Nutrient Absorption
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Nitrogen levels stable post-application.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-primary/5 h-64 md:h-auto relative">
            <img
              alt="Predictive Risk UI"
              className="w-full h-full object-cover"
              src={PREDICTIVE_RISK_IMAGE}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
