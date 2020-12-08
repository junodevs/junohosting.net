module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: require('tailwindcss/colors')
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
