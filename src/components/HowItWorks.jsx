import { useEffect, useState } from "react";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";

export default function HowItWorks({ selectedService, onSelectService }) {
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
      className="relative pt-12 pb-28 lg:pt-16 lg:pb-40 bg-white font-cormorant text-black"
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
                  className="mt-4 h-px w-12 bg-black/20"
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
                  className="mt-4 h-px w-12 bg-black/20"
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
              <div className="absolute -top-2 -left-2 h-5 w-5 border-l border-t border-black/20" />
              <div className="absolute -top-2 -right-2 h-5 w-5 border-r border-t border-black/20" />
              <div className="absolute -bottom-2 -left-2 h-5 w-5 border-l border-b border-black/20" />
              <div className="absolute -bottom-2 -right-2 h-5 w-5 border-r border-b border-black/20" />

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you. The team will be in touch shortly.");
                }}
                className="relative bg-white text-black p-4 sm:p-5 lg:p-6 border border-black/15 rounded-[15px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25),0_8px_24px_-10px_rgba(0,0,0,0.2)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.35),0_10px_30px_-10px_rgba(0,0,0,0.25)]"
              >
                <h3 className="font-display text-xl text-black">
                  Begin your{" "}
                  <span className="italic font-light text-black">
                    journey.
                  </span>
                </h3>
                <div className="mt-2 h-px w-10 bg-black/20" />

                <div className="mt-4">
                  <select
                    aria-label="Select service"
                    value={selectedService || ""}
                    onChange={(e) =>
                      onSelectService &&
                      onSelectService(e.target.value || null)
                    }
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition appearance-none bg-no-repeat bg-right pr-8"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23000000'><path d='M5.5 7.5l4.5 5 4.5-5z'/></svg>\")",
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
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-xs placeholder:text-black/40 focus:outline-none focus:border-black transition"
                  />
                  <div className="grid grid-cols-2 gap-2.5">
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      pattern="[0-9+\s()-]{7,}"
                      className="rounded-lg border border-black/15 bg-white px-3 py-2 text-xs placeholder:text-black/40 focus:outline-none focus:border-black transition"
                    />
                    <input
                      required
                      type="date"
                      aria-label="Journey date"
                      className="rounded-lg border border-black/15 bg-white px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="rounded-lg border border-black/15 bg-white px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition appearance-none bg-no-repeat bg-right pr-8"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23000000'><path d='M5.5 7.5l4.5 5 4.5-5z'/></svg>\")",
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
                      className="rounded-lg border border-black/15 bg-white px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition appearance-none bg-no-repeat bg-right pr-8"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23000000'><path d='M5.5 7.5l4.5 5 4.5-5z'/></svg>\")",
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
                    <div className="animate-fade-up rounded-lg border border-black/15 bg-white p-4 space-y-3">
                      <div className="text-[13px] uppercase tracking-[0.28em] text-black">
                        Pickup address
                      </div>
                      <input
                        required
                        placeholder="Street address"
                        className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          placeholder="City / Town"
                          className="rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                        />
                        <input
                          placeholder="Postcode"
                          className="rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                        />
                      </div>
                      <input
                        placeholder="Notes for the driver (gate code, floor…)"
                        className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                      />
                    </div>
                  )}

                  {destination === "Custom address" && (
                    <div className="animate-fade-up rounded-lg border border-black/15 bg-white p-4 space-y-3">
                      <div className="text-[13px] uppercase tracking-[0.28em] text-black">
                        Destination address
                      </div>
                      <input
                        required
                        placeholder="Street address"
                        className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          placeholder="City / Town"
                          className="rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                        />
                        <input
                          placeholder="Postcode"
                          className="rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                        />
                      </div>
                      <input
                        placeholder="Arrival notes (entrance, contact name…)"
                        className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm placeholder:text-black/40 focus:outline-none focus:border-black transition"
                      />
                    </div>
                  )}

                  <textarea
                    rows="2"
                    placeholder="A line about your journey"
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-xs placeholder:text-black/40 focus:outline-none focus:border-black transition resize-none"
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
