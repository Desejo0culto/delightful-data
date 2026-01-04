import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2E7D32',
        accent: '#81C784',
        dark: '#1B5E20',
        light: '#E8F5E9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
