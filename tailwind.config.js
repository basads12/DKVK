/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: "#7A2332",
        "bordeaux-pressed": "#5E1A26",
        gold: "#C07830",
        ink: "#1A1713",
        creme: "#F5F0E8",
        sand: "#F0EBE1",
        border: "#E3DCCE",
        muted: "#6B655D",
        success: "#4A6246",
        error: "#9B3A2E",
      },
      maxWidth: {
        narrow: "680px",
        default: "960px",
        wide: "1200px",
      },
      transitionTimingFunction: {
        dkvk: "cubic-bezier(0.2, 0.0, 0.2, 1)",
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

