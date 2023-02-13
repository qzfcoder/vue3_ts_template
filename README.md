# vue3_ts_practice

## .editorConfig 文件, 该文件是规定写代码的格式

```
多人同时开发项目的时候，来控制代码格式。
```

vscode 中需要安装一个插件 EditorConfig for VS Code

```js
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为utf-8
indent_style = space # 缩进风格设置
indent_size = 2 # 缩进大小
end_of_line = lf #控制换行类型
trim_trailing_whitespace = true # 去除首行任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示旨在md文件下适用
max_line_length = off
trim_trailing_whitespace = false

```

## 安装 prettier 格式化工具 Prettier - Code formatter

来处理代码格式化
npm i prettier -D

.prettierignore 对哪些文件不做处理
.prettierrc 对文件做哪些处理

```js
{
  "useTabs": false, // 使用tab缩进还是空格缩进
  "tabwidth": 2,  // tab是空格的情况下是几个空格
  "printWidth": 80, // 当前字符的长度，一行
  "singleQuote": true, // 使用单引号，还是双
  "trailingComma": "none", // 在多行输入的尾逗号是否添加
  "semi": false // 语句末尾是否需要加上分号
}


```

"prettier": "prettier --write ." 该命令，将所有需要格式化的文件，度格式化处理

## .eslintrc.js 来配置 eslint 规则

安装插件 ESLint

安装 npm i eslint-plugin-prettier eslint-config-prettier -D，来处理 eslint 和 prettier 两者相互兼容，安装项目的时候默认安装了的

```

```
## git husky和seint，来保证代码提交格式的正确性
自动配置命令
npx husky-init && npm install
## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
