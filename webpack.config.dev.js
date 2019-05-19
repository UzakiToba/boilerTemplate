const path = require('path');
const webpack = require('webpack');
// webpackの設定をマージする
const merge = require('webpack-merge');

const commonWebpackConfig = require('./webpack.config.js');

const BUILD_ROOT = path.resolve(__dirname, 'dist');

module.exports = merge(commonWebpackConfig, {
  // ソースマップを使用
  devtool: 'inline-source-map',
  // ローカルサーバーの設定
  devServer: {
    // 書き出し想定のフォルダ
    contentBase: BUILD_ROOT,
    // 起動時に自動でブラウザを起動する。
    open: true,
    // ソース更新時にブラウザをリロードする
    hot: true,
    // 404の時indexを返す,
    historyApiFallback: true,
    // contentBaseで指定しているフォルダ内もhotloaderの対象にする
    watchContentBase: true,
    // IPを指定
    host: '0.0.0.0',
    // ポートを指定
    port: 3000
  },
  plugins: [
    // HMR有効時に必要*2
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 変数
    // 以下の指定で、JSファイル内で process.env.NODE_ENV === 'development' として変数で使用できる
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '"/"'
      }
    })
  ]
});
