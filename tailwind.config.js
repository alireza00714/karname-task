/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27AE60",
        graylight: "#FFFFFF",
        graylightest: "#F9F9F9",
        graydark: "#777777",
        graydarker: "#454545",
      },
    },
  },
  plugins: [],
};
