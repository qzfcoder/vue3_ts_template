// src/store/index.ts
// 完整的 typescript 的支持；
// 足够轻量，压缩后的体积只有1.6kb;
// 去除 mutations，只有 state，getters，actions
// actions 支持同步和异步；
// 没有模块嵌套，只有 store 的概念，store 之间可以自由使用，更好的代码分割；
// 无需手动添加 store，store 一旦创建便会自动添加；

import { createPinia } from 'pinia'

// 数据持久化操作
import piniaPluginPersist from 'pinia-plugin-persist'
// end

const store = createPinia()
// 数据持久化操作
store.use(piniaPluginPersist)
// end
export default store

// 插件 pinia-plugin-persist 可以辅助实现数据持久化功能。
