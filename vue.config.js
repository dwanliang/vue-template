// 是否为生产环境
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  publicPath: '',
  // 将构建好的文件输出到哪里
  outputDir: `dist`,
  configureWebpack(config) {
    if (!isDev) {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
}