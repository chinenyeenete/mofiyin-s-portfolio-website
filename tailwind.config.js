/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#a28089',
      },
      cursor:{
        'fancy': "./assets/fancycursor.cur",
      },
      
    },
  },
  plugins: [],
}

