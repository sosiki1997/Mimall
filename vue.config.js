module.exports = {
  // 本地开发服务器 webpack和nodejs结合搭建
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn", //后台接口地址
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
  // #reigion
  // 配置子路径
  // publicPath:'/app',
  // 配置输出文件夹名称
  // outputDir:'dist',
  // 指定根路径单页面名称
  // indexPath:'index2.html',
  // 关闭ESlint校验
  // lintOnSave:false,
  // #endregion

  // 生成环境的sourceMap,线上打包时为false
  productionSourceMap: false,
  // 配置webpack 删除预加载 （打包后的路由页面）
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
