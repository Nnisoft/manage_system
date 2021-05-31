module.exports = {
  publicPath: '/pc/static',
  devServer: {
    proxy: {
      '/pc/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
}