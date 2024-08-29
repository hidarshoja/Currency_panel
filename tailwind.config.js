import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border1': '#C0C0C0',
        'border2': '#EDEDED',
        "text1" :"#212121",
        "text2" : "#757575",
        "bg1"   : "#FFFFFF",
        "bg2" : "#F8F8F8",
        "bg3" : "#F4F4F4",
        "green1" : "#4CAF50",
        "red1" : "#F44336",
        "blue1" : "#2196F3",
        "p1" :"#FFA000",
        "p2" :"#FFD54F"
       }
    },
  },
  plugins: [
    scrollbar,
  ],
}


