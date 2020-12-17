module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: require('tailwindcss/colors'),
      margin: {
        9.5: '2.45rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
