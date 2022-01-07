import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from "./router"
import { createStore } from "./store"
import { createHead } from '@vueuse/head'

export function createApp() {
  const app = createSSRApp(App)
  const store = createStore()
  const router = createRouter()
  const head = createHead()

  app.use(router).use(store).use(head)

  const requireComponents = import.meta.globEager("/src/components/common/Base*.vue")
  for (let i in requireComponents) {
    const component = requireComponents[i].default || requireComponents[i]
    const componentName = i.split("/")[i.split("/").length - 1].replace(".vue", "")
    app.component(componentName, component)
  }

  return { app, router, head }
}
