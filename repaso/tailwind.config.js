/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}
