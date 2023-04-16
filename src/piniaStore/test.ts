//src/store/user.ts

import { defineStore } from 'pinia'

export const useTestStore = defineStore({
  id: 'test', // id必填，且需要唯一
  state: () => {
    return {
      name: 'test'
    }
  },
  actions: {
    setData(data: string) {
      console.log(data, 'data')
      this.name = data
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '测试'
    }
  }
})
