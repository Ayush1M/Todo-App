/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "truculenta" : ["Truculenta"]
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

