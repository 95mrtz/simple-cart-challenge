/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // auto-fill for section
        "auto-fill": "repeat(auto-fill, minmax(320px, 1fr))",
      },
    },
  },
  plugins: [],
};
