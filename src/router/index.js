import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layout/index.vue'
import basic from './basic'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/basic/one',
    component: Layout,
    children: [
      ...basic
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
