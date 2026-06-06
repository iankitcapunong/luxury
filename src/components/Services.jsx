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
      eyebrow: "Service One",
      title: "Airport Transfers",
      body: "Met airside with a warm welcome, a hot towel and chilled water. Whether it is a family holiday, a honeymoon or an early start for work, your driver tracks the flight, attends to the luggage and has you moving in moments.",
      img: "/airport_noman.png",
      slug: "airport-transfers",
      tag: "Airport Transfers",
    },
    {
      eyebrow: "Service Two",
      title: "Corporate Chauffeur",
      body: "From a single meeting to a full day of stops, your chauffeur keeps you punctual and composed. Uniformed, DBS-checked and NDA-bound, with privacy and quiet whenever the day calls for it.",
      img: "/chauff_noman.png",
      slug: "corporate-chauffeur",
      tag: "Corporate Chauffeur",
    },
    {
      eyebrow: "Service Three",
      title: "Personal Protection",
      body: "Added peace of mind for anyone who wants it. SIA-trained close protection, paired to your vehicle and route, discreet and professional from the kerbside to the door.",
      img: "/executive_noman.png",
      slug: "personal-protection",
      tag: "Personal Protection",
    },
    {
      eyebrow: "Service Four",
      title: "Weddings & Events",
      body: "Weddings, birthdays, anniversaries and proms, every celebration arrives in style. Your party coordinated to the minute, ribbons on request, with a Mercedes V Class for up to eight and a panoramic roof above.",
      img: "/wedding_noman.png",
      slug: "weddings-events",
      tag: "Weddings & Events",
    },
    {
      eyebrow: "Service Five",
      title: "Long Distance Hire",
      body: "City to country, county to coast. Travel in comfort with refreshments on board, reclining leather and a driver who knows the better coffee and the easy stop. The relaxed way to cover the miles.",
      img: "/longride_noman.png",
      slug: "long-distance-hire",
      tag: "Long Distance Hire",
    },
    {
      eyebrow: "Service Six",
      title: "VIP & Celebrity",
      body: "A standout arrival for any occasion that deserves one. Discreet route planning and private entrances when you want them, trained protection available on request, and a driver chosen for composure and quiet discretion.",
      img: "/vip_celeb_noman.png",
      slug: "vip-celebrity",
      tag: "VIP & Celebrity",
    },
    {
      eyebrow: "Service Seven",
      title: "Private Airfield Transfers",
      body: "Met at the steps and driven onto the apron, coordinated with handlers and crew. Flying private for business or leisure, your transfer runs quietly and to the minute, from Farnborough and Biggin Hill to Luton and beyond.",
      img: "/airport_noman.png",
      slug: "private-airfield",
      tag: "Private Airfield Transfers",
    },
  ];
  return (
    <section id="services" ref={ref} className="pt-12 pb-28 lg:pt-16 lg:pb-40 bg-[#F5F0E6] font-cormorant text-black">
      <div className="container-x">
        <div className="reveal flex flex-col items-center text-center gap-7 max-w-2xl mx-auto">
          <div>
            <div className="eyebrow !text-black !text-[12px] flex items-center gap-3 justify-center">
              <span className="hairline" /> The Offering
            </div>
            <h2 className="h-display mt-7 text-4xl sm:text-5xl lg:text-6xl text-black">
              A vehicle for
              <br />
              <span className="italic font-light">every occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-black/80 leading-relaxed italic font-light">
            Every way to travel. One standard of service.
          </p>
        </div>
      </div>

      {/* Editorial panels: alternating image/text rows, full bleed */}
      <div id="features" ref={slideRef} className="mt-20 lg:mt-28">
        {panels.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={p.slug}
              className="group grid grid-cols-1 lg:grid-cols-2 items-stretch border-t border-black/10 last:border-b last:border-black/10"
            >
              <div
                className={`slide-card ${
                  reverse ? "from-right lg:order-2" : "from-left"
                } relative px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24`}
              >
                {/* Decorative offset frame */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute hidden lg:block w-[88%] h-[78%] border border-black/15 rounded-[18px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#C9A227]/50 ${
                    reverse
                      ? "bottom-6 right-6 lg:bottom-8 lg:right-8 group-hover:bottom-5 group-hover:right-5"
                      : "top-6 left-6 lg:top-8 lg:left-8 group-hover:top-5 group-hover:left-5"
                  }`}
                />

                <div
                  className={`reveal-img ${reverse ? "from-bottom" : ""} relative overflow-hidden rounded-[15px] shadow-[0_40px_90px_-28px_rgba(0,0,0,0.5)] min-h-[340px] sm:min-h-[460px] lg:min-h-[640px]`}
                  style={{ transitionDelay: "180ms" }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="ken-burns absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.15]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                  {/* Corner brackets */}
                  <span aria-hidden="true" className="pointer-events-none absolute top-3 left-3 h-7 w-7 border-l border-t border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:top-2 group-hover:left-2 group-hover:border-white" />
                  <span aria-hidden="true" className="pointer-events-none absolute top-3 right-3 h-7 w-7 border-r border-t border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:top-2 group-hover:right-2 group-hover:border-white" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 border-l border-b border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:bottom-2 group-hover:left-2 group-hover:border-white" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 border-r border-b border-white/40 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:bottom-2 group-hover:right-2 group-hover:border-white" />

                  {/* Slow highlight sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-1/2 -left-1/3 h-[200%] w-[55%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[280%] transition-all duration-[1600ms] ease-out"
                  />

                  {/* Numeral */}
                  <span className="pointer-events-none absolute bottom-5 right-6 font-display italic font-light text-5xl lg:text-6xl leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div
                className={`slide-card ${
                  reverse ? "from-left lg:order-1" : "from-right"
                } flex items-center px-6 sm:px-10 lg:px-20 xl:px-28 py-10 sm:py-14 lg:py-28`}
              >
                <div className="max-w-md">
                  <div className="eyebrow !text-black !text-[12px] flex items-center gap-3">
                    <span className="hairline" /> {p.eyebrow}
                  </div>
                  <h3 className="h-display !font-cormorant mt-5 text-3xl sm:text-4xl lg:text-5xl text-black leading-[1.04]">
                    {p.title}
                  </h3>
                  <div className="mt-5 h-px w-12 bg-black/20 transition-all duration-700 group-hover:w-24 group-hover:bg-[#C9A227]" />
                  <p className="mt-7 text-black/80 leading-[1.85] font-light">
                    {p.body}
                  </p>
                  <div className="mt-9 flex items-center gap-5">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelect && onSelect(p.tag);
                      }}
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.34em] text-black hover:text-black/70 transition-colors border-b border-black/40 hover:border-[#C9A227] pb-1"
                    >
                      Enquire
                      <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container-x">
        {/* In-vehicle card */}
        <div className="reveal mt-16 rounded-[15px] border border-white/30 bg-black text-white overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55),0_10px_30px_-12px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_15px_40px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left: interior image with click-to-zoom */}
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

            {/* Right: features list */}
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

        {/* Chilled cabinet tile */}
        <div className="reveal mt-12 mx-auto max-w-2xl text-center px-6 sm:px-8">
          <div className="eyebrow !text-black !text-[12px] flex items-center gap-3 justify-center">
            <span className="hairline" /> The Chilled Cabinet
          </div>
          <h3 className="!font-cormorant mt-7 text-3xl sm:text-4xl lg:text-5xl text-black leading-[1.05]">
            On ice,
            <span className="italic font-light"> by default.</span>
          </h3>
          <div className="mt-6 mx-auto h-px w-12 bg-black/30" />
          <p className="mt-7 text-[15px] sm:text-[17px] text-black/80 leading-[1.85] font-light">
            A fully stocked bar, the finest spirits and champagnes, stocked to
            your specific tastes and restocked before each journey.{" "}
            <span className="italic">Specifics can be ordered on request.</span>
          </p>
        </div>

        {/* Concierge extras */}
        <div className="reveal mt-20 mx-auto max-w-5xl px-2 sm:px-4">
          <div className="text-center">
            <div className="eyebrow !text-black !text-[12px] flex items-center gap-3 justify-center">
              <span className="hairline" /> Concierge Extras
            </div>
            <h3 className="!font-cormorant mt-7 text-3xl sm:text-4xl lg:text-5xl text-black leading-[1.05]">
              Beyond the vehicle,
              <span className="italic font-light"> still attended.</span>
            </h3>
            <div className="mt-6 mx-auto h-px w-12 bg-black/30" />
            <p className="mt-7 text-[15px] sm:text-[17px] text-black/80 leading-[1.85] font-light max-w-xl mx-auto">
              The journey is rarely only the journey. A short list of the
              quieter things our desk arranges in parallel.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {[
              {
                n: "01",
                title: "Fully stocked bar",
                body: "The finest spirits and champagnes on board. Specifics can be ordered on request.",
              },
              {
                n: "02",
                title: "Restaurant reservations",
                body: "Tables held at the hotels and rooms our clients prefer, coordinated to the hour of arrival.",
              },
              {
                n: "03",
                title: "Security options",
                body: "All officers SIA-qualified; close-protection-level security available on request.",
              },
              {
                n: "04",
                title: "Table bookings for clubs",
                body: "Door-to-door arrangements with members' rooms and private clubs across the city.",
              },
              {
                n: "05",
                title: "Massage seating",
                body: "Reclining leather with on-seat massage, for the long miles and the late return.",
              },
            ].map((item) => (
              <li
                key={item.n}
                className="group flex items-start gap-5 border-t border-black/15 pt-6"
              >
                <span className="font-display italic font-light text-3xl sm:text-4xl leading-none text-black/70 shrink-0 transition-colors duration-500 group-hover:text-black">
                  {item.n}
                </span>
                <div>
                  <h4 className="font-display text-xl sm:text-2xl text-black leading-tight">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-[1.85] text-black/75 font-light">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
