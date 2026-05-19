import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Monogram from "../components/Monogram";

export default function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-24 sm:pt-28">
      <Services
        onSelect={(s) =>
          navigate("/how-it-works", { state: { service: s } })
        }
      />
      <Monogram letters="LT" />
      <CTA />
    </div>
  );
}
