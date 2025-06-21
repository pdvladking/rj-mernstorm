const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // already perfect
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        script: ['Parisienne', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp') // ← this line right here
  ],
};