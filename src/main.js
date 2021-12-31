import App from './App.vue'
import { createSSRApp } from 'vue'
import { createStore } from './store'
import { createRouter } from "./router"
import { createHead } from '@vueuse/head'
import componentRegister from './utils/componentRegister'

export function createApp () {
  const app = createSSRApp(App)
  const store = createStore()
  const router = createRouter()
  const head = createHead()

  app.use(router).use(store).use(head)

  componentRegister(app)

  return { app, router, store, head }
}