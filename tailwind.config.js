/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'light-pink':'#FFBBE7',
      'dark-pink':'#560632',
      'medium-pink' :'#AD1568',
      'black-pink' : '#260316'
    },
    extend: {fontFamily:{
      poppins:['poppins','sans-serif'],
    },},
  },
  plugins: [
  ],
}