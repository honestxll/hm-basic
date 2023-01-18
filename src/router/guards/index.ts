import type { Router } from 'vue-router'
import { setupUserLoginGuard } from './userLogin'

export default function createRouteGuard(router: Router) {
  setupUserLoginGuard(router)
}
