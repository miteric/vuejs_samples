import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dest/:slug",
    name: "DestDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestDetails" */ "../views/DestinationDetails.vue"
      )
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
