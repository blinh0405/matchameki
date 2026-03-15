/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          light: '#7FAF8C',
          DEFAULT: '#7FAF8C',
          deep: '#5F8F70',
        },
        pink: {
          soft: '#F4B6C2',
          dusty: '#E8A4B8',
        },
        cream: '#FFF7F5',
        cookie: '#B48A78',
        text: '#2E2E2E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
