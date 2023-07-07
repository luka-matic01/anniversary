/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        galaxy: "url('/galaxy.jpg')",
        coverPhoto: "url('/wp.jpg')",
        artBackground: "url('/art/artphoto1(4).png')",
        galleryBackground: "url('/2.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
});
