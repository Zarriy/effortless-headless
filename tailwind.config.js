/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        back: "#03040d", 
        para: "#7d7d7d"
      },
      fontFamily: {
        'headfont': ['Outfit', 'sans-serif'],
        'bodyfont': ['IBM Plex Sans Hebrew', 'sans-serif']
      }
    },
  },
  plugins: [],
};
