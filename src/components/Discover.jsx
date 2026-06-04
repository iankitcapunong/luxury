import useReveal from "../hooks/useReveal";

export default function Discover() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black text-white font-cormorant"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] lg:min-h-[640px]">
        <div className="reveal-img relative lg:col-span-7 min-h-[360px] overflow-hidden">
          <img
            src="/chauff.png"
            alt="Inside the cabin"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
        </div>
        <div className="lg:col-span-5 flex items-center px-8 lg:px-14 py-16 lg:py-24">
          <div className="reveal max-w-md">
            <div className="!text-white text-[13px] uppercase tracking-[0.34em] flex items-center gap-3">
              <span className="h-px w-12 bg-white" /> Discover
            </div>
            <h2 className="font-display !font-cormorant mt-6 text-4xl lg:text-5xl leading-[1.05] text-white">
              Your wish
              <span className="italic font-light text-white">
                {" "}
                is our command.
              </span>
            </h2>
            <div className="mt-5 h-px w-12 bg-white/70" />
            <p className="mt-7 text-white/85 text-[17px] leading-[1.85] font-light">
              Discretion, punctuality and composure are not features of the
              journey; they are the journey. Every element of the service is
              <span className="italic"> non-negotiable</span>. When our vehicles
              are called, nothing is left up to chance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
