import { defineStore } from 'pinia'

export default defineStore('dict', {
  state: () => ({
    dict: {} as Dict,
  }),
  getters: {
    getDictNameByCode: (state) => {
      return (dictName: string, code: string) => {
        const dict = state.dict[dictName]
        if (dict) {
          const item = dict.find((item) => item.code === code)
          if (item) {
            return item.name
          }
        }
        return ''
      }
    },
  },
  actions: {
    async fetchDict(dictName: string, dict: any[]) {
      if (this.dict[dictName]) {
        return
      }
      // TODO 发送 http 请求，加载字典
    },
  },
})

interface Dict {
  [key: string]: any[]
}
