import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,css}', './src/**/*.css'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
export default config;

