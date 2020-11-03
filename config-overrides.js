const path = require("path");

const {
   override,
   fixBabelImports,
   addWebpackResolve,
   addWebpackAlias,
   addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
   // 按需加载ant design
   fixBabelImports('import', {
      libraryName: 'antd',
      style: 'css'
   }),

   // resolve  配置扩展名
   addWebpackResolve({
      extensions: [".js", ".json", ".jsx"]
   }),

   // 给文件夹起别名
   addWebpackAlias({
      "@": path.resolve(__dirname, "src/"),
      "@a": path.resolve(__dirname, "src/assets"),
      "@c": path.resolve(__dirname, "src/components"),
      "@u": path.resolve(__dirname, "src/utils"),
      "@s": path.resolve(__dirname, "src/store"),
   }),

   // 配置装饰器的方法
   addDecoratorsLegacy()
)