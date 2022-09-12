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
        meta: {
          title: "设备管理"
        }
      },
      {
        path: 'history',
        name: 'DeviceHistory',
        component: () => import('../pages/DeviceData/History/History.vue'),
        meta: {
          title: "历史传感数据"
        }
      },
      {
        path: 'historyonline',
        name: 'DeviceHistoryOnline',
        component: () => import('../pages/DeviceData/HistoryOnline/HistoryOnline.vue'),
        meta: {
          title: "历史在线数据"
        }
      },
      {
        path: 'historycommand',
        name: 'DeviceHistoryCommand',
        component: () => import('../pages/DeviceData/HistoryCommand/HistoryCommand.vue'),
        meta: {
          title: "历史命令数据"
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  //设置网页标题
  window.document.title = to.meta.title + ' - ' + '南华大学 IOT 云平台'
  next()
})

export default router