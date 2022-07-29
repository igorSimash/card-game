module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'header': '8%',
        'playzone': '92%'
      },
      backgroundImage: {
        'card': 'repeating-linear-gradient(-45deg, gray, gray 5px, black 5px, black 10px);'
      }
    },
  },
  plugins: [],
}