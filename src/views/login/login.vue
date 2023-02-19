<template>
  <br />
  <t-form v-bind="modalFormConfig" v-model="formData"></t-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TForm from '@/baseUi/form/index.vue'
import { modalForm } from './config/index'
export default defineComponent({
  components: {
    TForm
  },
  setup() {
    const formData = ref<any>({})
    const modalFormConfig = ref(modalForm)
    // 若modalForm中数据会变动，则通过computed来对数据进行监听，在内部进行处理
    // const modalFormConfig = computed(() => {
    //   const roleItem = modalForm.formItems.find(
    //     (item) => item.field === 'roleId'
    //   )
    //   roleItem!.options = store.state.entireRole.map((item) => {
    //     return {
    //       title: item.name,
    //       value: item.id
    //     }
    //   })
    //   return modalForm
    // })
    return {
      formData,
      modalFormConfig
    }
  }
})
</script>

<style scoped></style>
