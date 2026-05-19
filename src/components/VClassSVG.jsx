// Decorative V Class outline (no external image dependency)
export default function VClassSVG() {
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
        <linearGradient id="pinStripe" x1="0" y1="0" x2="1" y2="0">
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
      {/* pinstripe */}
      <line
        x1="60"
        y1="195"
        x2="450"
        y2="195"
        stroke="url(#pinStripe)"
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
