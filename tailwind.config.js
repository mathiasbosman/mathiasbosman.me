/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,css,scss,js,ts}"],
  safelist: [
    // done because we use these classes dynamically
    { pattern: /w-.+/ },
    { pattern: /h-.+/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
