import { useEffect } from "react";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import CTA from "../components/CTA";

export default function ClientsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-black pt-24 sm:pt-28">
      <Testimonials />
      <Newsletter />
      <CTA />
    </div>
  );
}
