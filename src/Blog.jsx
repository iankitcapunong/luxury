import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const posts = {
  "airport-transfers": {
    title: "Airport Transfers",
    eyebrow: "Service · Airside",
    img: "/airport.png",
    body: [
      "An airport transfer ought to feel like an arrival in itself. The chauffeur tracks your flight from the moment it taxis, watches the gate, and meets you airside with a name card, a bottle of chilled water and a hot towel pressed and ready. Luggage is handled in the quiet way that good service is always handled, before you can ask.",
      "Every UK airport is in our familiar circuit. Heathrow, Gatwick, Stansted, Luton, London City, Manchester, Birmingham, Edinburgh. The car is parked, valeted and waiting before the wheels touch the tarmac, so the journey from terminal to back seat is as short as you would like it to be.",
      "Inside the vehicle, climate has already been set, phone chargers are at hand, and the music is whatever you prefer or nothing at all. Some of our regulars sleep the whole way home. Others take meetings. Both, equally, are the point.",
      "We hold the rate even if your flight is hours late. Delays are part of travel, and they should not be part of your bill.",
    ],
  },
  "corporate-chauffeur": {
    title: "Corporate Chauffeur",
    eyebrow: "Service · Boardroom",
    img: "/chauff.png",
    body: [
      "The corporate chauffeur is a discipline of its own. It is less about driving and more about timing, discretion and absolute reliability. Our chauffeurs are uniformed, DBS checked and NDA bound as standard, and trained for the particular rhythms of board pickups, multi stop schedules and the occasional unannounced detour.",
      "Day rates and half day rates are kept simple. One vehicle, one driver, one number. The desk is hands on from the first call to the final drop, with route planning that takes traffic, weather and your calendar into equal consideration.",
      "When the conversation in the cabin matters, the partition is up, the music is low, and the driver is, as always, somewhere quietly between attentive and invisible. Tinted glass is standard. So is silence.",
      "For longer arrangements, we offer the same chauffeur on every booking. Familiarity, after a few weeks, becomes its own kind of efficiency.",
    ],
  },
  "vip-celebrity": {
    title: "VIP & Celebrity",
    eyebrow: "Service · Talent & Tour",
    img: "/vip_celeb.png",
    body: [
      "Moving talent is a craft of disappearing in plain sight. The right car, the right entrance, the right route. We work with tour managers, agents, labels and personal teams who need a transport partner that listens first and speaks rarely.",
      "Paparazzi aware route planning is built into every brief. Hotel side doors, festival back-of-house, private terminals, residency parking; all coordinated in advance, with contingencies for the moment the call sheet shifts at four in the morning.",
      "Vehicles are immaculate, with tinted glass and refrigerated still and sparkling water as standard. We carry the things people forget to ask for, and we forget the things people would rather we did not remember.",
      "Our drivers have moved artists from sold out arenas to private dinners in twenty minutes flat. None of it ever made the press. That, in our world, is the highest possible compliment.",
    ],
  },
  "weddings-events": {
    title: "Weddings & Events",
    eyebrow: "Service · The Photographed Hour",
    img: "/wedding.png",
    body: [
      "A wedding is a logistical performance dressed as a romantic one. Six pickups across three counties, a bride who must be smiling on arrival, parents on one schedule, ushers on another. We hold the morning together, quietly, so the day can feel as effortless as it should.",
      "Mercedes V Class with panoramic roof, massage seats and WiFi for up to eight passengers. S Class and E Class for the principals. Ribbons on request, immaculate interiors essential. The cars are valeted the night before and again on the morning, because there is no second chance at first impressions.",
      "Each booking is paired with a single point of contact at our desk, available from confirmation through to the last guest delivered home. Timings are rehearsed against your run sheet, with a buffer for the photographer who always asks for five more minutes.",
      "Not a late minute, not a crumpled dress. The kind of morning you can hand over to a team and stop watching the clock.",
    ],
  },
  "long-distance-hire": {
    title: "Long Distance Hire",
    eyebrow: "Service · The Open Road",
    img: "/longride.png",
    body: [
      "A long distance hire is not a transfer. It is a journey, and the car should rise to meet it. Cotswolds for a weekend, Edinburgh for a wedding, Bath for a stay, Windsor for the races. The route is yours to choose, the comfort is ours to insist on.",
      "Inside, reclining leather, climate control and a refrigerator stocked with still and sparkling water. Champagne on request. The boot takes four large cases without complaint. The cabin takes four passengers in a way that still feels generous.",
      "Drivers are briefed for the long form. Quiet on stretches you want to rest, conversational when you want company, fluent in the small kindnesses, the discreet stop, the better viewpoint, the place that does the better coffee.",
      "We have driven clients home from country house weddings, from board meetings in Manchester, from a daughter's graduation in Oxford. Each time, the same brief, only the postcode changes.",
    ],
  },
};

export default function Blog() {
  const { slug } = useParams();
  const post = posts[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) return <Navigate to="/" replace />;

  return (
    <main className="bg-beige-50/40">
      <article className="container-x pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mb-10 lg:mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.34em] text-gold-600 hover:text-gold-700 transition-colors"
          >
            <span aria-hidden="true">←</span> Back home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[15px] border border-gold-500/30 shadow-[0_30px_70px_-20px_rgba(158,126,54,0.45)]">
              <img
                src={post.img}
                alt={post.title}
                className="block w-full h-auto object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="eyebrow flex items-center gap-3">
              <span className="hairline" /> {post.eyebrow}
            </div>
            <h1 className="h-display !font-cormorant mt-5 text-5xl sm:text-6xl text-mask-gold leading-[1.02]">
              {post.title}
            </h1>
            <div className="mt-5 h-px w-14 bg-gold-500/60" />
            <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-ink-700 font-light">
              {post.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
