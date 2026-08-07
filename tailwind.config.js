/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        acid: '#DFFF00',
        charcoal: '#12131A',
        electric: '#1756FF',
        'electric-dark': '#104FE9',
        ink: '#111820',
        mist: '#DEDFD9',
        night: '#090A0F',
        paper: '#F3F0E8',
        pink: '#FF8FF8',
        warm: '#F3EFE7',
      },
    },
  },
  plugins: [],
};
