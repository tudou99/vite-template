import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "HomeIndex",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
  },
  {
    path: "/test",
    name: "HomeTest",
    component: () =>
      import(/* webpackChunkName: "test" */ "@/views/test/index.vue"),
  },
  {
    path: "/three",
    name: "Three",
    component: () =>
      import(/* webpackChunkName: "three" */ "@/views/three/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
