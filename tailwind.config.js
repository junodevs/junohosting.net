module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent-1': '#333'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
