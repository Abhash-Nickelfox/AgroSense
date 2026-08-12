import { Link } from "react-router-dom";
import Icon from "../shared/Icon";
import HERO_IMAGE from "../../assets/Homepage_bg_updated_image.png";

const SECTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDaa6cIm4BSpyMN24DzlTWdLt3Pu90JNEsql98VwTQwa6mdgm4m3apk7a-GIgQx17PSOpQSnboHmMrVegWciNzFah_FV7FFWwQqFG-Eh-8sQSqT-XfipxazeJI_b6Dk_8cJXlAzsiB9__1ejrlQqAnCLKP8kvFAZGFK58jAg1vvhLkKntE-FceFsOj7C7mAv4YXHpZtyu7QxVaaA0hfV8fyFiCWph7-PhtNxJvKgiYE09ES0pOGrqQ7";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[720px] flex items-center justify-center overflow-hidden bg-surface-container-lowest pb-12"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full cinematic-zoom"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/95 via-surface-container-lowest/70 to-transparent w-3/5" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-7 flex flex-col justify-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            Agricultural Data Into{" "}
            <span className="text-gradient">Intelligent Decisions.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-black max-w-xl mb-8">
            AgroSense is a precision agriculture platform that combines parcel mapping,
            plant health intelligence, disease forecasting, and operational dashboards
            into one connected ecosystem. Designed for farmers, cooperatives, and
            agricultural enterprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/discuss"
              className="bg-primary text-white px-8 py-4 rounded-lg font-body-md hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-2"
            >
              Explore the Platform
              <Icon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
        </div>

        {/* Hero Visual Glimpse */}
        <div className="hidden md:block md:col-span-5 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[440px] glass-card rounded-xl organic-shadow p-6 overflow-hidden border border-outline-variant/30 backdrop-blur-2xl bg-white/40">
            <div className="flex justify-between items-center mb-6">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                Field Sector 7A
              </span>
              <Icon name="energy_savings_leaf" className="text-fresh-leaf" />
            </div>
            <div className="h-56 rounded-lg overflow-hidden mb-6 relative group">
              <div
                className="bg-cover bg-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${SECTOR_IMAGE}')` }}
              />
              <div className="absolute top-0 left-0 right-0 bg-surface/95 backdrop-blur px-3 py-1.5 flex items-center gap-1.5 text-xs font-data-viz">
                <span className="font-bold text-primary tracking-wide">AGROSENSE</span>
                <span className="text-outline">|</span>
                <span className="text-on-surface-variant">Product Showcase</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-surface/95 backdrop-blur px-3 py-1.5 rounded shadow-sm text-xs font-data-viz text-primary font-medium">
                NDVI: 0.82
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-3">
                <span className="text-sm font-medium text-on-surface-variant">
                  Moisture Index
                </span>
                <span className="text-sm text-primary font-bold">Optimal</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-3">
                <span className="text-sm font-medium text-on-surface-variant">
                  Predicted Yield
                </span>
                <span className="text-sm text-fresh-leaf font-bold">+12%</span>
              </div>
              <div className="w-full h-14 mt-6 bg-surface-container-lowest/80 rounded-lg flex items-center px-4 justify-between border border-white/50">
                <span className="text-xs text-on-surface-variant font-medium">Status</span>
                <div className="flex items-center gap-1.5 text-fresh-leaf bg-sage-bg/50 px-2.5 py-1 rounded-md">
                  <Icon name="check_circle" className="text-[16px]" fill />
                  <span className="text-xs font-bold">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
