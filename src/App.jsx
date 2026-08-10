import useReveal from "./hooks/useReveal";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import ProjectFacts from "./components/home/ProjectFacts";
import Challenge from "./components/home/Challenge";
import Solution from "./components/home/Solution";
import Experience from "./components/home/Experience";
import Impact from "./components/home/Impact";
import ProductGallery from "./components/home/ProductGallery";
import ImpactFeatures from "./components/home/ImpactFeatures";
import Technology from "./components/home/Technology";
import FinalCTA from "./components/home/FinalCTA";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ProjectFacts />
        <Challenge />
        <Solution />
        <Experience />
        <Impact />
        <ProductGallery />
        <ImpactFeatures />
        <Technology />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
