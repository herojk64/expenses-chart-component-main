/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      
    },
    colors:{
      primary_Red:"hsl(10, 79%, 65%)",
      primary_bgRed:"hsl(10, 79%, 65%,0.3)",
      primary_Cyan:"hsl(186, 34%, 60%)",
      neutral_Dbrown:"hsl(25, 47%, 15%)",
      neutral_Mbrown:"hsl(28, 10%, 53%)",
      neutral_Cream:"hsl(27, 66%, 92%)",
      neutral_Orange:"hsl(33, 100%, 98%)",
      white:"#ffff",
      black:"#000000",
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    }
  },
  plugins: [],
}