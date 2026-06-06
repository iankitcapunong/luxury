import Icon from "./Icon";
import useReveal from "../hooks/useReveal";

export default function CTA() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-40 bg-black text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-white/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="container-x relative text-center max-w-3xl mx-auto">
        <div className="reveal !text-white text-[13px] sm:text-[15px] uppercase tracking-[0.28em] sm:tracking-[0.34em] flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
          <span className="h-px w-8 sm:w-12 bg-white" /> Request Your Booking <span className="h-px w-8 sm:w-12 bg-white" />
        </div>
        <h2 className="reveal h-display !font-cormorant mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl text-white">
          One enquiry.
          <br />
          <span className="italic font-light text-white">Every detail attended.</span>
        </h2>
        <p className="reveal mt-8 text-white/85 leading-relaxed font-light max-w-xl mx-auto">
          Share your date, pickup location, and destination. Our team will
          respond within the hour with vehicle availability, driver
          assignment, and a confirmed quotation.
        </p>
        <p className="reveal mt-10 font-display italic font-light text-xl sm:text-2xl text-white/90 max-w-xl mx-auto">
          The only way to travel, one level of service:
          <span className="not-italic font-normal tracking-[0.18em]"> LUXURY.</span>
        </p>
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:bookings@luxurytransport.co.uk"
            className="btn-primary !rounded-[15px] !bg-white !text-black hover:!bg-white/90"
          >
            Email Our Team <Icon.ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+440000000000"
            className="btn-ghost !rounded-[15px] !text-white !border-white/40 hover:!border-white hover:!text-white"
          >
            <Icon.Phone className="h-4 w-4" /> Call Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
