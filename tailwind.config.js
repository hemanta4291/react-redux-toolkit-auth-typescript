/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'checkbox-bg':'#EDEFF1',
        'border-gray':'#F1F1F1',
        'primary-900': '#377DFF',
        'error-900': '#FF5630',
        'error-50':'#fef2f2',
        'gray-100': '#FAFBFC',
        'gray-200': '#F3F3F3',
        'gray-300': '#C1C7D0',
        'gray-400': '#F0F5FA',
        'gray-500': '#B0B7C3',
        'gray-600': '#8A94A6',
        'gray-700': '#4E5D78',
        'gray-800': '#333333',
        'gray-900': '#323B4B',
        'green-900':'#38CB89'
      },
    },
  },
  plugins: [],
}




