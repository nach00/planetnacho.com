import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("./views/Resume.vue")
    },
    {
      path: "/recipes",
      name: "recipes",
      component: () => import("./views/Recipes.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("./views/Portfolio.vue")
    },
    {
      path: "/github",
      name: "github",
      component: () => import("./views/Github.vue")
    }
  ]
});
