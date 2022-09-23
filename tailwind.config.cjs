/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Antonio', 'League Spartan']
      },
      backgroundImage: {
        'hero_pattern': "url('/assets/background-stars.svg')",
      },
      colors: {
        custom_grey: '#38384F'
      }
    },
  },
  plugins: [],
}
