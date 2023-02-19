const path = require('path')

module.exports = {
  // 修改打包后的文件路径下
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      },
      extensions: ['.js', '.ts', '.jsx', '.vue']
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
