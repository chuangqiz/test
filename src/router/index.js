import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layout/index.vue'
import basic from './basic'
import backStage from './backStage'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/backStage',
    component: Layout,
    children: [
      ...basic,
      ...backStage
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
