import useReveal from "../hooks/useReveal";

export default function Manifesto() {
  const ref = useReveal();
  const pillars = [
    {
      title: "Lifestyle",
      body: "Luxury Transport is not a service you call. It is a standard you keep. The car is the room you arrive in, and we treat it with the seriousness of a private residence.",
    },
    {
      title: "Movement",
      body: "Every journey is choreographed before it begins. Route, hour, refreshment, silence. The minute before pickup matters as much as the destination.",
    },
    {
      title: "Tomorrow",
      body: "We are building the chauffeur house of the next decade. Electric and hybrid Mercedes fleets, end-to-end concierge, paparazzi-aware routing, single-keystroke booking. The future of arrival, quietly.",
    },
  ];

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative bg-black text-white py-24 lg:py-36 overflow-hidden font-cormorant"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="container-x relative">
        <div className="reveal max-w-3xl mx-auto text-center">
          <div className="editorial-rule justify-center mx-auto max-w-md !text-white/60">
            The Vision
          </div>
          <h2 className="h-display !font-cormorant mt-7 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
            Not a ride.
            <br />
            <span className="italic font-light">A movement.</span>
          </h2>
          <p className="mt-8 text-white/80 leading-[1.85] text-[17px] font-light max-w-2xl mx-auto">
            Luxury transport is not just travelling in luxury. It is a lifestyle.
            A continuity of standard from the door of the house to the door of
            the next. We are a house of chauffeurs, and the journey is our craft.
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
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-5 mx-auto h-px w-12 bg-white/40" />
              <h3 className="mt-6 font-display text-2xl text-white tracking-wide">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.85] text-white/75 font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 max-w-2xl mx-auto text-center">
          <p className="font-display italic font-light text-2xl sm:text-3xl leading-[1.45] text-white">
            Move in silence.
            <br />
            <span className="text-white/70">Discretion is our policy.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
