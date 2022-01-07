import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import { createHead } from '@vueuse/head'

const head = createHead()

const app = createApp(App).use(router).use(store).use(head)

const requireComponents = import.meta.globEager("/src/components/common/Base*.vue")
for (let i in requireComponents) {
  const component = requireComponents[i].default || requireComponents[i]
  const componentName = i.split("/")[i.split("/").length - 1].replace(".vue", "")
  app.component(componentName, component)
}

app.mount('#app')
