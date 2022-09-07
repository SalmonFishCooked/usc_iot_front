import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  //主页
  {
    path: '/device',
    name: 'Device',
    component: () => import('../pages/Device/Device.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   //设置网页标题
//   window.document.title = to.meta.title
//   next()
// })

export default router