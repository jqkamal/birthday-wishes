/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff8f3',
          100: '#fdf0e6',
          200: '#fbe0cc',
          300: '#f7c9a8',
          400: '#f1ad85',
          500: '#e6906a',
        },
        cream: {
          50: '#fffdf8',
          100: '#fbf6ec',
          200: '#f5ecdb',
        },
        rose: {
          50: '#fff1f4',
          100: '#ffe1e8',
          200: '#fdc4d1',
          300: '#f9a1b5',
          400: '#f07d99',
          500: '#e05f7f',
          600: '#c2446a',
          700: '#9e3553',
          800: '#6e2439',
          900: '#4a1826',
        },
        ink: {
          600: '#6b5a5f',
          700: '#4f4145',
          800: '#352b2e',
          900: '#211a1c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(158, 53, 83, 0.25)',
        card: '0 20px 45px -20px rgba(158, 53, 83, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(4deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1, 1) rotate(-1deg)', opacity: '1' },
          '50%': { transform: 'scale(0.94, 1.06) rotate(1.5deg)', opacity: '0.9' },
        },
        smoke: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.6)' },
          '30%': { opacity: '0.7' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scale(1.4)' },
        },
        confettiFall: {
          '0%': { transform: 'translate3d(0, -10vh, 0) rotate(0deg)', opacity: '1' },
          '100%': {
            transform: 'translate3d(var(--drift), 110vh, 0) rotate(720deg)',
            opacity: '0.9',
          },
        },
        twinkle: {
          '0%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bar: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
        flicker: 'flicker 0.9s ease-in-out infinite',
        smoke: 'smoke 2.8s ease-out infinite',
        confetti: 'confettiFall linear forwards',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out both',
        bar: 'bar 0.9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
