/* eslint-disable no-console */
const express = require('express')
const next = require('next')

const devProxy = {
  '/api': {
    target: 'https://swapi.co/api/',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev
})

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()

    // Set up the proxy.
    if (devProxy) {
      const { createProxyMiddleware } = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }
    
    // server.get('/404', async ctx => {
    //     await app.render(ctx.req, ctx.res, '/404not', ctx.query)
    //     ctx.respond = false
    //   })
    
    //   server.get('*', async ctx => {
    //     await handle(ctx.req, ctx.res)
    //     ctx.respond = false
    //   })
    
    //   server.use(async (ctx, next) => {
    //     ctx.res.statusCode = 200
    //     await next()
    //   })

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })