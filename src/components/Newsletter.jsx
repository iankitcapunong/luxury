import Icon from "./Icon";
import useReveal from "../hooks/useReveal";

export default function Newsletter() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative bg-[#F5F0E6] text-black py-20 lg:py-28 border-t border-black/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="eyebrow !text-black flex items-center gap-3">
              <span className="h-px w-12 bg-black" /> Stay Informed
            </div>
            <h3 className="font-display !font-cormorant mt-5 text-3xl lg:text-4xl leading-[1.1] text-black">
              Editions, journeys and quiet
              <span className="italic font-light text-black">
                {" "}
                announcements.
              </span>
            </h3>
            <p className="mt-5 text-black/75 leading-[1.85] font-light max-w-md">
              An occasional dispatch from the desk. Never more than once a
              month, never anything you wouldn't read aloud.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. The first dispatch arrives shortly.");
            }}
            className="lg:col-span-6 reveal flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              required
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black transition"
            />
            <button
              type="submit"
              className="btn-primary !rounded-[15px] !px-7 !py-3 !text-[11px] !tracking-[0.28em] !bg-black !text-white hover:!bg-black/80"
            >
              Subscribe <Icon.ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
