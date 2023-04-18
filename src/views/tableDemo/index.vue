<template>
  <div>table</div>
  <t-table
    v-bind="contentTableConfig"
    :tableList="tableList"
    v-model:page="pageInfo"
  >
    <template #handle="scope">
      <el-button @click="handleAction(scope)">处理</el-button>
    </template>
  </t-table>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import tTable from '@/baseUi/table/index.vue'
const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '100', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '100' },
    { prop: 'desc', label: '描述', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'imgUrl' },
    { prop: 'inventoryCount', label: '发售', minWidth: '100' },
    { prop: 'saleCount', label: '销售数量', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handle'
    }
  ],
  showIndexCloum: true,
  showSelectCloum: true
}

export default defineComponent({
  components: {
    tTable
  },
  setup() {
    const pageInfo = ref({ currentPage: 1, pagesize: 10 })
    const tableList = ref([{}])
    const handleAction = () => {
      console.log('处理')
    }
    watch(pageInfo, () => {
      // getPageData()
      console.log('重新获取数据信息，更新了页面', pageInfo.value)
    })
    return { tableList, contentTableConfig, pageInfo, handleAction }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 24px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
