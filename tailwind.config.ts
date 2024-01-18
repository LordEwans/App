/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
      display: ["Montserrat"],
      body: ["Montserrat"],
    },
    extend: {
      animation: {
        border: "border 9s ease infinite",
        pulsate: "pulsate 0.11s ease-in-out infinite alternate"
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 70%" },
          "70%": { backgroundPosition: "100% 30%" },
        },
        pulsate: {
          "100%": {
            "text-shadow":
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09, 0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09;",
          },
          "0%": {
            "text-shadow":
              "0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
