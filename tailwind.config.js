/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12151C",
          soft: "#1A1E27",
          line: "#262B36",
        },
        paper: "#F3EFE6",
        teal: {
          DEFAULT: "#3A7C77",
          bright: "#4F9C95",
        },
        brass: {
          DEFAULT: "#C08A3E",
          bright: "#D9A55B",
        },
        slate: {
          muted: "#8B93A1",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
