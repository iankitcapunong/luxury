import { useEffect } from "react";
import Manifesto from "../components/Manifesto";
import CTA from "../components/CTA";

export default function VisionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-24 sm:pt-28">
      <Manifesto />
      <CTA />
    </div>
  );
}
