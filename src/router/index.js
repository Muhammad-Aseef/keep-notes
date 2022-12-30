import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Archive from "../views/Archive.vue";
import Trash from "../views/Trash.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/archive",
    name: "archive",
    component: Archive,
  },
  {
    path: "/trash",
    name: "trash",
    component: Trash,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
