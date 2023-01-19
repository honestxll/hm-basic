import Mock from 'mockjs'
import setupMock, { successResponseWrap, failResponseWrap } from '../utils/setup-mock'

import type { MockParams } from '../types/mock'

const userInfo = {
  name: '陈实',
  avatar: '//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
  email: 'wangliqun@email.com',
  job: 'frontend',
  jobName: '前端艺术家',
  organization: 'Frontend',
  organizationName: '前端',
  location: 'hefei',
  locationName: '合肥',
  introduction: '人潇洒，性温存',
  personalWebsite: 'https://honest719.gitee.io',
  phone: '150****0000',
  registrationDate: '2013-05-10 12:10:00',
  accountId: '15012312300',
  certification: 1,
  permissions: ['blog'],
  role: 'admin',
}

setupMock({
  mock: true,
  setup() {
    console.log('******************** UserInfoMock ********************')
    // 用户登录
    Mock.mock(new RegExp('/api/user/login'), (options: MockParams) => {
      const { username, password } = JSON.parse(options.body)
      if (username === 'admin' && password === '123456') {
        return successResponseWrap({
          ...userInfo,
          token: '123456',
        })
      }
      return failResponseWrap(null, '用户名或密码错误')
    })
    // 用户信息
    Mock.mock(new RegExp('/api/user/info'), () => {
      return successResponseWrap(userInfo)
    })
  },
})
