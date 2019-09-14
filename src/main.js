/*
 * @Description: 入口
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-07 16:09:55
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-14 20:29:58
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faRss,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faDribbble
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

// 全局样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/tooplate-style.css'
import '@/assets/css/hero-slider.css'
import '@/assets/css/main.css'

library.add(
  faRss,
  faSearch,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faDribbble
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false;

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");