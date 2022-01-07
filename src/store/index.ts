import { createStore as _createStore } from "vuex"


export function createStore() {
  const store = _createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
  })

  const requireModules = import.meta.globEager("./modules/*.ts")
  for (let i in requireModules) {
    const moduleName = i.split("/")[i.split("/").length - 1].replace(".ts", "")
    store.registerModule(moduleName, requireModules[i].default)
  }

  return store
}