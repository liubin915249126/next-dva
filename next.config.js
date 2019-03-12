const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
var path = require('path');

module.exports = withLess(
  withCss(
    {
      cssModules: true,
      webpack: function (config,env) {
        config.resolve.alias = {
          'components': path.resolve('./components'),
          '~': path.resolve('./static'),
        };
        // console.log(JSON.stringify(env))
        // console.log(JSON.stringify(config))
        return config
      }
    }
  )
)