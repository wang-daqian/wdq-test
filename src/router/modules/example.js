const ExampleBase = () => import('@/views/ExampleBase.vue')
const ExampleList = () => import('@/views/ExampleList.vue')
const ExampleItem = () => import('@/views/ExampleItem.vue')

export default () => {
  return {
    path: "/example",
    component: ExampleBase,
    children: [
      {
        path: '',
        alias: 'list',
        name: 'ExampleList',
        component: ExampleList
      },
      {
        path: 'item/:id',
        name: 'ExampleItem',
        component: ExampleItem
      },
    ]
  }
}
