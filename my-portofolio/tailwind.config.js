// const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      cursor: {
        // 'left': "url(left-arrow.png), default",
        // 'right': "url(public/cursor/right-arrow.png), default",
      },
      // fontFamily: {
      //   sans: ['var(--font-mont)', ...fontFamily.sans],
        
      // },
      colors: {
        dark: "#0c0c0f",
        light: "#fafafa",
        primary: "#007AFF",
        primaryDark: "#58e609",
        background: "#EDEEF0"
      },
    },
    screens: {
      "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (m1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
}
