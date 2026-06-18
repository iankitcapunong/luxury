import { useState } from "react";

export default function ExpressReserve() {
  const [destination, setDestination] = useState("");
  const [when, setWhen] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="w-full max-w-xl rounded-2xl border border-white/30 bg-black/70 backdrop-blur-md px-6 py-7 text-center shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 h-px w-10 bg-[#DAB85A]" />
        <p className="font-display italic font-light text-[22px] sm:text-[26px] text-white">
          Received. Consider it handled.
        </p>
        <p className="mt-3 text-white/80 leading-relaxed font-light">
          A driver is being assigned to your journey. We will confirm by return,
          within the hour.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setDestination("");
            setWhen("");
          }}
          className="mt-5 text-[12px] uppercase tracking-[0.28em] text-white/60 underline-offset-4 transition-colors hover:text-white"
        >
          Arrange another
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      <p className="font-display italic font-light text-[20px] sm:text-[24px] text-white/70 text-center mb-5">
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
          className="flex-1 rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-lg text-white placeholder:text-white/85 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-colors"
        />
        <input
          type="datetime-local"
          required
          aria-label="When"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
          style={{ colorScheme: "dark" }}
          className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-lg text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-colors [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-90 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
        />
        <button
          type="submit"
          className="rounded-xl bg-white px-6 py-3 text-[14px] uppercase tracking-[0.28em] text-black font-medium transition-all duration-500 hover:bg-white/90 hover:tracking-[0.34em]"
        >
          Reserve a Journey
        </button>
      </form>
    </div>
  );
}
