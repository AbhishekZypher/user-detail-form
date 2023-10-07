/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.26)',
      }
    },
  },
  plugins: [],
}