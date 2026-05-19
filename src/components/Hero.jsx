import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      ref={ref}
      className="group/hero relative overflow-hidden flex flex-col justify-end min-h-screen pt-28 pb-10 sm:pt-36 lg:pt-44 lg:pb-12"
    >
      {/* Background video — clear, with hover dim */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        <video
          src="/0514.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Cinematic vignette — always on, heavier at edges and bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* atmospheric light wash */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold-300/25 blur-[120px] z-0" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[36rem] w-[36rem] rounded-full bg-black/10 blur-[120px] z-0" />

      <div className="relative z-10 w-full pl-4 sm:pl-6 lg:pl-10 pr-4 sm:pr-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-end font-cormorant">
        <div className="lg:col-span-7">
          <h1
            className="reveal h-display !font-cormorant text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.02] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)]"
            style={{ transitionDelay: "150ms" }}
          >
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #f8efd5 60%, #daba7f 100%)",
                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
              }}
            >
              Arrive
            </span>
            <span
              className="block italic font-light"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f97316 0%, #fbbf24 40%, #ffe9b0 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 4px 18px rgba(249,115,22,0.35))",
              }}
            >
              Composed.
            </span>
          </h1>
          <div
            className="reveal mt-5 sm:mt-7 flex items-start gap-3 sm:gap-4 max-w-xl"
            style={{ transitionDelay: "350ms" }}
          >
            <span className="mt-2 sm:mt-3 h-px w-6 sm:w-10 bg-gold-400 shrink-0" />
            <p className="text-base sm:text-lg lg:text-[24px] text-white leading-relaxed font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              A private chauffeur house, fluent in the small things: the chilled
              water, the unspoken route, the door already open.
            </p>
          </div>

          <div
            className="reveal mt-8 sm:mt-10 sm:ml-14 inline-block animate-gentle-bounce"
            style={{ transitionDelay: "550ms" }}
          >
            <Link
              to="/how-it-works"
              className="group flex gap-2 text-base sm:text-lg transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold h-12 sm:h-14 rounded-full pr-7 pl-7 sm:pr-10 sm:pl-10 relative gap-x-2 gap-y-2 items-center justify-center"
              style={{
                background:
                  "linear-gradient(#daba7f, #daba7f) padding-box, linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box",
                border: "1.5px solid transparent",
                boxShadow:
                  "-15px 0 40px -5px rgba(249, 115, 22, 0.6), 15px 0 40px -5px rgba(255, 255, 255, 0.4)",
              }}
            >
              <span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">
                Send Inquiry
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
