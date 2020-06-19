import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/dest/:slug",
    name: "DestDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestDetails" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      // eslint-disable-next-line no-undef
      const exists = MEApp.mystore.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    }
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
      if (document.querySelector(to.hash)) {
        return position;
      }
    }
    return false;
  },
  routes
});

export default router;
