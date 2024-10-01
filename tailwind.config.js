const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      bgColor: '#18191a',
      boxColor: '#242526',
      btn: '#0866ff',
      bgLogin: '#f0f2f5',
      baseColor: '#d12026',
    },
  },
  plugins: [],
});
