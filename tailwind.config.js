module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mayo':  '#012d61',
        'navbarcolor' : '#e1f0ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
