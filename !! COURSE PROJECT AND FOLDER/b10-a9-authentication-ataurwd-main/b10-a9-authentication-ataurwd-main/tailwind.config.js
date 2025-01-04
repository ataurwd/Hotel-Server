/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MainPrimary: "#D4FFF7",
        MainBg: "#47B202",

      },
    },
  },
  plugins: [require('daisyui')],
};
