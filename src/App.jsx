import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Discuss from "./pages/Discuss";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discuss" element={<Discuss />} />
      </Routes>
      <Footer />
    </>
  );
}
