import Vue from "vue";
import Router from "vue-router";

import Welcome from "../view/Welcome";
import Home from '../view/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      // component: require("@/components/Home").default,
      component: Welcome,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
