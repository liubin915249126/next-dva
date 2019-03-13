const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withLessExcludeAntd = require("./next-less.config.js")
var path = require("path");

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLessExcludeAntd(
  // withCss(
    {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      // modifyVars: modifyVars
    }
    // distDir: "lwbBlogBuild",
  }
  // )
);
