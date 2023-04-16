import { IForm } from '@/baseUi/form/type'
import rule from '@/utils/rule'
export const modalForm: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'password',
      label: '用户名',
      placeholder: '请输入用户名',
      rules: rule(true)
    },
    {
      field: 'select',
      type: 'select',
      label: 'select',
      placeholder: '请选择',
      rules: rule(true),
      otherOptions: {
        size: 'large'
      },
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        }
      ]
    },
    {
      field: 'switch',
      type: 'switch',
      label: 'switch',
      placeholder: '请选择',
      otherOptions: {
        'active-value': '100',
        'inactive-value': '0'
      },
      otherStyle: {
        onColor: '#13ce66',
        offColor: '#ff4949'
      }
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  // itemStyle: {},
  colLayout: {
    span: 12
  }
}
