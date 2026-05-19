import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const links = [
    ["The Vision", "/vision"],
    ["The Future", "/future"],
    ["How it works", "/how-it-works"],
    ["Services", "/services"],
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToPage = (e, path) => {
    e.preventDefault();
    setOpen(false);
    navigate(path);
  };

  const goHomeTop = (e) => {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav
        className={`w-full px-4 sm:px-6 md:px-8 transition-all duration-300 ${
          scrolled
            ? "py-3 sm:py-4 bg-black border-b border-white/10"
            : "py-4 sm:py-5 bg-black/85 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          <a
            href="/"
            onClick={goHomeTop}
            className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0"
          >
            <span className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/70 text-white font-display italic text-[16px] sm:text-[18px] font-bold shrink-0">
              L
            </span>
            <div className="leading-tight font-cormorant min-w-0">
              <div className="tracking-wide text-white text-[15px] sm:text-[18px] font-bold truncate">
                Luxury Transport
              </div>
              <div className="uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white mt-0.5 sm:mt-1 text-[10px] sm:text-[12px] font-bold truncate">
                Private Chauffeur · UK
              </div>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-10 text-[15px] font-cormorant uppercase tracking-[0.34em] font-medium text-white/90">
            {links.map(([label, path]) => (
              <li key={path}>
                <a
                  href={path}
                  onClick={(e) => goToPage(e, path)}
                  className="relative inline-block py-1 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-white/30"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 mx-4 border border-white/10 rounded-2xl bg-black/90 backdrop-blur-2xl text-white">
          <div className="py-4 px-6 flex flex-col gap-3">
            {links.map(([l, path]) => (
              <a
                key={path}
                href={path}
                onClick={(e) => goToPage(e, path)}
                className="py-2 text-[15px] font-cormorant"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
