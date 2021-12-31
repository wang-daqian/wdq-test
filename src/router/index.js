import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from "vue-router"
import routes from './routes'

export function createRouter () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

  return _createRouter({
    history: routerHistory,
    routes,
  })
}
