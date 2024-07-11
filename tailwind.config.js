/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blush-pink": "#FFDEFF",
        "cotton-candy": "#FFBAE3",
        "baby-blue": "#99CCFF"
      },
      fontFamily: {
        jacquard: ['Jacquard', "sans-serif"],
        barcode: ['Libre Barcode 128 Text', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      backgroundColor: {
        'black': '#000'
      }

    },
  },
  variants: {},
  plugins: [],
}