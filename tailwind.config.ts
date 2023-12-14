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
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 70%" },
          "70%": { backgroundPosition: "100% 30%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
