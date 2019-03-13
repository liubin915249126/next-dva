const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withLessExcludeAntd = require("./next.less.config.js")
var path = require("path");


module.exports = withLessExcludeAntd(
  // withCss(
   {
    lessLoaderOptions: {
      javascriptEnabled: true,
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    // distDir: "lwbBlogBuild",
    cssModules: true,
    webpack: function(config, env) {
      config.resolve.alias = {
        ...config.resolve.alias,
        components: path.resolve("./components"),
        "~": path.resolve("./static")
      };
      // console.log(JSON.stringify(env))
      // console.log(JSON.stringify(config))
      return config;
    }
  }
  // )
);
