/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#00005a",
      turquoise: "#CEE2DC",
      yellow: "#ffff00",
      pink: "#d245ea",
    },
    fontFamily: {
      sans: ["monospace", "ui-monospace", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
