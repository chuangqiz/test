import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

// 导入样式表
import './assets/css/reset.scss'
import './assets/css/base.scss'
import 'element-ui/lib/theme-chalk/index.css'

import { services } from './api/index'

Vue.prototype.$api = services

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
