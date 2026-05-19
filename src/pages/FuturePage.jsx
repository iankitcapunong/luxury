import { useEffect } from "react";
import Future from "../components/Future";
import CTA from "../components/CTA";

export default function FuturePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-black pt-24 sm:pt-28">
      <Future />
      <CTA />
    </div>
  );
}
