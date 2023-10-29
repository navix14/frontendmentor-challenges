/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magenta: "#8b65a7",
        "magenta-light": "#b8a5c9",
        dark: "#1a1a1a",
        darklighter: "#333333",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
