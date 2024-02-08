/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        brightBackground:"#FDF8EE",
        brightGreen:"#539165",
        lightText:"#959595",
      }
    },
  },
  plugins: [],
}