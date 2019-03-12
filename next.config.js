module.exports = {
  webpack: function (config,env) {
    console.log(JSON.stringify(env))
    console.log(JSON.stringify(config))
    return config
  }
}
