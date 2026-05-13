import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
import Loader from "./Loader";
import Blog from "./Blog";

const SERVICE_BLOG_SLUGS = {
  "Airport Transfers": "airport-transfers",
  "Corporate Chauffeur": "corporate-chauffeur",
  "VIP & Celebrity": "vip-celebrity",
  "Weddings & Events": "weddings-events",
  "Long Distance Hire": "long-distance-hire",
};

// --- Tiny inline SVG icon set (no external lib) ----------------------------
const Icon = {
  Plane: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M10.5 19.5 8 22l-1-1 1.5-3.5L4 15l-2 1-1-1 4-4-1.5-5L5 5l3 4.5L13 8l5.5-5.5a2.12 2.12 0 0 1 3 3L16 11l1.5 5L19 18l-1 1-1-2-4.5-3z" />
    </svg>
  ),
  Crown: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M3 7l4 5 5-8 5 8 4-5-2 12H5L3 7z" />
      <path d="M5 19h14" />
    </svg>
  ),
  Ring: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <circle cx="12" cy="15" r="5" />
      <path d="M9 5h6l-2 5h-2L9 5z" />
    </svg>
  ),
  Briefcase: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
  Champagne: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M8 3h8l-1 7a3 3 0 0 1-6 0L8 3z" />
      <path d="M12 13v8" />
      <path d="M9 21h6" />
    </svg>
  ),
  Road: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M6 3l-3 18" />
      <path d="M18 3l3 18" />
      <path d="M12 4v2" />
      <path d="M12 10v2" />
      <path d="M12 16v2" />
    </svg>
  ),
  Phone: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.7 2.77a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.31-1.27a2 2 0 0 1 2.11-.45c.89.34 1.82.57 2.77.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  Instagram: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  ),
  Linkedin: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v8" />
      <circle cx="8" cy="7" r=".8" fill="currentColor" />
      <path d="M12 18v-5a2 2 0 0 1 4 0v5" />
      <path d="M12 13v5" />
    </svg>
  ),
  X: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M4 4l16 16" />
      <path d="M20 4 4 20" />
    </svg>
  ),
};

// --- Reveal-on-scroll hook --------------------------------------------------
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    el.querySelectorAll(".reveal, .reveal-img").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

// --- Nav --------------------------------------------------------------------
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const links = [
    ["How it works", "how"],
    ["Services", "services"],
    ["Clients", "testimonials"],
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
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
            ? "py-3 sm:py-4 bg-[#19181c] border-b border-white/10"
            : "py-4 sm:py-5 bg-[#19181c]/85 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          <a
            href="/"
            onClick={goHomeTop}
            className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0"
          >
            <span className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full border border-gold-400/70 text-gold-400 font-display italic text-[16px] sm:text-[18px] font-bold shrink-0">
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
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={(e) => goToSection(e, id)}
                  className="relative inline-block py-1 hover:text-gold-300 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
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
        <div className="md:hidden mt-2 mx-4 border border-white/10 rounded-2xl bg-slate-900/85 backdrop-blur-2xl text-white">
          <div className="py-4 px-6 flex flex-col gap-3">
            {links.map(([l, id]) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={(e) => goToSection(e, id)}
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

// --- Hero -------------------------------------------------------------------
function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      ref={ref}
      className="group/hero relative overflow-hidden flex flex-col justify-end min-h-screen pt-28 pb-10 sm:pt-36 lg:pt-44 lg:pb-12"
    >
      {/* Background video — clear, with hover dim */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#4a8fc8]">
        <video
          src="/merc.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Cinematic vignette — always on, heavier at edges and bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* atmospheric light wash */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold-300/25 blur-[120px] z-0" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[36rem] w-[36rem] rounded-full bg-ink-900/10 blur-[120px] z-0" />

      <div className="relative z-10 w-full pl-4 sm:pl-6 lg:pl-10 pr-4 sm:pr-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-end font-cormorant">
        <div className="lg:col-span-7">
          <h1
            className="reveal h-display !font-cormorant text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.02] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)]"
            style={{ transitionDelay: "150ms" }}
          >
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #f8efd5 60%, #daba7f 100%)",
                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
              }}
            >
              Arrive
            </span>
            <span
              className="block italic font-light"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f97316 0%, #fbbf24 40%, #ffe9b0 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 4px 18px rgba(249,115,22,0.35))",
              }}
            >
              Composed.
            </span>
          </h1>
          <div
            className="reveal mt-5 sm:mt-7 flex items-start gap-3 sm:gap-4 max-w-xl"
            style={{ transitionDelay: "350ms" }}
          >
            <span className="mt-2 sm:mt-3 h-px w-6 sm:w-10 bg-gold-400 shrink-0" />
            <p className="text-base sm:text-lg lg:text-[24px] text-white leading-relaxed font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              A private chauffeur house, fluent in the small things: the chilled
              water, the unspoken route, the door already open.
            </p>
          </div>

          <div
            className="reveal mt-8 sm:mt-10 sm:ml-14 inline-block animate-gentle-bounce"
            style={{ transitionDelay: "550ms" }}
          >
            <a
              href="#contact"
              className="group flex gap-2 text-base sm:text-lg transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold h-12 sm:h-14 rounded-full pr-7 pl-7 sm:pr-10 sm:pl-10 relative gap-x-2 gap-y-2 items-center justify-center"
              style={{
                background:
                  "linear-gradient(#daba7f, #daba7f) padding-box, linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box",
                border: "1.5px solid transparent",
                boxShadow:
                  "-15px 0 40px -5px rgba(249, 115, 22, 0.6), 15px 0 40px -5px rgba(255, 255, 255, 0.4)",
              }}
            >
              <span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">
                Send Inquiry
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// Decorative V Class outline (no external image dependency)
function VClassSVG() {
  return (
    <svg
      viewBox="0 0 500 300"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#0B0B0B" />
        </linearGradient>
        <linearGradient id="goldStripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D9B97A" stopOpacity="0" />
          <stop offset="50%" stopColor="#D9B97A" />
          <stop offset="100%" stopColor="#D9B97A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* ground glow */}
      <ellipse
        cx="250"
        cy="255"
        rx="200"
        ry="10"
        fill="#D9B97A"
        opacity="0.18"
        stroke="none"
      />
      {/* body */}
      <path
        d="M40 210 Q60 150 120 130 L200 110 Q260 100 340 110 L400 130 Q450 150 460 200 L460 220 Q460 235 445 235 L405 235 A30 30 0 0 0 345 235 L165 235 A30 30 0 0 0 105 235 L60 235 Q40 235 40 220 Z"
        fill="url(#bodyGrad)"
        stroke="#D9B97A"
        strokeOpacity="0.4"
      />
      {/* windows */}
      <path
        d="M130 138 L200 122 Q260 113 340 122 L400 138 L380 175 L130 175 Z"
        fill="#0F0F0F"
        stroke="#D9B97A"
        strokeOpacity="0.35"
      />
      <path
        d="M210 122 L210 175 M280 116 L280 175 M340 122 L340 175"
        stroke="#D9B97A"
        strokeOpacity="0.25"
      />
      {/* gold pinstripe */}
      <line
        x1="60"
        y1="195"
        x2="450"
        y2="195"
        stroke="url(#goldStripe)"
        strokeWidth="1"
      />
      {/* wheels */}
      <g stroke="#D9B97A" strokeOpacity="0.55">
        <circle cx="135" cy="235" r="22" fill="#0B0B0B" />
        <circle cx="135" cy="235" r="10" fill="none" />
        <circle cx="375" cy="235" r="22" fill="#0B0B0B" />
        <circle cx="375" cy="235" r="10" fill="none" />
      </g>
      {/* headlight */}
      <path
        d="M455 195 Q470 200 460 215"
        stroke="#D9B97A"
        strokeOpacity="0.7"
      />
      {/* badge */}
      <circle cx="250" cy="210" r="6" stroke="#D9B97A" strokeOpacity="0.7" />
      <path
        d="M250 206 L246 213 M250 206 L254 213 M250 206 L250 214"
        stroke="#D9B97A"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

// --- How it works -----------------------------------------------------------
function HowItWorks({ selectedService, onSelectService }) {
  const ref = useReveal();
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [displayService, setDisplayService] = useState(selectedService);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    setPickup("");
    setDestination("");
  }, [selectedService]);
  useEffect(() => {
    if (selectedService) {
      setDisplayService(selectedService);
      setIsExiting(false);
      return;
    }
    if (displayService) {
      setIsExiting(true);
      const id = setTimeout(() => {
        setDisplayService(null);
        setIsExiting(false);
      }, 550);
      return () => clearTimeout(id);
    }
  }, [selectedService]);
  const serviceTabs = [
    "Airport & Long Distance",
    "Corporate & VIP",
    "Weddings & Group Travel",
  ];

  const defaultServiceTitle = "A Private Chauffeur House";
  const defaultServiceCopy =
    "Every journey begins with a luxury chauffeur, uniformed, DBS checked, NDA bound, and trained for the quiet things: the chilled water, the door already open, the unspoken route. Choose a service above and the inquiry adjusts itself to suit the journey.";

  const serviceDescriptions = {
    "Airport & Long Distance":
      "A private chauffeur greets you airside, tracks your flight and waits with bottled water, hot towels and a calm boot. For the miles ahead, our luxury Mercedes hires arrive with champagne, refrigerator and reclining leather, a hotel suite that happens to be moving.",
    "Corporate & VIP":
      "Our luxury chauffeurs are DBS checked, uniformed and NDA bound, chosen for composure as much as skill. Day rates, board pickups, festival transfers and paparazzi aware routes, all handled with the kind of discretion that keeps your name out of the conversation.",
    "Weddings & Group Travel":
      "A luxury chauffeur for the most photographed morning of your life. Immaculate interiors, ribbons on request, bride, groom and party coordinated to the minute. Up to eight passengers travel composed in a Mercedes V Class with panoramic roof, massage seats and WiFi.",
  };

  const locationGroupsByService = {
    "Airport & Long Distance": [
      {
        label: "London Areas",
        options: ["Mayfair", "Knightsbridge", "Belgravia"],
      },
      {
        label: "Mayfair Airports",
        options: [
          "Heathrow (LHR) · Mayfair",
          "London City (LCY) · Mayfair",
          "Gatwick (LGW) · Mayfair",
        ],
      },
      {
        label: "Knightsbridge Airports",
        options: [
          "Heathrow (LHR) · Knightsbridge",
          "London City (LCY) · Knightsbridge",
          "Gatwick (LGW) · Knightsbridge",
        ],
      },
      {
        label: "Belgravia Airports",
        options: [
          "Heathrow (LHR) · Belgravia",
          "London City (LCY) · Belgravia",
          "Gatwick (LGW) · Belgravia",
        ],
      },
      {
        label: "Long Distance Landmarks",
        options: [
          "Windsor Castle",
          "Royal Ascot",
          "Bath",
          "Oxford",
          "Cambridge",
          "The Cotswolds",
          "Brighton",
          "Bicester Village",
          "Stonehenge",
        ],
      },
    ],
    "Corporate & VIP": [
      {
        label: "London Areas",
        options: ["Mayfair", "Knightsbridge", "Belgravia"],
      },
      {
        label: "Mayfair Hotels",
        options: [
          "Claridge's",
          "The Connaught",
          "The Dorchester",
          "Brown's Hotel",
        ],
      },
      {
        label: "Knightsbridge Hotels",
        options: [
          "Mandarin Oriental Hyde Park",
          "The Berkeley",
          "Bulgari Hotel London",
        ],
      },
      {
        label: "Belgravia Hotels",
        options: ["The Lanesborough", "The Goring"],
      },
    ],
    "Weddings & Group Travel": [
      {
        label: "London Areas",
        options: ["Mayfair", "Knightsbridge", "Belgravia"],
      },
      {
        label: "Mayfair Hotels",
        options: [
          "Claridge's",
          "The Connaught",
          "The Dorchester",
          "Brown's Hotel",
        ],
      },
      {
        label: "Knightsbridge Hotels",
        options: [
          "Mandarin Oriental Hyde Park",
          "The Berkeley",
          "Bulgari Hotel London",
        ],
      },
      {
        label: "Belgravia Hotels",
        options: ["The Lanesborough", "The Goring"],
      },
    ],
  };

  const defaultLocationGroups = [
    {
      label: "Mayfair Airports",
      options: [
        "Heathrow (LHR) · Mayfair",
        "London City (LCY) · Mayfair",
        "Gatwick (LGW) · Mayfair",
      ],
    },
    {
      label: "Knightsbridge Airports",
      options: [
        "Heathrow (LHR) · Knightsbridge",
        "London City (LCY) · Knightsbridge",
        "Gatwick (LGW) · Knightsbridge",
      ],
    },
    {
      label: "Belgravia Airports",
      options: [
        "Heathrow (LHR) · Belgravia",
        "London City (LCY) · Belgravia",
        "Gatwick (LGW) · Belgravia",
      ],
    },
    {
      label: "London Areas",
      options: ["Mayfair", "Knightsbridge", "Belgravia"],
    },
    {
      label: "Mayfair Hotels",
      options: [
        "Claridge's",
        "The Connaught",
        "The Dorchester",
        "Brown's Hotel",
      ],
    },
    {
      label: "Knightsbridge Hotels",
      options: [
        "Mandarin Oriental Hyde Park",
        "The Berkeley",
        "Bulgari Hotel London",
      ],
    },
    {
      label: "Belgravia Hotels",
      options: ["The Lanesborough", "The Goring"],
    },
  ];

  const locationGroups =
    locationGroupsByService[selectedService] || defaultLocationGroups;
  const steps = [
    {
      n: "1",
      title: "Inquiry",
      body: "Send your details by form, phone, or email. Your time is held the moment we hear from you.",
    },
    {
      n: "2",
      title: "Speak to Desk",
      body: "Concierge confirms journey, chauffeur, and route within the hour. Changes welcome up to two hours before pickup.",
    },
    {
      n: "3",
      title: "Wait for Vehicle",
      body: "Chauffeur arrives thirty minutes early and waits kerbside. Step in and go.",
    },
  ];

  return (
    <section
      id="how"
      ref={ref}
      className="relative pt-12 pb-28 lg:pt-16 lg:pb-40 bg-[#d2d2d2] font-cormorant text-black"
    >
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal eyebrow !text-black !text-[12px] flex items-center gap-3 justify-center">
            <span className="hairline" /> The Process
          </div>
          <h2 className="reveal h-display mt-7 text-4xl sm:text-5xl lg:text-6xl text-black">
            Three steps.
          </h2>
          <p className="reveal mt-7 text-black/80 leading-relaxed italic font-light max-w-xl mx-auto">
            Reduced to a single message. We attend to the rest.
          </p>
        </div>

        {/* Quick inquiry form — fixed in the right column, description animates in/out on the left */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="lg:pt-6 min-h-[1px]">
            {displayService ? (
              <div
                key={isExiting ? "exit" : displayService}
                className={`${
                  isExiting
                    ? "animate-fade-down pointer-events-none"
                    : "animate-fade-up"
                }`}
              >
                <div className="eyebrow !text-black !text-[12px] flex items-center gap-3">
                  <span className="hairline" /> Selected Service
                </div>
                <h3
                  className="font-display text-3xl mt-4 text-black"
                  style={
                    isExiting
                      ? undefined
                      : {
                          animation:
                            "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                          animationDelay: "120ms",
                        }
                  }
                >
                  {displayService}
                </h3>
                <div
                  className="mt-4 h-px w-12 bg-gold-500/60"
                  style={
                    isExiting
                      ? undefined
                      : {
                          animation:
                            "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                          animationDelay: "200ms",
                        }
                  }
                />
                <p
                  className="mt-5 text-black/80 leading-relaxed italic font-light"
                  style={
                    isExiting
                      ? undefined
                      : {
                          animation:
                            "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                          animationDelay: "280ms",
                        }
                  }
                >
                  {serviceDescriptions[displayService]}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(null)}
                  className="mt-6 text-[12px] uppercase tracking-[0.28em] text-black hover:text-black/80 underline underline-offset-4 decoration-black/60 transition-colors"
                  style={
                    isExiting
                      ? undefined
                      : {
                          animation:
                            "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                          animationDelay: "400ms",
                        }
                  }
                >
                  Clear selection
                </button>
              </div>
            ) : (
              <div key="default" className="animate-fade-up">
                <h3
                  className="font-display text-3xl text-black"
                  style={{
                    animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                    animationDelay: "120ms",
                  }}
                >
                  {defaultServiceTitle}
                </h3>
                <div
                  className="mt-4 h-px w-12 bg-gold-500/60"
                  style={{
                    animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                    animationDelay: "200ms",
                  }}
                />
                <p
                  className="mt-5 text-black/80 leading-relaxed italic font-light"
                  style={{
                    animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
                    animationDelay: "280ms",
                  }}
                >
                  {defaultServiceCopy}
                </p>
              </div>
            )}
          </div>
          <div id="contact" className="reveal w-full lg:max-w-xs lg:ml-auto">
            <div className="relative">
              <div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-gold-300/20 via-transparent to-gold-300/10 blur-3xl" />
              <div className="absolute -top-2 -left-2 h-5 w-5 border-l border-t border-gold-500/60" />
              <div className="absolute -top-2 -right-2 h-5 w-5 border-r border-t border-gold-500/60" />
              <div className="absolute -bottom-2 -left-2 h-5 w-5 border-l border-b border-gold-500/60" />
              <div className="absolute -bottom-2 -right-2 h-5 w-5 border-r border-b border-gold-500/60" />

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you. The team will be in touch shortly.");
                }}
                className="relative bg-[#d2d2d2] text-black p-4 sm:p-5 lg:p-6 border border-gold-500/40 rounded-[15px] shadow-[0_30px_70px_-15px_rgba(158,126,54,0.55),0_8px_24px_-10px_rgba(158,126,54,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-20px_rgba(158,126,54,0.7),0_10px_30px_-10px_rgba(158,126,54,0.55)]"
              >
                <h3 className="font-display text-xl text-black">
                  Begin your{" "}
                  <span className="italic font-light text-black">
                    journey.
                  </span>
                </h3>
                <div className="mt-2 h-px w-10 bg-gold-500/60" />

                <div className="mt-4">
                  <select
                    aria-label="Select service"
                    value={selectedService || ""}
                    onChange={(e) =>
                      onSelectService &&
                      onSelectService(e.target.value || null)
                    }
                    className="w-full rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs text-black focus:outline-none focus:border-gold-500 transition appearance-none bg-no-repeat bg-right pr-8"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%239E7E36'><path d='M5.5 7.5l4.5 5 4.5-5z'/></svg>\")",
                      backgroundPosition: "right 0.6rem center",
                      backgroundSize: "0.9rem",
                    }}
                  >
                    <option value="">Select a service</option>
                    {serviceTabs.map((tab) => (
                      <option key={tab} value={tab}>
                        {tab}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 space-y-2.5">
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                  />
                  <div className="grid grid-cols-2 gap-2.5">
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      pattern="[0-9+\s()-]{7,}"
                      className="rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                    />
                    <input
                      required
                      type="date"
                      aria-label="Journey date"
                      className="rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs text-black focus:outline-none focus:border-gold-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs text-black focus:outline-none focus:border-gold-500 transition appearance-none bg-no-repeat bg-right pr-8"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%239E7E36'><path d='M5.5 7.5l4.5 5 4.5-5z'/></svg>\")",
                        backgroundPosition: "right 0.6rem center",
                        backgroundSize: "0.9rem",
                      }}
                    >
                      <option value="" disabled>
                        Pickup
                      </option>
                      {locationGroups.map((g) => (
                        <optgroup key={g.label} label={g.label}>
                          {g.options.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </optgroup>
                      ))}
                      <optgroup label="Other">
                        <option>Custom address</option>
                      </optgroup>
                    </select>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs text-black focus:outline-none focus:border-gold-500 transition appearance-none bg-no-repeat bg-right pr-8"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%239E7E36'><path d='M5.5 7.5l4.5 5 4.5-5z'/></svg>\")",
                        backgroundPosition: "right 0.6rem center",
                        backgroundSize: "0.9rem",
                      }}
                    >
                      <option value="" disabled>
                        Destination
                      </option>
                      {locationGroups.map((g) => (
                        <optgroup key={g.label} label={g.label}>
                          {g.options.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </optgroup>
                      ))}
                      <optgroup label="Other">
                        <option>Custom address</option>
                      </optgroup>
                    </select>
                  </div>

                  {pickup === "Custom address" && (
                    <div className="animate-fade-up rounded-lg border border-gold-500/40 bg-cream-100/60 p-4 space-y-3">
                      <div className="text-[13px] uppercase tracking-[0.28em] text-black">
                        Pickup address
                      </div>
                      <input
                        required
                        placeholder="Street address"
                        className="w-full rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          placeholder="City / Town"
                          className="rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                        />
                        <input
                          placeholder="Postcode"
                          className="rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                        />
                      </div>
                      <input
                        placeholder="Notes for the driver (gate code, floor…)"
                        className="w-full rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                      />
                    </div>
                  )}

                  {destination === "Custom address" && (
                    <div className="animate-fade-up rounded-lg border border-gold-500/40 bg-cream-100/60 p-4 space-y-3">
                      <div className="text-[13px] uppercase tracking-[0.28em] text-black">
                        Destination address
                      </div>
                      <input
                        required
                        placeholder="Street address"
                        className="w-full rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          placeholder="City / Town"
                          className="rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                        />
                        <input
                          placeholder="Postcode"
                          className="rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                        />
                      </div>
                      <input
                        placeholder="Arrival notes (entrance, contact name…)"
                        className="w-full rounded-md border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-sm placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition"
                      />
                    </div>
                  )}

                  <textarea
                    rows="2"
                    placeholder="A line about your journey"
                    className="w-full rounded-lg border border-ink-900/15 bg-[#d2d2d2] px-3 py-2 text-xs placeholder:text-beige-200 focus:outline-none focus:border-gold-500 transition resize-none"
                  />

                  <button
                    type="submit"
                    className="btn-primary w-full !rounded-[15px] !px-6 !py-2.5 !text-[11px] !tracking-[0.28em]"
                  >
                    Send Inquiry <Icon.ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Three steps — three columns below the form */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal group text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display italic font-light text-7xl leading-none text-black transition-all duration-700">
                {s.n}
              </div>
              <div className="mt-4 mx-auto h-px w-12 bg-black/40 transition-all duration-700 group-hover:bg-black group-hover:w-20" />
              <h3 className="mt-6 font-display font-normal text-2xl text-black transition-all duration-700">
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.85] text-black/80 transition-all duration-700">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Social proof -----------------------------------------------------------
function SocialProof() {
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
      className="bg-ink-900 text-cream-50 py-24 relative overflow-hidden font-cormorant"
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
          <div className="editorial-rule justify-center mx-auto max-w-md !text-gold-300">
            In the company of
          </div>
          <h3 className="font-display italic font-light text-3xl sm:text-4xl mt-7 max-w-2xl mx-auto leading-snug text-mask-gold-bright">
            Hotels, concierges, labels and quietly discerning private clients
          </h3>
        </div>
        <div className="reveal mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display tracking-[0.28em] text-[11px] text-cream-100/55 hover:text-gold-300 transition-all duration-700"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Features ---------------------------------------------------------------
function Services({ onSelect }) {
  const ref = useReveal();
  const panels = [
    {
      eyebrow: "Service · One",
      title: "Airport Transfers",
      body: "Met airside with a name card, a hot towel and a bottle of chilled water. Flights tracked from gate to kerbside, luggage attended before you can ask.",
      img: "/airport.png",
      slug: "airport-transfers",
      tag: "Airport Transfers",
    },
    {
      eyebrow: "Service · Two",
      title: "Corporate Chauffeur",
      body: "Day rates, board pickups, multi-stop schedules. Uniformed, DBS-checked and NDA-bound. Tinted glass standard. Silence, when you want it, standard too.",
      img: "/chauff.png",
      slug: "corporate-chauffeur",
      tag: "Corporate Chauffeur",
    },
    {
      eyebrow: "Service · Three",
      title: "VIP & Celebrity",
      body: "Paparazzi-aware route planning, side entrances and private terminals. Drivers chosen for composure as much as for skill, and trained to forget what they have seen.",
      img: "/vip_celeb.png",
      slug: "vip-celebrity",
      tag: "VIP & Celebrity",
    },
    {
      eyebrow: "Service · Four",
      title: "Weddings & Events",
      body: "Bride, groom and party coordinated to the minute. Ribbons optional, immaculate interiors essential. Mercedes V Class for up to eight passengers, panoramic roof above them.",
      img: "/wedding.png",
      slug: "weddings-events",
      tag: "Weddings & Events",
    },
    {
      eyebrow: "Service · Five",
      title: "Long Distance Hire",
      body: "City to country, county to coast. Champagne bar, refrigerator and reclining leather for the miles ahead. Your driver knows the better coffee and the discreet stop.",
      img: "/longride.png",
      slug: "long-distance-hire",
      tag: "Long Distance Hire",
    },
  ];
  return (
    <section id="services" ref={ref} className="pt-12 pb-28 lg:pt-16 lg:pb-40 bg-[#d2d2d2] font-cormorant text-black">
      <div className="container-x">
        <div className="reveal flex flex-col items-center text-center gap-7 max-w-2xl mx-auto">
          <div>
            <div className="eyebrow !text-black !text-[12px] flex items-center gap-3 justify-center">
              <span className="hairline" /> The Offering
            </div>
            <h2 className="h-display mt-7 text-4xl sm:text-5xl lg:text-6xl text-black">
              A fleet for
              <br />
              <span className="italic font-light">every occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-black/80 leading-relaxed italic font-light">
            Every way to travel. One standard of service.
          </p>
        </div>
      </div>

      {/* Editorial panels — alternating image/text rows, full bleed */}
      <div id="features" className="mt-16 lg:mt-20">
        {panels.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={p.slug}
              className="group grid grid-cols-1 lg:grid-cols-2 items-stretch border-t border-gold-500/15 last:border-b last:border-gold-500/15"
            >
              <div
                className={`reveal ${
                  reverse ? "from-right lg:order-2" : "from-left"
                } relative px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14`}
              >
                {/* Decorative offset gold frame */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute hidden lg:block w-[88%] h-[78%] border border-gold-400/35 rounded-[18px] gold-shimmer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-gold-400/70 ${
                    reverse
                      ? "bottom-6 right-6 lg:bottom-8 lg:right-8 group-hover:bottom-5 group-hover:right-5"
                      : "top-6 left-6 lg:top-8 lg:left-8 group-hover:top-5 group-hover:left-5"
                  }`}
                />

                <div
                  className={`reveal-img ${reverse ? "from-bottom" : ""} relative overflow-hidden rounded-[15px] shadow-[0_30px_70px_-22px_rgba(0,0,0,0.45)] min-h-[260px] sm:min-h-[340px] lg:min-h-[520px]`}
                  style={{ transitionDelay: "180ms" }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="ken-burns absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.15]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                  {/* Corner brackets */}
                  <span aria-hidden="true" className="pointer-events-none absolute top-3 left-3 h-7 w-7 border-l border-t border-gold-300/80 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:top-2 group-hover:left-2 group-hover:border-gold-300" />
                  <span aria-hidden="true" className="pointer-events-none absolute top-3 right-3 h-7 w-7 border-r border-t border-gold-300/80 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:top-2 group-hover:right-2 group-hover:border-gold-300" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 border-l border-b border-gold-300/80 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:bottom-2 group-hover:left-2 group-hover:border-gold-300" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 border-r border-b border-gold-300/80 transition-all duration-700 ease-out group-hover:h-12 group-hover:w-12 group-hover:bottom-2 group-hover:right-2 group-hover:border-gold-300" />

                  {/* Slow gold sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-1/2 -left-1/3 h-[200%] w-[55%] rotate-[20deg] bg-gradient-to-r from-transparent via-gold-200/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[280%] transition-all duration-[1600ms] ease-out"
                  />

                  {/* Numeral */}
                  <span className="pointer-events-none absolute bottom-5 right-6 font-display italic font-light text-5xl lg:text-6xl leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div
                className={`reveal ${
                  reverse ? "from-left lg:order-1" : "from-right"
                } flex items-center px-6 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-20`}
              >
                <div className="max-w-md">
                  <div className="eyebrow !text-black !text-[12px] flex items-center gap-3">
                    <span className="hairline" /> {p.eyebrow}
                  </div>
                  <h3 className="h-display !font-cormorant mt-5 text-3xl sm:text-4xl lg:text-5xl text-black leading-[1.04]">
                    {p.title}
                  </h3>
                  <div className="mt-5 h-px w-12 bg-gold-500/60 transition-all duration-700 group-hover:w-24 group-hover:bg-gold-500" />
                  <p className="mt-7 text-black/80 leading-[1.85] font-light">
                    {p.body}
                  </p>
                  <div className="mt-9 flex items-center gap-5">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.34em] text-black hover:text-black/70 transition-colors border-b border-black/40 hover:border-black pb-1"
                    >
                      Read more
                      <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelect && onSelect(p.tag);
                        const el = document.getElementById("contact");
                        if (el)
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.34em] text-black hover:text-black/70 transition-colors"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container-x">
        {/* In-vehicle card */}
        <div className="reveal mt-16 rounded-[15px] border border-white/30 bg-ink-900 text-white overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55),0_10px_30px_-12px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_15px_40px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left — features */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col">
              <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] sm:tracking-[0.34em] !text-white">Inside the Sprinter</div>
              <h3 className="font-display italic font-light text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
                Quietly equipped.
              </h3>
              <div className="mt-5 h-px w-12 bg-white/60" />
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3 text-[13px] sm:text-[15px] text-white/85">
                {[
                  "Leather seats",
                  "Climate control",
                  "Phone chargers",
                  "Bottled water",
                  "Optional WiFi",
                  "Uniformed drivers",
                  "Child seats",
                  "Umbrellas & tissues",
                  "Panoramic roof",
                  "Fireplace ambience",
                  "Refrigerator",
                  "Champagne bar",
                  "Massage seats",
                  "360° camera",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — video */}
            <div className="relative min-h-[280px] lg:min-h-[420px] bg-ink-800">
              <video
                src="/merc.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/40 via-transparent to-transparent lg:from-ink-900/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Testimonials -----------------------------------------------------------
function Testimonials() {
  const ref = useReveal();
  const quotes = [
    {
      q: "“They moved an artist from a sold out show to a private dinner in twenty minutes, and you wouldn't have known either was happening. Exactly what we needed.”",
      n: "Adaeze Williams",
      r: "Tour Manager · Independent label",
      i: "AW",
      img: "/vip_celeb.png",
    },
    {
      q: "“Our concierge desk has used a dozen firms. Luxury Transport is the only one we hand the phone to and stop watching the clock. Drivers are immaculate.”",
      n: "Henry Caldwell",
      r: "Head Concierge · Mayfair hotel",
      i: "HC",
      img: "/executive.png",
    },
    {
      q: "“Six pickups across three counties on the wedding morning. Not a single late minute, not a single crumpled dress. We've already booked them for next year.”",
      n: "Priya Shah",
      r: "Wedding Planner · Cotswolds",
      i: "PS",
      img: "/wedding.png",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden font-cormorant text-white"
    >
      {quotes.map((q, i) => (
        <div
          key={q.n}
          aria-hidden={i !== idx}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={q.img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/65 to-ink-900/85" />
        </div>
      ))}

      <div className="relative container-x py-20 sm:py-28 lg:py-44 max-w-4xl mx-auto text-center">
        <div className="reveal !text-white text-[11px] sm:text-[13px] uppercase tracking-[0.28em] sm:tracking-[0.34em] flex items-center gap-3 justify-center">
          <span className="h-px w-8 sm:w-12 bg-white" /> In Their Words
        </div>
        <h2 className="reveal mt-6 sm:mt-7 h-display !font-cormorant text-3xl sm:text-5xl lg:text-6xl text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
          Quietly
          <br />
          <span className="italic font-light text-white">recommended.</span>
        </h2>

        <div className="reveal mt-14 grid">
          {quotes.map((q, i) => (
            <blockquote
              key={q.n}
              aria-hidden={i !== idx}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ease-out ${
                i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-display !font-cormorant italic font-light text-lg sm:text-2xl lg:text-[34px] leading-[1.5] text-white max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                {q.q.replace(/[“”]/g, "")}
              </p>
              <footer className="mt-10 text-[13px] uppercase tracking-[0.34em] text-white/90">
                <div className="font-display normal-case tracking-normal text-xl text-white">
                  {q.n}
                </div>
                <div className="mt-2">{q.r}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="reveal mt-14 flex items-center justify-center gap-3">
          {quotes.map((q, i) => (
            <button
              key={q.n}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === idx}
              className={`h-[2px] transition-all duration-500 ${
                i === idx ? "w-14 bg-white" : "w-8 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Final CTA --------------------------------------------------------------
function CTA() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-40 bg-ink-900 text-cream-50 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gold-400/20 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="container-x relative text-center max-w-3xl mx-auto">
        <div className="reveal !text-white text-[11px] sm:text-[13px] uppercase tracking-[0.28em] sm:tracking-[0.34em] flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
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

// --- Footer -----------------------------------------------------------------
function Footer() {
  const cols = [
    {
      h: "Services",
      l: [
        "Airport Transfers",
        "Corporate Chauffeur",
        "VIP & Celebrity",
        "Weddings & Events",
        "Long Distance Hire",
      ],
    },
  ];
  return (
    <footer className="bg-ink-900 text-white font-cormorant border-t border-white/15 relative overflow-hidden">
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
          Luxury Transport · Est. MMXXVI
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
                  Private Chauffeur · United Kingdom
                </div>
              </div>
            </a>
            <p className="mt-7 max-w-sm text-[15px] text-white/80 leading-[1.85] italic font-light">
              Safe, stylish and quietly professional passenger transport. A
              Mercedes house, available across the United Kingdom, every hour of
              every day.
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
                {c.l.map((x) => {
                  const slug = SERVICE_BLOG_SLUGS[x];
                  return (
                    <li key={x}>
                      {slug ? (
                        <Link
                          to={`/blog/${slug}`}
                          className="hover:text-white transition-colors duration-500"
                        >
                          {x}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="hover:text-white transition-colors duration-500"
                        >
                          {x}
                        </a>
                      )}
                    </li>
                  );
                })}
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
                London · Manchester
                <br />
                Birmingham · Edinburgh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/65 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Luxury Transport Ltd · All rights
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

// --- Discover (editorial intro) --------------------------------------------
function Discover() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-900 text-white font-cormorant"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] lg:min-h-[640px]">
        <div className="reveal-img relative lg:col-span-7 min-h-[360px] overflow-hidden">
          <img
            src="/chauff.png"
            alt="Inside the cabin"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/65 via-ink-900/15 to-transparent" />
        </div>
        <div className="lg:col-span-5 flex items-center px-8 lg:px-14 py-16 lg:py-24">
          <div className="reveal max-w-md">
            <div className="!text-white text-[13px] uppercase tracking-[0.34em] flex items-center gap-3">
              <span className="h-px w-12 bg-white" /> Discover
            </div>
            <h2 className="font-display !font-cormorant mt-6 text-4xl lg:text-5xl leading-[1.05] text-white">
              A house built on
              <span className="italic font-light text-white">
                {" "}
                quiet precision.
              </span>
            </h2>
            <div className="mt-5 h-px w-12 bg-white/70" />
            <p className="mt-7 text-white/85 text-[17px] leading-[1.85] font-light">
              Discretion, punctuality and composure are not features of the
              journey; they are the journey. Every chauffeur, every vehicle and
              every minute in between is rehearsed so that the only thing left
              for you to consider is what comes next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Newsletter -------------------------------------------------------------
function Newsletter() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative bg-[#d2d3d3] text-black py-20 lg:py-28 border-t border-black/10"
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
            <div className="eyebrow !text-gold-600 flex items-center gap-3">
              <span className="h-px w-12 bg-gold-600" /> Stay Informed
            </div>
            <h3 className="font-display !font-cormorant mt-5 text-3xl lg:text-4xl leading-[1.1] text-black">
              Editions, journeys and quiet
              <span className="italic font-light text-gold-600">
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
              className="flex-1 rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-gold-500 transition"
            />
            <button
              type="submit"
              className="btn-primary !rounded-[15px] !px-7 !py-3 !text-[11px] !tracking-[0.28em] !bg-gold-500 !text-white hover:!bg-gold-600"
            >
              Subscribe <Icon.ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// --- Home page --------------------------------------------------------------
function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait a tick for sections to render before scrolling.
      const tid = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => clearTimeout(tid);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <Discover />
      <HowItWorks
        selectedService={selectedService}
        onSelectService={setSelectedService}
      />
      <SocialProof />
      <Services onSelect={setSelectedService} />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}

// --- App --------------------------------------------------------------------
export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setLoading(true);
    const tid = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(tid);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans text-black">
      {loading && <Loader />}
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
