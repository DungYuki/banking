import { createRouter, createWebHashHistory } from "vue-router";
import Vietants from "../pages/Vietants.vue"

const routes = [
  {
    path: "/",
    component: Vietants,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;