/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3effb',
          100: '#e6dff6',
          200: '#d0c0ee',
          300: '#b497e2',
          400: '#9a6dd6',
          500: '#8247cb',
          600: '#6d35b4',
          700: '#5a2c94',
          800: '#4A266A',
          900: '#35214c',
        },
        gold: {
          50: '#fcf9e7',
          100: '#f9f2cf',
          200: '#f2e59f',
          300: '#ebd96f',
          400: '#e5cc3f',
          500: '#C9B037',
          600: '#b0902b',
          700: '#8c7122',
          800: '#74591c',
          900: '#604b1a',
        },
        burgundy: {
          50: '#fbf2f4',
          100: '#f7e5e9',
          200: '#f0ccd5',
          300: '#e5a5b6',
          400: '#d67692',
          500: '#c54b73',
          600: '#a93260',
          700: '#862a51',
          800: '#6f2545',
          900: '#5d233c',
        }
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 15px 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'section-pattern': "url('https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
    },
  },
  plugins: [],
};