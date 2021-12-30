import { createStore as _createStore } from "vuex"
import { applyMixin } from './storeMixin'

const requireModules = import.meta.globEager("./modules/*.js")
const modules = {}
for (let i in requireModules) {
  const moduleName = i.split("/")[i.split("/").length - 1].replace(".js", "")
  modules[moduleName] = requireModules[i].default
}

export default function createStore () {
  return _createStore(applyMixin({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
    modules
  }))
}