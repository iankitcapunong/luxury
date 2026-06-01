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
        <div className="reveal max-w-prose mx-auto text-center" style={{ maxWidth: "62ch" }}>
          <div className="editorial-rule justify-center mx-auto max-w-md !text-white/60 text-[10px] tracking-[0.34em]">
            Tomorrow, Attended To
          </div>
          <h2 className="!font-cormorant mt-8 text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] text-white font-normal">
            Tomorrow,
            <br />
            <span className="italic font-light">attended to.</span>
          </h2>

          <p className="mt-10 text-[17px] sm:text-[19px] text-white/85 leading-[1.85] font-light">
            Due to political risks, our armoured vehicles are being designed
            &amp; ordered for clients who want that extra security.
          </p>

          <div className="mt-12 mx-auto h-px w-16 bg-white/40" />

          <p className="mt-12 text-[17px] sm:text-[19px] text-white/85 leading-[1.85] font-light">
            We are committed to providing luxury travel that is also
            environmentally friendly, as we intend to be here for many years to
            come. It is imperative that we have an electric option on the
            horizon.
          </p>
        </div>
      </div>
    </section>
  );
}
