var cssLoaderConfig = require('@zeit/next-css/css-loader-config')
var path = require("path");
const staticPath = path.resolve(__dirname,"static") 

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }

            const { dev, isServer } = options
            const {
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                lessLoaderOptions = {}
            } = nextConfig

            options.defaultLoaders.less = cssLoaderConfig(config, {
                extensions: ['less'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'less-loader',
                        options: lessLoaderOptions
                    }
                ]
            })

            config.module.rules.push({
                test: /\.less$/,
                // exclude: [/node_modules/,staticPath+'/common'],
                exclude: [path.resolve(__dirname,'node_modules'),staticPath+'/common'],
                use: options.defaultLoaders.less
            })

            // disable antd css module
            config.module.rules.push({
                test: /\.less$/,
                include: [path.resolve(__dirname,'node_modules'),staticPath+'/common'],
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: false,
                    cssLoaderOptions: {},
                    dev,
                    isServer,
                    loaders: [
                        {
                            loader: 'less-loader',
                            options: lessLoaderOptions
                        }
                    ]
                })
            })
            config.resolve.alias = {
              ...config.resolve.alias,
              components: path.resolve("./components"),
              "~": path.resolve("./static")
            };
            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}