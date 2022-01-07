import { createStore } from "vuex"

const requireModules = import.meta.globEager("./modules/*.ts")

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

for (let i in requireModules) {
  const moduleName = i.split("/")[i.split("/").length - 1].replace(".ts", "")
  store.registerModule(moduleName, requireModules[i].default)
}

export default store