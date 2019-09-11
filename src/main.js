/*
 * @Description: 入口
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-07 16:09:55
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-11 22:07:56
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'

// 全局样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/tooplate-style.css'
import '@/assets/css/hero-slider.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");