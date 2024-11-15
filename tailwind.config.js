/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Serif"', "serif"],
        robotoSlab: ['"Roboto Slab"', "serif"],
        shareMono: ['"Share Tech Mono"', "monospace"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar-hide", require("daisyui")),
  ],
};
