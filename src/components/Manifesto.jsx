import useReveal from "../hooks/useReveal";

export default function Manifesto() {
  const ref = useReveal();
  const pillars = [
    {
      title: "Lifestyle",
      body: "Not a service you call, but a standard you keep. The vehicle, your private residence.",
    },
    {
      title: "Movement",
      body: "Choreographed before it begins. Route, hour, refreshment, silence.",
    },
    {
      title: "The Future and Beyond",
      body: "Luxury travel, quietly sustainable. An electric future among our aspirations. The future of arrival, quietly.",
    },
  ];

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative bg-black text-white py-24 lg:py-36 overflow-hidden font-cormorant"
    >
      {/* Background video with cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        <video
          src="/herosection_mayfair_final_loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.9) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container-x relative z-10">
        <div className="reveal max-w-3xl mx-auto text-center">
          <div className="editorial-rule justify-center mx-auto max-w-md !text-white/60">
            The Vision
          </div>
          <h2 className="h-display !font-cormorant mt-7 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
            Not a ride.
            <br />
            <span className="italic font-light">A movement.</span>
          </h2>
          <p className="mt-4 text-[13px] sm:text-[14px] uppercase tracking-[0.34em] text-white/55">
            Mercedes V-Class · Mercedes Sprinter · Mercedes Vito
          </p>
          <p className="mt-8 text-white/80 leading-[1.85] text-[19px] font-light max-w-2xl mx-auto">
            Redefining the art of movement. Not a transfer, but a curated
            experience. We are a collective with a variety of vehicle options,
            every chauffeur hand-picked to ensure a flawless experience.
          </p>
        </div>

        <div className="reveal mt-16 max-w-2xl mx-auto text-center">
          <div className="editorial-rule justify-center mx-auto max-w-xs !text-white/60">
            Origin
          </div>
          <p className="mt-6 font-display italic font-light text-xl sm:text-xl leading-[1.7] text-white/90">
            Several years ago I began a journey in search of luxury transport.
            To my astonishment, there weren't many options beyond the
            conventional: limousines, factory-issue Vitos and party buses, all
            rather dated and not exactly suited to every occasion. That is when
            Luxury Transport was born, with one mandatory theme echoing
            throughout, luxury travel becoming a way of life.
          </p>
        </div>

        <div className="reveal mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display italic font-light text-6xl leading-none text-white/80">
                {i + 1}.
              </div>
              <div className="mt-5 mx-auto h-px w-12 bg-white/40" />
              <h3 className="mt-6 font-display text-2xl text-white tracking-wide">
                {p.title}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.85] text-white/75 font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 max-w-2xl mx-auto text-center">
          <p className="font-display italic font-light text-2xl sm:text-3xl leading-[1.45] text-white">
            Seen by few.
            <br />
            <span className="text-white/70">Trusted by all.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
