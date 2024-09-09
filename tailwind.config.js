/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#a28089',
        'secondary': '#b36f81',
      },
      boxShadow:{
        'pic': '0 40px 90px -10px rgba(251,200,200,1)',
        'darkpic': '0 40px 90px -10px rgba(200,110,130,1)',
      },
      
    },
  },
  plugins: [],
}

