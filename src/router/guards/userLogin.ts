import { useUserStore } from '@/store'
import { isLogin } from '@/utils/auth'
import type { LocationQueryRaw, Router } from 'vue-router'

export const WHITE_LIST = ['/', '/login']

export function setupUserLoginGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    //  如果是白名单就直接放行
    if (WHITE_LIST.includes(to.path)) {
      if (isLogin() && to.name === 'login') {
        // 如果登录了就直接去首页
        next({ path: '/' })
      } else {
        next()
      }
      return
    }

    // 如果登录了检查一下用户信息放行
    if (isLogin()) {
      const userStore = useUserStore()
      if (userStore.role) {
        // 如果登录了就直接放行
        next()
      } else {
        // 如果没有用户信息，就去获取用户信息
        try {
          await userStore.info()
          next()
        } catch (error) {
          // 失败了执行退出登录并退回到登录页面
          await userStore.logout()
          next({
            name: 'login',
            query: {
              redirect: to.path,
              ...to.query,
            } as LocationQueryRaw,
          })
        }
      }
    } else {
      // 如果没有登录就去登录
      next({
        name: 'login',
        query: {
          redirect: to.path,
          ...to.query,
        } as LocationQueryRaw,
      })
    }
  })
}
