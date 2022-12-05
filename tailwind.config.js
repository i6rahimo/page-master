/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js}'],
  theme: {
    fontSize: {
      '22': '22px',
    },
    extend: {
      width: {
        '428': '428px',
        '182': '182px',
        '64': '64px',
        '380': '380px',
        '166': '166px'
      },
      height: {
        '386': '386px',
        '440': '440px'
      },
      spacing: {
        '24': '24px',
        '17': '17px',
        '26': '26px',
        '15': '15px',
        '61': '61px',
        '11': '11px',
        '135': '-115px'
      },
    },
    colors: {
      blue: '#6170FF',
      white: '#fff',
      lightBlue: '#EAEFFD',
    },
    screens: {
      xs: '420px',
      // => @media (min-width: 375px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],

};
