// 直播控制台的路由
const routes = [
  {
    name: 'BackStage',
    path: 'backStage',
    meta: {
      title: '直播控制台'
    },
    component: () => import('../views/backStage/index.vue')
  }
]
export default routes
