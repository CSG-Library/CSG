// 设置反向代理的中间件
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      "/api",
      createProxyMiddleware({
         target: 'http://localhost:9000',
         changeOrigin: true
      })
   )
}