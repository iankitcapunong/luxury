import { useState } from "react";

export default function ExpressReserve() {
  const [destination, setDestination] = useState("");
  const [when, setWhen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you. A driver is being assigned to your journey. You'll see confirmation shortly.",
    );
  };

  return (
    <div className="w-full max-w-xl">
      <p className="font-display italic font-light text-[18px] sm:text-[22px] text-white/70 text-center mb-5">
        Three steps. None of them yours.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ colorScheme: "dark" }}
        className="flex flex-col sm:flex-row items-stretch gap-2 rounded-2xl border border-white/30 bg-black/70 backdrop-blur-md p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]"
      >
        <input
          type="text"
          required
          placeholder="Destination address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="flex-1 rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-base text-white placeholder:text-white/85 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-colors"
        />
        <input
          type="datetime-local"
          required
          aria-label="When"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
          style={{ colorScheme: "dark" }}
          className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-base text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-colors [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-90 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
        />
        <button
          type="submit"
          className="rounded-xl bg-white px-6 py-3 text-[12px] uppercase tracking-[0.28em] text-black font-medium transition-all duration-500 hover:bg-white/90 hover:tracking-[0.34em]"
        >
          Reserve a Journey
        </button>
      </form>
    </div>
  );
}
