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
      boxShadow:{
        'pic': '0 40px 90px -10px rgba(251,200,200,1)',
      },
      
    },
  },
  plugins: [],
}

