import rootConfig from '../../../tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...rootConfig,
  content: ['../../../index.html', '../../../src/**/*.tsx'],
};
