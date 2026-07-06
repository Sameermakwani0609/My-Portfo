/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#000000",
        "primary-blue": "#2563eb",
        "primary-purple": "#8b5cf6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
       screens: {
        'xs': '475px',  // Add this for extra small screens
      },
    },
  },
  plugins: [],
};
