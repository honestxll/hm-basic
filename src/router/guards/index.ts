import type { Router } from 'vue-router'
import { setupPermissionGuard } from './permission'
import { setupUserLoginGuard } from './userLogin'

export default function createRouteGuard(router: Router) {
  setupUserLoginGuard(router)
  setupPermissionGuard(router)
}
