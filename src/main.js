import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import componentRegister from './utils/componentRegister'

const app = createApp(App).use(router).use(store)
componentRegister(app)
app.mount('#app')
