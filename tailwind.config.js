module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'top': '#005fb4',
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
