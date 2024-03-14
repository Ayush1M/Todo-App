/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  darkMode : "selector",
  theme: {
    extend: {
      fontFamily : {
        "sans" : ["Roboto Condensed", "sans-serif"]
      },
      colors : {
        "black" : "#15151E",
        "secondary" : "#27293F",
        "white" : "#fff",
        "orange" : "#E78413"
      },
    },
  },
  plugins: [],
}

