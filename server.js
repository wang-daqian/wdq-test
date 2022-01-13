const fs = require('fs')
const path = require('path')
const express = require('express')

const SERVE_PORT = 3000

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''

  const manifest = isProd ? require('./dist/client/ssr-manifest.json') : {}

  const app = express()

  let vite
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          usePolling: true,
          interval: 100
        }
      }
    })

    app.use(vite.middlewares)
  } else {
    app.use(require('compression')())
    app.use(
      require('serve-static')(resolve('dist/client'), {
        index: false
      })
    )
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      } else {
        template = indexProd
        render = require('./dist/server/entry-server.js').render
      }

      const [appHtml, preloadLinks, headTags] = await render(url, manifest)

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--head-tags-->`, headTags)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

createServer().then(({ app }) =>
  app.listen(SERVE_PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('http://localhost:' + SERVE_PORT)
    }
  })
)

// for test use
exports.createServer = createServer
