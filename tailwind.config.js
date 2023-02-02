/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        main: "#0045DB",
      },
    },
    plugins: [require("daisyui")],
  },
};
