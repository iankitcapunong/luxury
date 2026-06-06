import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal();
  const quotes = [
    {
      q: "“They moved an artist from a sold out show to a private dinner in twenty minutes, and you wouldn't have known either was happening. Exactly what we needed.”",
      n: "Adaeze Williams",
      r: "Tour Manager, Independent label",
      i: "AW",
      img: "/vip_celeb.png",
    },
    {
      q: "“Our concierge desk has used a dozen firms. Luxury Transport is the only one we hand the phone to and stop watching the clock. Drivers are immaculate.”",
      n: "Henry Caldwell",
      r: "Head Concierge, Mayfair hotel",
      i: "HC",
      img: "/executive.png",
    },
    {
      q: "“Six pickups across three counties on the wedding morning. Not a single late minute, not a single crumpled dress. We've already booked them for next year.”",
      n: "Priya Shah",
      r: "Wedding Planner, Cotswolds",
      i: "PS",
      img: "/wedding.png",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden font-cormorant text-white"
    >
      {quotes.map((q, i) => (
        <div
          key={q.n}
          aria-hidden={i !== idx}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={q.img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/85" />
        </div>
      ))}

      <div className="relative container-x py-20 sm:py-28 lg:py-44 max-w-4xl mx-auto text-center">
        <div className="reveal !text-white text-[13px] sm:text-[15px] uppercase tracking-[0.28em] sm:tracking-[0.34em] flex items-center gap-3 justify-center">
          <span className="h-px w-8 sm:w-12 bg-white" /> In Their Words
        </div>
        <h2 className="reveal mt-6 sm:mt-7 h-display !font-cormorant text-3xl sm:text-5xl lg:text-6xl text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
          Quietly
          <br />
          <span className="italic font-light text-white">recommended.</span>
        </h2>

        <div className="reveal mt-14 grid">
          {quotes.map((q, i) => (
            <blockquote
              key={q.n}
              aria-hidden={i !== idx}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ease-out ${
                i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-display !font-cormorant italic font-light text-xl sm:text-2xl lg:text-[34px] leading-[1.5] text-white max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                {q.q.replace(/[“”]/g, "")}
              </p>
              <footer className="mt-10 text-[15px] uppercase tracking-[0.34em] text-white/90">
                <div className="font-display normal-case tracking-normal text-xl text-white">
                  {q.n}
                </div>
                <div className="mt-2">{q.r}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="reveal mt-14 flex items-center justify-center gap-3">
          {quotes.map((q, i) => (
            <button
              key={q.n}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === idx}
              className={`h-[2px] transition-all duration-500 ${
                i === idx ? "w-14 bg-white" : "w-8 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
