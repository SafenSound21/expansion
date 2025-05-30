/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/fondo.png')",
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        scroll2: 'scroll2 30s linear infinite',
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'infinite-scroll-mobile': 'infinite-scroll 8s linear infinite', // ✅ esta es la nueva
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};