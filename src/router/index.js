import { createRouter, createWebHistory, createMemoryHistory } from "vue-router"
import routes from './routes'

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

  return createRouter({
    history: routerHistory,
    routes,
  })
}
