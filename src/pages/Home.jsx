import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import Hero from "../components/home/Hero";
import ProjectFacts from "../components/home/ProjectFacts";
import Challenge from "../components/home/Challenge";
import Solution from "../components/home/Solution";
import Experience from "../components/home/Experience";
import Impact from "../components/home/Impact";
import ProductGallery from "../components/home/ProductGallery";
import ImpactFeatures from "../components/home/ImpactFeatures";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  useReveal();
  const { hash } = useLocation();

  // Nav links point to "/#section" so they work from any page. React
  // Router doesn't scroll on navigation the way a plain <a> does, so do
  // it ourselves — both on first load and whenever the hash changes while
  // already on this page.
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <main className="pt-20">
      <Hero />
      <ProjectFacts />
      <Challenge />
      <Solution />
      <Experience />
      <Impact />
      <ProductGallery />
      <ImpactFeatures />
      <FinalCTA />
    </main>
  );
}
