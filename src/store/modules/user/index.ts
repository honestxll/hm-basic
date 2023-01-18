import { getUserInfo, login, type LoginData } from '@/api/user'
import { removeToken, setToken } from '@/utils/auth'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: (): UserInfo => ({
    username: '',
    role: '',
  }),
  getters: {},
  actions: {
    setUserInfo(partial: Partial<UserInfo>) {
      try {
        this.$patch(partial)
      } catch (error) {
        console.log('patch error', error)
      }
    },
    async info() {
      const res = await getUserInfo()
      this.setUserInfo(res.data.data)
      return res.data
    },
    async login(data: LoginData) {
      try {
        const res = await login(data)
        setToken(res.data)
      } catch (error) {
        console.log('error', error)
        removeToken()
        await this.logout()
      }
    },
    async logout() {
      removeToken()
      this.$reset()
    },
  },
})

export interface UserInfo {
  username: string
  password?: string
  avatar?: string
  email?: string
  job?: string
  jobName?: string
  organization?: string
  organizationName?: string
  location?: string
  locationName?: string
  introduction?: string
  personalWebsite?: string
  phone?: string
  registrationDate?: string
  accountId?: string
  certification?: string
  role: string
}
