export default function Monogram({ letters = "LT", onDark = false }) {
  return (
    <div
      aria-hidden="true"
      className={`flex justify-center ${onDark ? "bg-black" : "bg-white"}`}
      style={{ padding: "80px 0" }}
    >
      <span
        className="font-display italic font-light leading-none"
        style={{
          fontSize: "64px",
          color: onDark ? "rgba(255,255,255,0.08)" : "rgba(10,10,10,0.08)",
          letterSpacing: "0.04em",
        }}
      >
        {letters}
      </span>
    </div>
  );
}
