/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#1F2937",
          "800/50": "#1F293780",
          700: "#374151",
          "700/50": "#37415180",
          600: "#4B5563",
          "600/50": "#4B556380",
          500: "#6B7280",
          "500/50": "#27303f",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
        },
        black: {
          "/50": "#00000080",
        },
        secondary: {
          10: "#2D8CFF1A",
          full: "#2D8CFF",
        },
      },
    },
  },
  plugins: [],
};
