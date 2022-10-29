const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
      'vuetify'
    ],
    lintOnSave: false, // 关闭语法检查
});
