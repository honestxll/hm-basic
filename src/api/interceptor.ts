import axios from 'axios'
import ls from '../utils/localstorage'
import type { AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosHeaders } from 'axios'

axios.defaults.baseURL = (import.meta.env.VITE_APP_API_URL as string) || ''
axios.defaults.timeout = 0

/**
 * 请求拦截器
 * 带上用户身份头
 */
axios.interceptors.request.use((config: any) => {
  const token = ls.get('token')
  if (token && config?.headers) {
    config.headers.common = {}
    config.headers!.common['X-Access-Token'] = `Bearer ${token}`
  }
  return config
})

/**
 * 如果错误结果返回的格式是 { error: 'xxxx' }
 * 直接用 Message 提示错误
 * 401 错误清除 token 跳转到登录
 */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = '请求失败'
    if (typeof error.response.data === 'string') {
      errorMessage = error.response.data
    } else if (error.response.data?.error && typeof error.response.data.error === 'string') {
      errorMessage = error.response.data.error
    }
    console.log(errorMessage)
    // message.error(errorMessage)
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      // router.push('/login')
    }
    if (error.response?.status === 403) {
      // router.back()
    }
    return Promise.reject(error)
  },
)
