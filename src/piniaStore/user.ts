//src/store/user.ts

import { defineStore } from 'pinia'
import { useTestStore } from './test'
export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      age: 21
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    setOtherData(name: string) {
      // 调用别的store中的方法
      const testStore = useTestStore()
      testStore.setData(name)
    },
    // actin中可以存在异步行为
    // action 间的相互调用，直接用 this 访问即可。
    async login(account: string, pwd: string) {
      const res = await setTimeout(() => {
        const tem = {
          data: {
            account,
            pwd
          }
        }
        return tem
      }, 1000)
      this.setData(res)
      return res
    },

    setData(data: any) {
      console.log(data)
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    }
  },
  // 开启数据缓存-------------数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
  persist: {
    enabled: true,
    // 可以在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage。
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        // 默认所有 state 都会进行缓存，你可以通过 paths 指定要持久化的字段，其他的则不会进行持久化
        paths: ['name', 'age']
      }
    ]
  }
})
