const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 部署应用包时的基本 URL
  outputDir: 'dist', // 打包目录
  assetsDir: 'static',
  indexPath: 'index.html',
  productionSourceMap: false,
  configureWebpack: config => {
    const plugins = [];
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new BundleAnalyzerPlugin()
      )
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');

    //添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('jquery', 'jquery')

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
        return options
      })
    // 开发环境时来生成 source map
    config
      .when(process.env.NODE_ENV === 'development', config =>
        config.devtool('eval-source-map')
      );
    // 生产环境打包出
    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/
        }])
        .end()
      // 性能优化:多页面
      config.optimization.splitChunks({
        chunks: "all",
        name: true,
        // 这里开始设置缓存的 chunks
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
            enforce: true
          },
          bootstrapVue: {
            name: 'chunk-bootstrapVue',
            priority: 20,
            test: /[\\/]node_modules[\\/](bootstrap|bootstrap-vue)[\\/]/,
            chunks: 'initial',
            enforce: true
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
            chunks: 'initial',
            enforce: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}