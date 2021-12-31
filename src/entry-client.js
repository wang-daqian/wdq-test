import { createApp } from './main'

const { app, router, store } = createApp()

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
  app.mount('#app')
})

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}