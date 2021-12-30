import { createSSRApp } from 'vue'
import App from './App.vue'

import createStore from './store'
import createRouter from "./router"
import { createHead } from '@vueuse/head'
import componentRegister from './utils/componentRegister'

const store = createStore()
const router = createRouter()
const head = createHead()

const app = createSSRApp(App)
app.use(router).use(store).use(head)
componentRegister(app)

router.beforeResolve((to, from, next) => {
  let diffed = false
  const matched = router.resolve(to).matched
  const prevMatched = router.resolve(from).matched

  if (from && !from.name) {
    return next()
  }

  const activated = matched.filter((c, i) => {
    return diffed || (diffed = prevMatched[i] !== c)
  })

  if (!activated.length) {
    return next()
  }

  const matchedComponents = []
  matched.map((route) => {
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
  try {
    Promise.all(asyncDataFuncs).then(() => {
      next()
    })
  } catch (err) {
    next(err)
  }
})

router.isReady().then(() => {
  app.mount('#app', true)
})