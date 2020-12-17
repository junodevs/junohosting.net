/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

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
