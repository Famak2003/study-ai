/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#D71E1E",
        "custom-black": "#202020",
        "charcoal-gray": "#292929",
        "light-gray": "#878787",
        "custom-white": "#f4f4f4",
      },
    },
  },
  plugins: [],
};