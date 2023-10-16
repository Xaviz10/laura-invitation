/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: false,
  theme: {
    fontFamily: {
      primaryRegular: ["OpenSans-Regular", "sans-serif"],
      primaryItalic: ["Marsha-Regular", "sans-serif"],
      secondaryItalic: ["PlayfairDisplay-Italic", "sans-serif"],
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#4275FA" },
        secondary: { DEFAULT: "#2E2D56" },
        tertiary: { DEFAULT: "#5F5E79" },
        background: { DEFAULT: "#294BA2" },
        light: { DEFAULT: "#929292" },
      },
    },
  },
  plugins: [],
};
