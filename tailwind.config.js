/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Rubik", "ui-sans-serif", "system-ui"],
      // Add other fonts as needed
    },
    extend: {
      display: ["responsive"],
      colors: {
        "custom-blue": "#14609D",
      },
    },
  },
  plugins: [],
};
