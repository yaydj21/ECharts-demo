import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 用于动态设置 rem 基准值
import 'amfe-flexible'

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
