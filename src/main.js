import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import componentRegister from './utils/componentRegister'

const app = createApp(App).use(router)
componentRegister(app)
app.mount('#app')
