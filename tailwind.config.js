/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    accentColor: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
  },
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#f2f4f7',
          dark: '#7c8594',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', '-apple-system', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
}
