import { useState } from "react";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectFacts from "./components/ProjectFacts";
import Challenge from "./components/Challenge";
import Solution from "./components/Solution";
import Experience from "./components/Experience";
import Impact from "./components/Impact";
import ProductGallery from "./components/ProductGallery";
import ImpactFeatures from "./components/ImpactFeatures";
import Technology from "./components/Technology";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  useReveal();

  return (
    <>
      <Navbar onOpenContact={() => setContactOpen(true)} />
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
        <FinalCTA onOpenContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
