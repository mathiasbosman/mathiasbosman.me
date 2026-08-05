/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        acid: '#DFFF00',
        electric: '#1756FF',
        'electric-dark': '#104FE9',
        ink: '#111820',
        mist: '#DEDFD9',
        paper: '#F3F0E8',
      },
    },
  },
  plugins: [],
};
