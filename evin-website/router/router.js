import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // Add more routes here, like:
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
