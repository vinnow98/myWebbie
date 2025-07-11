import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import underContruction from "../views/underContruction.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/underconstruction",
    name: "Under Construction",
    component: underContruction,
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
