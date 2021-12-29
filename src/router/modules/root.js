const MainHome = () => import('@/views/MainHome.vue')

export default () => {
  return {
    path: "/",
    name: "MainHome",
    component: MainHome
  };
};
