/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    plugins: [require('@tailwindcss/forms')],
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        // sm: '2rem',
      },
    },
    // screens: {
    //   sm: '576px',
    //   md: '768px',
    //   lg: '992px',
    //   xl: '1200px',
    // },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.blue['600'],
        // primary: '#2563EB',
      },
    },
  },
};
