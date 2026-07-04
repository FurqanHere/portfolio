/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1B2A",
        "ink-soft": "#142B40",
        "ink-line": "#25415A",
        paper: "#EDEEF0",
        slate: "#8FA0B3",
        brass: "#C08A3E",
        "brass-light": "#DDB877",
        teal: "#4FD1C5",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(237,238,240,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
