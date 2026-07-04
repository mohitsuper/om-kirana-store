/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarydark: "#142C52",
        secondary: "#EC8432",
        dark: "#0F2343",
        accent: "#D96E18",
        light: "#F7F7F7",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};