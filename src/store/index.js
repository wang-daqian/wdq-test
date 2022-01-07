import { createStore } from "vuex"

const requireModules = import.meta.globEager("./modules/*.js")
const modules = {}
for (let i in requireModules) {
  const moduleName = i.split("/")[i.split("/").length - 1].replace(".js", "")
  modules[moduleName] = requireModules[i].default
}

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules
})