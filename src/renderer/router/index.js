import Vue from "vue";
import Router from "vue-router";

import Welcome from "../view/Welcome";
import Home from '../view/Home'
import Images from '../view/Images'
import Shop from '../view/Shop'
import Volume from '../view/Volume'
import Create from '../view/Create'
import Container from '../view/Container'
import Error from '../view/Error'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/images",
      name: "Images",
      component: Images,
    },
    {
      path:'/container',
      name:"Container",
      component: Container,
    },
    {
      path:"/create",
      name:'Create',
      component: Create
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
      path: "/error",
      name: "Error",
      component: Error,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
