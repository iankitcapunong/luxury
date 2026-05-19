import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Chatbot from "./Chatbot";
import Loader from "./Loader";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VisionPage from "./pages/VisionPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ServicesPage from "./pages/ServicesPage";
import ClientsPage from "./pages/ClientsPage";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setLoading(true);
    const tid = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(tid);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans text-black">
      {loading && <Loader />}
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
