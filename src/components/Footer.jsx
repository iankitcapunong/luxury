import Icon from "./Icon";

export default function Footer() {
  const cols = [
    {
      h: "Services",
      l: [
        "Airport Transfers",
        "Corporate Chauffeur",
        "VIP & Celebrity",
        "Weddings & Events",
        "Long Distance Hire",
        "Personal Protection",
        "Private Airfield Transfers",
      ],
    },
  ];
  return (
    <footer className="bg-black text-white font-cormorant border-t border-white/15 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="container-x py-14 sm:py-20 lg:py-24 relative">
        {/* Editorial signature line */}
        <div className="flex items-center justify-center mx-auto max-w-md mb-12 sm:mb-16 text-[10px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.34em] text-white whitespace-nowrap">
          <span className="h-px flex-1 bg-white/30 mr-3 sm:mr-5" />
          Luxury Transport, London. Private chauffeur, by introduction only.
          <span className="h-px flex-1 bg-white/30 ml-3 sm:ml-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#top" className="group flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-[15px] border border-white/40 text-white font-display italic text-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-110">
                L
              </span>
              <div className="leading-tight">
                <div className="font-display text-xl tracking-wide text-white">
                  Luxury Transport
                </div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.34em] text-white/70">
                  Private Chauffeur, United Kingdom
                </div>
              </div>
            </a>
            <p className="mt-7 max-w-sm text-[15px] text-white/80 leading-[1.85] italic font-light">
              Safe, stylish and quietly professional passenger transport. A
              Mercedes collective, available across the United Kingdom, every
              hour of every day.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Icon.Instagram, Icon.Linkedin, Icon.X].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="group grid h-10 w-10 place-items-center rounded-[15px] border border-white/25 text-white/85 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white hover:text-white hover:-translate-y-1.5 hover:scale-110"
                >
                  <I className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h} className="lg:col-span-3">
              <div className="text-[12px] uppercase tracking-[0.34em] text-white font-medium">{c.h}</div>
              <ul className="mt-5 space-y-3 text-[15px] text-white/85 font-light">
                {c.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-500"
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.34em] text-white font-medium">Contact</div>
            <ul className="mt-5 space-y-3 text-[15px] text-white/85 font-light">
              <li className="flex items-center gap-3">
                <Icon.Phone className="h-3.5 w-3.5 text-white" /> +44 (0)20
                0000 0000
              </li>
              <li className="flex items-center gap-3">
                <Icon.Mail className="h-3.5 w-3.5 text-white" />{" "}
                bookings@luxurytransport.co.uk
              </li>
              <li className="mt-4 pt-4 border-t border-white/15 text-white/70 text-[12px] uppercase tracking-[0.28em] leading-relaxed">
                London, Manchester
                <br />
                Birmingham, Edinburgh
              </li>
              <li className="mt-5">
                <a
                  href="/how-it-works"
                  className="inline-block text-[12px] uppercase tracking-[0.28em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-500"
                >
                  Apply for membership
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/65 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Luxury Transport Ltd. All rights
            reserved
          </p>
          <p className="font-display italic font-light text-[14px] sm:text-[15px] normal-case tracking-normal text-white">
            Move in silence. Discretion is our policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
