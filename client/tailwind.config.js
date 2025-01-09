/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue-theme": "rgb(22 32 85)", // Your custom color
      },
      // fontFamily: {
      //   sans: [
      //     "ui-sans-serif",
      //     "system-ui",
      //     "sans-serif",
      //     '"Apple Color Emoji"',
      //     '"Segoe UI Emoji"',
      //     "Segoe UI Symbol",
      //     '"Noto Color Emoji"',
      //   ],
      // },
    },
  },
  plugins: [],
};
