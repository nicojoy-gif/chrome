/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      colors:{
        'textblue': '#100A42',
        'bluetwo': '#120B48',
        'herotext': '#141414',
        'textgray': '#616163',
        'check': '#1B233D',
        'lightgray': '#434343',
        'lightergray': '#B9C2C8',
        'searchborder': '#E7E7ED',
        'search': '#B6B3C6',
        'searchtext': '#C3C3C3'
      },
    },
  },
  plugins: [],
}

