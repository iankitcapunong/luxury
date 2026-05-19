import { useState } from "react";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import useScrollSlide from "../hooks/useScrollSlide";

export default function Services({ onSelect }) {
  const ref = useReveal();
  const slideRef = useScrollSlide();
  const [activeFeature, setActiveFeature] = useState(null);
  const sprinterFeatures = [
    { label: "Leather seats", x: 28, y: 85 },
    { label: "Climate control", x: 14, y: 10 },
    { label: "Phone chargers", x: 30, y: 76 },
    { label: "Bottled water", x: 82, y: 60 },
    { label: "Optional WiFi", x: 86, y: 12 },
    { label: "Uniformed drivers", x: 44, y: 30 },
    { label: "Umbrellas & tissues", x: 8, y: 38 },
    { label: "Panoramic roof", x: 50, y: 6 },
    { label: "Fireplace ambience", x: 78, y: 32 },
    { label: "Refrigerator", x: 50, y: 42 },
    { label: "Champagne bar", x: 50, y: 52 },
    { label: "Massage seats", x: 72, y: 85 },
    { label: "360° camera", x: 50, y: 18 },
  ];
  const panels = [
    {
      eyebrow: "Service · One",
      title: "Airport Transfers",
      body: "Met airside with a name card, a hot towel and a bottle of chilled water. Flights tracked from gate to kerbside, luggage attended before you can ask.",
      img: "/airport.png",
      slug: "airport-transfers",
      tag: "Airport Transfers",
    },
    {
      eyebrow: "Service · Two",
      title: "Corporate Chauffeur",
      body: "Day rates, board pickups, multi-stop schedules. Uniformed, DBS-checked and NDA-bound. Tinted glass standard. Silence, when you want it, standard too.",
      img: "/chauff.png",
      slug: "corporate-chauffeur",
      tag: "Corporate Chauffeur",
    },
    {
      eyebrow: "Service · Three",
      title: "VIP & Celebrity",
      body: "Paparazzi-aware route planning, side entrances and private terminals. Drivers chosen for composure as much as for skill, and trained to forget what they have seen.",
      img: "/vip_celeb.png",
      slug: "vip-celebrity",
      tag: "VIP & Celebrity",
    },
    {
      eyebrow: "Service · Four",
      title: "Weddings & Events",
      body: "Bride, groom and party coordinated to the minute. Ribbons optional, immaculate interiors essential. Mercedes V Class for up to eight passengers, panoramic roof above them.",
      img: "/wedding.png",
      slug: "weddings-events",
      tag: "Weddings & Events",
    },
    {
      eyebrow: "Service · Five",
      title: "Long Distance Hire",
      body: "City to country, county to coast. Champagne bar, refrigerator and reclining leather for the miles ahead. Your driver knows the better coffee and the discreet stop.",
      img: "/longride.png",
      slug: "long-distance-hire",
      tag: "Long Distance Hire",
    },
  ];
  return (
    <section id="services" ref={ref} className="pt-12 pb-28 lg:pt-16 lg:pb-40 bg-white font-cormorant text-black">
      <div className="container-x">
        <div className="reveal flex flex-col items-center text-center gap-7 max-w-2xl mx-auto">
          <div>
            <div className="eyebrow !text-black !text-[12px] flex items-center gap-3 justify-center">
              <span className="hairline" /> The Offering
            </div>
            <h2 className="h-display mt-7 text-4xl sm:text-5xl lg:text-6xl text-black">
              A fleet for
              <br />
              <span className="italic font-light">every occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-black/80 leading-relaxed italic font-light">
            Every way to travel. One standard of service.
          </p>
        </div>
      </div>

      {/* Editorial panels — alternating image/text rows, animated slide in/out */}
      <div id="features" ref={slideRef} className="container-x mt-16 lg:mt-20 space-y-12 lg:space-y-16">
        {panels.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={p.slug}
              className={`slide-card ${reverse ? "from-right" : "from-left"} group grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden rounded-[20px] border border-white/10 bg-black text-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55),0_10px_30px_-12px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_15px_40px_-12px_rgba(0,0,0,0.5)]`}
            >
              <div
                className={`grayscale-img relative min-h-[260px] sm:min-h-[340px] lg:min-h-[520px] overflow-hidden ${reverse ? "lg:order-2" : ""}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="ken-burns absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.15]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Corner brackets */}
                <span aria-hidden="true" className="pointer-events-none absolute top-3 left-3 h-7 w-7 border-l border-t border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:top-2 group-hover:left-2 group-hover:border-white" />
                <span aria-hidden="true" className="pointer-events-none absolute top-3 right-3 h-7 w-7 border-r border-t border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:top-2 group-hover:right-2 group-hover:border-white" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 border-l border-b border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:bottom-2 group-hover:left-2 group-hover:border-white" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 border-r border-b border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:bottom-2 group-hover:right-2 group-hover:border-white" />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1/2 -left-1/3 h-[200%] w-[55%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[280%] transition-all duration-[1600ms] ease-out"
                />

                <span className="pointer-events-none absolute bottom-5 right-6 font-display italic font-light text-5xl lg:text-6xl leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className={`flex items-center px-6 sm:px-8 lg:px-14 xl:px-16 py-10 sm:py-12 lg:py-16 ${reverse ? "lg:order-1" : ""}`}
              >
                <div className="max-w-md">
                  <div className="eyebrow !text-white/60 !text-[12px] flex items-center gap-3">
                    <span className="h-px w-14 bg-white/40" /> {p.eyebrow}
                  </div>
                  <h3 className="h-display !font-cormorant mt-5 text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.04]">
                    {p.title}
                  </h3>
                  <div className="mt-5 h-px w-12 bg-white/40 transition-all duration-700 group-hover:w-24 group-hover:bg-white" />
                  <p className="mt-7 text-white/80 leading-[1.85] font-light">
                    {p.body}
                  </p>
                  <div className="mt-9 flex items-center gap-5">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelect && onSelect(p.tag);
                      }}
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.34em] text-white hover:text-white/80 transition-colors border-b border-white/40 hover:border-white pb-1"
                    >
                      Enquire
                      <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container-x">
        {/* In-vehicle card */}
        <div className="reveal mt-16 rounded-[15px] border border-white/30 bg-black text-white overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55),0_10px_30px_-12px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_15px_40px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left — interior image with click-to-zoom */}
            <div className="relative min-h-[280px] lg:min-h-[420px] bg-black overflow-hidden lg:order-1">
              <img
                src="/inside-s.png"
                alt="Inside the Mercedes Sprinter"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transformOrigin:
                    activeFeature !== null
                      ? `${sprinterFeatures[activeFeature].x}% ${sprinterFeatures[activeFeature].y}%`
                      : "50% 50%",
                  transform: activeFeature !== null ? "scale(2.4)" : "scale(1)",
                  filter: "grayscale(1) contrast(1.05)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent lg:from-black/60" />
              {activeFeature !== null && (
                <div
                  className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white whitespace-nowrap transition-opacity duration-500"
                  style={{
                    left: `${sprinterFeatures[activeFeature].x}%`,
                    top: `${sprinterFeatures[activeFeature].y}%`,
                  }}
                >
                  {sprinterFeatures[activeFeature].label}
                </div>
              )}
            </div>

            {/* Right — features list */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col lg:order-2">
              <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] sm:tracking-[0.34em] !text-white">Inside the Sprinter</div>
              <h3 className="font-display italic font-light text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
                Quietly equipped.
              </h3>
              <div className="mt-5 h-px w-12 bg-white/60" />
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3 text-[13px] sm:text-[15px]">
                {sprinterFeatures.map((f, i) => {
                  const isActive = activeFeature === i;
                  return (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => setActiveFeature(isActive ? null : i)}
                      aria-pressed={isActive}
                      className={`flex items-center gap-2 text-left transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/85 hover:text-white"
                      }`}
                    >
                      <span
                        className={`h-1 w-1 rounded-full transition-all duration-300 ${
                          isActive ? "bg-white scale-[2]" : "bg-white/50"
                        }`}
                      />
                      {f.label}
                    </button>
                  );
                })}
              </div>
              {activeFeature !== null && (
                <button
                  type="button"
                  onClick={() => setActiveFeature(null)}
                  className="mt-5 sm:mt-6 self-start text-[11px] uppercase tracking-[0.28em] text-white/60 hover:text-white transition-colors"
                >
                  Reset view
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
