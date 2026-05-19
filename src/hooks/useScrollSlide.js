import { useEffect, useRef } from "react";

export default function useScrollSlide() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-in");
          else e.target.classList.remove("is-in");
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    el.querySelectorAll(".slide-card").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}
