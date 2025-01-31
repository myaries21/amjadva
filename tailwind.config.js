/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whatsapp: '#25D366',
        facebook: '#1877F2',
        gmail: '#EA4335',
      },
    },
  },
  plugins: [],
};