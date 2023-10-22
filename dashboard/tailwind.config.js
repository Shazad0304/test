/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        body:['Fira Sans'],
        jost:['Jost']
      },
      colors:{
        customgrey:'#f4f5f7',
        customblack:'#0A0A0A',
        customtextgrey:'#747474',
        btnpurple:'#8231D3',
        customwhite:'#EFF0F3',
        customicongrey: "#A0A0A0",
        custombgcolor:"#F2EAFB",
        custombgpurple:"#E6D6F6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

