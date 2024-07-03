/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,css,js}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 50s linear 0s infinite ",
        scale: "scale 50s ease-in-out  0s infinite alternate none",
        shrink: "shrink 45s linear  0s infinite alternate none",
        wander: "wander 30s ease-in-out 0s infinite alternate none",
        lupe: "lupe .8s ease 0s 1 normal both",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)", opacity: 1 },
          "90%": { transform: "scale(0.9) translate(20%, 20%)", opacity: 0.6 },
          "100%": { transform: "scale(1)" },
        },
        shrink: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "translate(10%, -10%)" },
          "50%": { transform: "translate(10%, 10%)", opacity: 0.5 },
          "75%": { transform: "scale(0.6) translate(-10%, 10%)" },
          "100%": { transform: "scale(1)" },
        },
        wander: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "scale(0.8) translate(-10%, -2%)", opacity: 0.3 },
          "50%": { transform: "translate(5%, 2%)" },
          "75%": { transform: "translate(10%, -2%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        lupe: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.5)" },
        },
      },
      fontFamily: {
        CinzelDecorative: ["CinzelDecorative", "serif"],
      },
    },
  },
  plugins: [],
};
