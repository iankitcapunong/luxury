import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import SocialProof from "../components/SocialProof";
import CTA from "../components/CTA";
import Monogram from "../components/Monogram";

export default function HowItWorksPage() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(
    location.state?.service ?? null,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-24 sm:pt-28">
      <HowItWorks
        selectedService={selectedService}
        onSelectService={setSelectedService}
      />
      <Monogram letters="LT" />
      <SocialProof />
      <Monogram letters="LT" onDark />
      <CTA />
    </div>
  );
}
