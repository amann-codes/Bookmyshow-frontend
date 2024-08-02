/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-10': 'repeat(10, calc(20% - 25.6px))',
      },
      gridTemplateRows: {
        'custom-1': 'repeat(1, 1fr)',
      },
      transform: {
        'translate-x-1270': '-1270px',
      },
      screens: {
        'lg': '1024px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}