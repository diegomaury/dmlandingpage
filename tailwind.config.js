/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        serifpro: ['Source Serif Pro', 'serif'],
      },
      colors: {
        catalyst: '#4b2672',
        primary: '#246BFD'
      },
    },
  },
  plugins: [],
}
