/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FontOne: ["FontOne", "sans-serif"],
        FontTwo: ["FontTwo", "sans-serif"],
      },
      colors: {
        primaryColor: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
