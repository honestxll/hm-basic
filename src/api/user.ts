import axios from 'axios'
import type { UserInfo } from '@/store/modules/user'

export interface LoginData {
  username: string
  password: string
}

export function login<unknow>(data: LoginData) {
  return axios.post('/api/user/login', data)
}

export function logout() {
  return axios.post('/api/user/logout')
}

export function getUserInfo() {
  return axios.post('/api/user/info')
}
