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
      translate: {
        '-x-1270': '-1270px',
      },
      screens: {
        'sm': '640px',
        'lg': '1024px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
