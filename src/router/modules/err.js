const NotFound = () => import('@/views/NotFound.vue')

export default () => {
  return {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
}
