export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
    >
      <div className="flex items-end gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="block h-3.5 w-3.5 rounded-full animate-wave-circle"
            style={{
              animationDelay: `${i * 0.12}s`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle at 30% 30%, #f6e1a8, #bf9c53 60%, #7a5e20 100%)"
                  : "radial-gradient(circle at 30% 30%, #4a382a, #231811 70%, #0d0805 100%)",
              boxShadow:
                i % 2 === 0
                  ? "0 0 18px rgba(217,189,134,0.55)"
                  : "0 0 12px rgba(0,0,0,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
