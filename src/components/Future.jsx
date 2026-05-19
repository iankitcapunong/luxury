import useReveal from "../hooks/useReveal";

export default function Future() {
  const ref = useReveal();
  return (
    <section
      id="future"
      ref={ref}
      className="relative bg-black text-white py-32 sm:py-40 lg:py-44 overflow-hidden font-cormorant"
    >
      {/* Background video with cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        <video
          src="/background.mp4"
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
        <div className="reveal max-w-prose mx-auto text-center" style={{ maxWidth: "60ch" }}>
          <div className="editorial-rule justify-center mx-auto max-w-md !text-white/60 text-[10px] tracking-[0.34em]">
            The Future and Beyond
          </div>
          <h2 className="!font-cormorant mt-8 text-[40px] sm:text-[48px] lg:text-[52px] leading-[1.05] text-white font-normal">
            Tomorrow,
            <br />
            <span className="italic font-light">attended to.</span>
          </h2>
          <p className="mt-10 text-[17px] sm:text-[19px] text-white/80 leading-[1.85] font-light">
            Our standard is a fleet that is hand-maintained, electrified where
            the route allows, and operated by drivers who are paid as
            professionals, not as gig hires. The future of luxury transport is
            not larger. It is quieter.
          </p>
        </div>
      </div>
    </section>
  );
}
