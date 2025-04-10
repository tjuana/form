/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        refurbished: '#848797',
        premium: '#FF8C38',
        original: '#9F53DA',
        oem: '#5379FF',
        primary: '#0E1035',
        secondary: '#0C39FF',
        accent: '#0C39FF',
      },
      fontSize: {
        xs: [
          'clamp(0.625rem, 1.5vw, 0.75rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        sm: [
          'clamp(0.75rem, 1.5vw, 0.875rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        md: [
          'clamp(0.875rem, 1.5vw, 1rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        base: [
          'clamp(0.875rem, 1.5vw, 1rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        lg: [
          'clamp(1.125rem, 1.5vw, 1.25rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        xl: [
          'clamp(1.25rem, 1.5vw, 1.5rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        '2xl': [
          'clamp(1.5rem, 1.5vw, 2rem)',
          {
            lineHeight: '1',
            letterSpacing: '0.01em'
          }
        ],
        '3xl': [
          'clamp(2rem, 1.5vw, 2.5rem)',
          {
            lineHeight: '1.5',
            letterSpacing: '0.01em'
          }
        ],
        '4xl': [
          'clamp(3.5rem, 1.5vw, 4rem)',
          {
            lineHeight: '1',
            letterSpacing: '0.01em'
          }
        ],
        '8xl': [
          'clamp(6.25rem, 1.5vw, 7.5rem)',
          {
            lineHeight: '1',
            letterSpacing: '-0.06em'
          }
        ]
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        golos: ['Golos Text', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800
      },
      transitionProperty: {
        DEFUALT: 'all 0.3s ease-in-out'
      }
    }
  },
  plugins: []
}
