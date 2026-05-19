import useReveal from "../hooks/useReveal";

export default function Future() {
  const ref = useReveal();
  return (
    <section
      id="future"
      ref={ref}
      className="relative bg-black text-white py-32 sm:py-40 lg:py-44 overflow-hidden font-cormorant"
    >
      <div className="container-x relative">
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
