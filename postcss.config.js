// https://www.npmjs.com/package/postcss-load-plugins#postcssconfigjs-or-postcssrcjs
// [require('postcss-import'), require('postcss-simple-vars')]
module.exports = {
  plugins: {
    'postcss-import': {
      path: ['styles'],
      root: __dirname,
    },
    'postcss-simple-vars': {},
  },
};
