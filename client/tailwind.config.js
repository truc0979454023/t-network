/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        text: {
          "50%": { opacity: 0.1 },
        },
        dash: {
          to: { "stroke-dashoffset": 234 },
        },
      },
      animation: {
        "animation-text": " text 1s ease-in-out infinite;",
        "animation-dash":
          " dash 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite alternate-reverse;",
      },
    },
  },
  plugins: [],
};
