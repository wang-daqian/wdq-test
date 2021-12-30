import { createSSRApp } from 'vue'
import App from './App.vue'
import { renderToString } from '@vue/server-renderer'

import createStore from './store'
import createRouter from "./router"
import { createHead } from '@vueuse/head'
import componentRegister from './utils/componentRegister'

export async function render (url, manifest) {
  const store = createStore()
  const router = createRouter()
  const head = createHead()

  const app = createSSRApp(App)
  app.use(router).use(store).use(head)
  componentRegister(app)

  router.push(url)

  await router.isReady()

  const to = router.currentRoute
  const matchedRoute = to.value.matched
  if (to.value.matched.length === 0) {
    return ''
  }

  const matchedComponents = []
  matchedRoute.map((route) => {
    matchedComponents.push(...Object.values(route.components))
  })

  const asyncDataFuncs = matchedComponents.map((component) => {
    const asyncData = component.asyncData || null
    if (asyncData) {
      const config = {
        store,
        route: to,
      }
      return asyncData(config)
    }
  })

  await Promise.all(asyncDataFuncs)

  const context = {}
  const appHtml = await renderToString(app, context)
  return { appHtml }
}