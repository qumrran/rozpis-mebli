/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        customBg: "rgb(26, 25, 26)",
      },
      fontFamily: {
        mono: ["Geist Mono", "monospace"], 
      },
    },
  },
  plugins: [],
};
