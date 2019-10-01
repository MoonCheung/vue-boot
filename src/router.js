/*
 * @Description: 路由配置
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-07 16:09:55
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-26 23:28:21
 */

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: () => import('@/views/Home.vue')
    }
    // {
    // path: "/about",
    // name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import( /* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});