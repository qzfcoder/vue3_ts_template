type IFormType = 'input' | 'password' | 'select' | 'datepicker' | 'switch'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  otherStyle?: any
  isHidden?: boolean
  defaultValue?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemstyle?: any
}
