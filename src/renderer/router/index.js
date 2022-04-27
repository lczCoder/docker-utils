import Vue from "vue";
import Router from "vue-router";

import Welcome from "../view/Welcome";
import Home from '../view/Home'
import Create from '../view/Create'
import Shop from '../view/Shop'
import Volume from '../view/Volume'

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
      path: "/create",
      name: "Create",
      component: Create,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/volume",
      name: "Volume",
      component: Volume,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
