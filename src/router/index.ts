import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from './constantRoutes'
import createRouteGuard from './guards'

/**
 * 路由配置
 */
const routes = [
  ...constantRoutes,
  {
    path: '/404',
    component: () => import('../views/error/404.vue'),
    name: 'Page404',
    meta: {
      isPublic: true,
      title: '404',
    },
  },
  { path: '/:pathMatch(.*)', redirect: '/404' },
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/**
 * 路由守卫
 */
createRouteGuard(router)

export default router
