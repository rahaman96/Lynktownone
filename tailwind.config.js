/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#6A5B40',
      },
      fontFamily: {
        poppins: `var(--poppins)`,
        dmSerif: `var(--dm-serif)`,
      },
    },
  },
  plugins: [],
};
