<template>
  <div>userStore:{{ userStore.name }}</div>
  <div>TestStore:{{ TestStore.name }}</div>
  <div>computed获取：{{ name }}</div>
  <div>getter获取全部名称：{{ userStore.fullName }}</div>
  <div>storeToRefs：{{ age }}</div>
  <el-button @click="fixName">修改名称</el-button>
  <el-button @click="fixOtherName">修改别的名称</el-button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useUserStore } from '@/piniaStore/user'
import { useTestStore } from '@/piniaStore/test'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const TestStore = useTestStore()
    const name = computed(() => userStore.name)

    // state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 storeToRefs
    const { age } = storeToRefs(userStore)
    const fixName = () => {
      userStore.updateName('李四' + Math.random())
    }
    const fixOtherName = () => {
      userStore.setOtherData('李四' + Math.random())
    }
    return { userStore, TestStore, name, age, fixName, fixOtherName }
  }
})
</script>

<style scoped></style>
