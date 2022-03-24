module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375, // (Number) The width of the viewport.
      unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: "vw", // (String) Expected units.
      selectorBlackList: [".ignore", ".hairlines"], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
    autoprefixer: [
      "> 0.5%",
      "last 2 versions",
      "ie >= 10",
      "iOS >= 8",
      "Android >= 4",
    ],
  },
};
