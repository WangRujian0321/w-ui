const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查
  pages:{
    index:{
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
})
