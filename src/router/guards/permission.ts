import { useUserStore } from '@/store'
import type { Router, RouteRecordNormalized } from 'vue-router'

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    console.log('to', to)
    const userStore = useUserStore()
    const authCode = to?.meta?.auth
    if (!authCode) {
      return next()
    }
    const { permissions } = userStore
    const hasAuth = permissions.includes(authCode as string)
    if (hasAuth) {
      next()
    } else {
      next({ name: '404' })
    }
  })
}
