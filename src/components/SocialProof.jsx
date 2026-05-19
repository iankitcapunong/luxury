import useReveal from "../hooks/useReveal";

export default function SocialProof() {
  const ref = useReveal();
  const logos = [
    "MAYFAIR HOTEL CO.",
    "CLARIDGE CONCIERGE",
    "NORTHWOOD CAPITAL",
    "ASCOT EVENTS",
    "KENSINGTON & CO.",
    "HARLEY MEDICAL",
  ];
  return (
    <section
      ref={ref}
      className="bg-black text-white py-24 relative overflow-hidden font-cormorant"
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
        <div className="reveal text-center">
          <div className="editorial-rule justify-center mx-auto max-w-md !text-white/60">
            In the company of
          </div>
          <h3 className="font-display italic font-light text-3xl sm:text-4xl mt-7 max-w-2xl mx-auto leading-snug text-white">
            Hotels, concierges, labels and quietly discerning private clients
          </h3>
        </div>
        <div className="reveal mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display tracking-[0.28em] text-[11px] text-white/55 hover:text-white transition-all duration-700"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
