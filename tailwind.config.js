/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        futura: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-x': '0.28em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        crossA: {
          '0%, 40%': { opacity: '1' },
          '50%, 90%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        crossB: {
          '0%, 40%': { opacity: '0' },
          '50%, 90%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        heroBgA: {
          '0%, 25%': { opacity: '1' },
          '50%, 75%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        heroBgB: {
          '0%, 25%': { opacity: '0' },
          '50%, 75%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        heroTrip1: {
          '0%, 16.66%': { opacity: '1' },
          '33.33%, 83.33%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        heroTrip2: {
          '0%, 16.66%': { opacity: '0' },
          '33.33%, 50%': { opacity: '1' },
          '66.66%, 100%': { opacity: '0' },
        },
        heroTrip3: {
          '0%, 50%': { opacity: '0' },
          '66.66%, 83.33%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        waveCircle: {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '30%': { transform: 'translateY(-18px)', opacity: '1' },
        },
        typingDot: {
          '0%, 100%': { opacity: '0.25', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        'cross-a': 'crossA 8s ease-in-out infinite',
        'cross-b': 'crossB 8s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'fade-down': 'fadeDown 0.55s cubic-bezier(0.22,1,0.36,1) both',
        'hero-bg-a': 'heroBgA 12s ease-in-out infinite',
        'hero-bg-b': 'heroBgB 12s ease-in-out infinite',
        'hero-trip-1': 'heroTrip1 18s ease-in-out infinite',
        'hero-trip-2': 'heroTrip2 18s ease-in-out infinite',
        'hero-trip-3': 'heroTrip3 18s ease-in-out infinite',
        'wave-circle': 'waveCircle 1.1s ease-in-out infinite',
        'typing-dot': 'typingDot 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
