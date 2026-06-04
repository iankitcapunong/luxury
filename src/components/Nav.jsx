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
    ["How it works", "/how-it-works"],
    ["Services", "/services"],
    ["The Future", "/future"],
    ["Enquiries", "/enquiries"],
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
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-8">
          {/* Left links */}
          <ul className="flex items-center justify-end gap-10 text-[14px] font-cormorant uppercase tracking-[0.34em] font-medium text-white/90">
            {links.slice(0, 2).map(([label, path]) => (
              <li key={path}>
                <a
                  href={path}
                  onClick={(e) => goToPage(e, path)}
                  aria-current={location.pathname === path ? "page" : undefined}
                  className={`relative inline-block py-1 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
                    location.pathname === path
                      ? "text-white after:w-full"
                      : "text-white/80 after:w-0"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Centered monogram brand mark */}
          <a
            href="/"
            onClick={goHomeTop}
            aria-label="Luxury Transport home"
            className="flex flex-col items-center gap-1 shrink-0"
          >
            <span className="grid h-11 w-11 lg:h-12 lg:w-12 place-items-center rounded-full border border-white/70 text-white font-display italic text-[18px] lg:text-[20px] font-bold">
              L
            </span>
            <span className="font-cormorant uppercase tracking-[0.32em] text-white text-[10px] lg:text-[11px] font-medium">
              Luxury Transport
            </span>
          </a>

          {/* Right links */}
          <ul className="flex items-center justify-start gap-10 text-[14px] font-cormorant uppercase tracking-[0.34em] font-medium text-white/90">
            {links.slice(2).map(([label, path]) => (
              <li key={path}>
                <a
                  href={path}
                  onClick={(e) => goToPage(e, path)}
                  aria-current={location.pathname === path ? "page" : undefined}
                  className={`relative inline-block py-1 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
                    location.pathname === path
                      ? "text-white after:w-full"
                      : "text-white/80 after:w-0"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: centered brand mark + hamburger */}
        <div className="md:hidden grid grid-cols-[auto_1fr_auto] items-center gap-3">
          <span aria-hidden="true" className="h-9 w-9" />
          <a
            href="/"
            onClick={goHomeTop}
            aria-label="Luxury Transport home"
            className="flex flex-col items-center gap-1 justify-self-center"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/70 text-white font-display italic text-[16px] font-bold">
              L
            </span>
            <span className="font-cormorant uppercase tracking-[0.28em] text-white text-[9px] font-medium">
              Luxury Transport
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/30 justify-self-end"
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
                aria-current={location.pathname === path ? "page" : undefined}
                className={`py-2 text-[15px] font-cormorant border-l-2 pl-3 transition-colors ${
                  location.pathname === path
                    ? "border-white text-white"
                    : "border-transparent text-white/70"
                }`}
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
