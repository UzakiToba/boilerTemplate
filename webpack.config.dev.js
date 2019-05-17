const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonWebpackConfig = require('./webpack.config.js');

const dist = path.resolve(__dirname, 'dist');

module.exports = merge(commonWebpackConfig, {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    filename: 'js/build.js',
    publicPath: '/',
    path: dist,
    // ライブラリの作り方による差異を吸収
    globalObject: 'this'
  },
  devServer: {
    contentBase: dist,
    open: true,
    hot: true,
    // 404の時indexを返す,
    historyApiFallback: true,
    watchContentBase: true,
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    // HMR有効時に必要*2
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 変数
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '"/"'
      }
    })
  ]
});
