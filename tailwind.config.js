/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        beige: {
          main: "#F5F1EA",
          card: "#EAE4D8",
          accent: "#B8A47E",
          dark: "#2B2B2B",
          soft: "#7A746B",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
