import App from './App.vue'
import { createApp } from "vue"
import { createHead } from '@vueuse/head'
import router from "./router"
import store from './store'
import componentRegister from './utils/componentRegister'

// import { createSSRApp } from 'vue'
// import { renderToString } from '@vue/server-renderer'

// const app = createSSRApp(App).mount('#app')
// const appContent = await renderToString(app)

// export default appContent

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(store)

componentRegister(app)

app.mount("#app")

import { createSSRApp } from 'vue'
import createStore from './store'
import createRouter from "./router"
import { createHead } from '@vueuse/head'

export function createApp () {
  const app = createSSRApp(App)
  const store = createStore()
  const router = createRouter()
  const head = createHead()
  app.use(router).use(store).use(head)

  return { app, router, store }
}