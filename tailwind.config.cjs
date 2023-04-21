/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#111',
        // primary: '#0D1116',
        secondary: '#eee',
        tertiary: '#0F172A',
        accent: 'rgba(0,0,0,0.4)',
        cardColor: 'rgba(14,14,14,0.4)',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
