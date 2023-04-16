<template>
  <div>
    <el-form
      ref="ruleFormRef"
      v-if="formData"
      :model="formData"
      :label-width="labelWidth"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :rules="item.rules"
              :style="itemStyle"
              :prop="item.field"
            >
              <template v-slot:label>
                <i class="el-icon-edit"></i>
                {{ item.label }}
              </template>
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.field}`]"
                  placeholder="Select"
                  v-bind="item.otherOptions"
                >
                  <el-option
                    v-for="i in item.options"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'switch'">
                <el-switch
                  v-model="formData[`${item.field}`]"
                  :style="{
                    '--el-switch-on-color': item.otherStyle.onColor,
                    '--el-switch-off-color': item.otherStyle.offColor
                  }"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- <el-button @click="validateHandle">validateHandle</el-button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue'
import { IFormItem } from './type'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    // vue3默认绑定是是modelValue
    modelValue: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const formData = ref()
    onMounted(() => {
      console.log(props.formItems)
      let tem: any = {}
      props.formItems.map((item) => {
        tem[item.field] = item.defaultValue ?? ''
        return item
      })
      formData.value = { ...tem }
      console.log(formData.value)
    })
    const ruleFormRef = ref()
    const validateHandle = () => {
      if (!ruleFormRef.value) return
      let res = (ruleFormRef.value as any)?.validate((valid: boolean) => {
        console.log(valid, ruleFormRef.value)
        return valid
      })
      return res
    }
    return { formData, ruleFormRef, validateHandle }
  }
})
</script>

<style scoped></style>
