const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withLessExcludeAntd = require("./next-less.config.js");
var path = require("path");

if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withLessExcludeAntd(
  // withCss(
  {
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      // console.log('defaultPathMap',defaultPathMap)
      // const custompathMap = {}
      // Object.keys(defaultPathMap).forEach(key =>{
      //   custompathMap[`${key}.html`] = {...defaultPathMap[key], page: `${defaultPathMap[key].page}`}
      // })
      return {
        ...defaultPathMap,
      };
    },
    target: "serverless",
    env: {
      special: "value",
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      // modifyVars: modifyVars
    },
    // distDir: "lwbBlogBuild",
  }
  // )
);
