/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainColor": "#1E5AFA",
        "textMainColor": "#313131",
        "textSecondryColor": "#000F37",
        "textThirdColor": "#5F7285",
        "bgColor": "#FAFAFA",
      },
      fontFamily: {
        mainFont: ['"Inter"', 'sans-serif']
      },
      screens: {
        'desktop': '980px'
      }
    },
  },
  plugins: [],
}

