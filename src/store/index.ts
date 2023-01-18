import { createPinia } from 'pinia'
import useAppDictStore from '@/store/modules/app/dict'
import useUserStore from '@/store/modules/user'

const pinia = createPinia()

export { useAppDictStore, useUserStore }
export default pinia
