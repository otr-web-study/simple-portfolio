const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(4, 4, 4)',
        secondary: 'hsl(0, 0%, 14%)',
        accent: 'hsl(120, 99%, 38%)',
        grayish: 'hsl(0, 0%, 85%)',
        silver: 'hsl(0, 0%, 70%)',
        error: '#FF6F5B',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        normal: '18px',
        'heading-xl': '88px',
        'heading-l': '48px',
        'heading-m': '24px',
      },
      lineHeight: {
        normal: '28px',
        'heading-xl': '88px',
        'heading-l': '56px',
        'heading-m': '32px',
      },
      letterSpacing: {
        'heading-xl': '-2.5px',
        'heading-l': '-1.5px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transition-fill': {
          'transition-property': 'fill',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'transition-duration': '400ms',
        },
      });
    }),
  ],
};
