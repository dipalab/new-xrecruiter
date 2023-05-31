/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'cera-pro-extra-bold': ['cera-pro-extra-bold', 'sans-serif'],
        'cera-pro-bold': ['cera-pro-bold', 'sans-serif'],
        'cera-pro-medium': ['cera-pro-medium', 'sans-serif'],
        'cera-pro-regular': ['cera-pro-regular', 'sans-serif'],
        'cera-pro-light': ['cera-pro-light', 'sans-serif']
      },
      colors: {
        neutral: {
          10: '#F7F9FA',
          20: '#EAEDF0',
          30: '#CBD2D9',
          40: '#B8C1CC',
          50: '#A9B4C0',
          60: '#98A5B3',
          70: '#7F8995',
          80: '#656E77',
          90: '#4C535A',
          100: '#00081D'
        },
        brand: {
          blue: '#4140FC',
          purple: '#8738FF',
          pink: '#FF47A7',
          orange: '#FF9A5C',
          green: '#00A38C'
        },
        blue: {
          'primary-main': '#1C5BFC',
          'primary-hover': '#7567FE'
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
