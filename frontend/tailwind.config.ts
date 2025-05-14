// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: '#e0e7fe',
          600: '#3e38a7',
          500: '#005B99',
        }
      },
    },
  },
  plugins: [],
};

export default config;
