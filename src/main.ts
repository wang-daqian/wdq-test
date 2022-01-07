import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

const app = createApp(App).use(router).use(store)

const requireComponents = import.meta.globEager("/src/components/common/Base*.vue")
for (let i in requireComponents) {
  const component = requireComponents[i].default || requireComponents[i]
  const componentName = i.split("/")[i.split("/").length - 1].replace(".vue", "")
  app.component(componentName, component)
}

app.mount('#app')
