/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        "3xl":"2000px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
