/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      wp: { max: "950px" },
      // => @media (max-width: 950px) { ... }
    },
    extend: {
      colors: {
        "curve-clr": "#f8f8fe",
        "footer-clr": "hsl(243, 87%, 12%)",
        "cta-clr": "hsl(238, 22%, 44%)",
      },
    },
  },
  plugins: [],
};
