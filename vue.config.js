module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/' // 使用 GitHub Pages 项目的子路径
      : '/'
  }
  