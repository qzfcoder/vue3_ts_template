<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
      </slot>
      <div class="handler">
        <slot name="header-handler"></slot>
      </div>
    </div>
    <el-table
      :data="tableList"
      :border="isBorder"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectCloum"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexCloum"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :currentPage="pageInfo.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    tableList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexCloum: {
      type: Boolean,
      default: false
    },
    showSelectCloum: {
      type: Boolean,
      default: false
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    listCount: {
      type: Number,
      default: 0
    },
    pageInfo: {
      type: Object,
      default: () => ({
        currentPage: 1,
        pagesize: 10
      })
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      console.log(value)
      emit('selectionChange', value)
    }
    const handleSizeChange = (val: any) => {
      emit('update:page', { ...props.pageInfo, pagesize: val })
    }
    const handleCurrentChange = (val: any) => {
      emit('update:page', { ...props.pageInfo, currentPage: val })
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>

<style scoped></style>
