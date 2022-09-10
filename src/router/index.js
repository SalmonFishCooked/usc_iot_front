import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  //主页
  {
    path: '/device/:id',
    children: [
      {
        path: '',
        name: 'Device',
        component: () => import('../pages/Device/Device.vue'),
      },
      {
        path: 'history',
        name: 'DeviceHistory',
        component: () => import('../pages/DeviceData/History/History.vue')
      }
    ]
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