/*
 * @Description: 入口
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-07 16:09:55
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-15 14:51:38
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  LayoutPlugin,
  NavbarPlugin,
  CarouselPlugin,
  ImagePlugin,
  TabsPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  ButtonPlugin
} from 'bootstrap-vue'
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

// 引入单个fontawesome组件
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// 引入单个bootstrapVue组件
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(CarouselPlugin)
Vue.use(ImagePlugin)
Vue.use(TabsPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(ButtonPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");