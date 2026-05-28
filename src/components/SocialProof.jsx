import useReveal from "../hooks/useReveal";

export default function SocialProof() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="bg-black text-white py-28 sm:py-32 lg:py-40 relative overflow-hidden font-cormorant"
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
        <div className="reveal text-center max-w-3xl mx-auto">
          <div className="editorial-rule justify-center mx-auto max-w-md !text-white/60">
            Who we've worked with
          </div>
          <h3 className="font-display italic font-light text-3xl sm:text-4xl lg:text-5xl mt-8 max-w-2xl mx-auto leading-[1.2] text-white">
            References available on request.
            <br />
            <span className="text-white/70">We do not name our clients.</span>
          </h3>
          <p className="mt-10 text-white/80 text-[17px] leading-[1.85] font-light max-w-2xl mx-auto">
            Discretion and privacy are fundamental — yet we have quietly carried
            household names, label rosters, visiting heads of state and the
            kind of clientele whose schedules never leave the room.
          </p>
          <p className="mt-6 text-white/70 text-[15px] leading-[1.85] font-light max-w-xl mx-auto">
            Hotels, concierges, labels and quietly discerning private clients.
            Names are kept where they should be, out of the conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
