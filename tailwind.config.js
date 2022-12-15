/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        lime: "#D3FA3A",
        coal: "#1B1B1B",
        product: "#706E64",
        matter: "#B6B4B4",
        white: "#f8fafc",
      },
    },
  },
  plugins: [],
};
