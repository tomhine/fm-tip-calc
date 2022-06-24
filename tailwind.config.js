/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      primary: {
        cyan: "hsl(172, 67%, 45%)",
        darkcyan: "hsl(183, 100%, 15%)",
        lightcyan: "hsl(173, 61%, 77%)",
      },
      secondary: {
        bg: "hsl(185, 41%, 84%)",
        inputbg: "hsl(202, 50%, 97%)",
        heading: "hsl(183, 21%, 34%)",
        text: "hsl(186, 9% 45%)",
      },
    },
  },
  plugins: [],
};
