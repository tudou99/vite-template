import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "HomeIndex",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/test",
    name: "HomeTest",
    component: () => import("@/views/test/index.vue"),
  },
  {
    path: "/three",
    name: "Three",
    component: () => import("@/views/three/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
