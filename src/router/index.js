import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/LogIn.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LogIn,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to.name);
  if (to.name !== "login" && !localStorage.getItem("access")) {
    next({ name: "login" });
  } else next();
});
export default router;
