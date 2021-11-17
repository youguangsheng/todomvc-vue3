module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "./static",
  indexPath: "./index.html",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    open: true, // 配置自动启动浏览器
    port: 9527
  },
  lintOnSave: process.env.NODE_ENV !== "production"
};
