const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        Roboto: ['Roboto', ...fontFamily.sans]
      },
      backgroundImage: {
        gradientBg: "url('./src/assets/bg.png')"
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(3px, 0)',
          },
          '50%': {
            transform: 'translate(-3px, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          }
        }
      },
      animation: {
        shake: 'shake 150ms 2 linear'
      },
    },
  },
  plugins: [],
}
