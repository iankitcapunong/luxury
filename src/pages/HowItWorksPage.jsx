import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import SocialProof from "../components/SocialProof";
import CTA from "../components/CTA";

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
      <SocialProof />
      <CTA />
    </div>
  );
}
