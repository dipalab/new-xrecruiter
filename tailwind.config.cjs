/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: '#FCFCFC',
          20: '#FAFAFA',
          30: '#F4F4F5',
          40: '#E4E4E7',
          50: '#D1D1D6',
          60: '#A0A0AB',
          70: '#70707B',
          80: '#3F3F46',
          90: '#26272B',
          100: '#18181B'
        }
      },
      maxWidth: {
        '7xl': '1160px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
