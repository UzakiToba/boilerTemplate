const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// 処理毎にフォルダを削除する
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonWebpackConfig = require('./webpack.config.js');

const SRC_ROOT = path.resolve(__dirname, 'src');
// const dist = path.resolve(__dirname, 'dist');

module.exports = merge(commonWebpackConfig, {
  // 名前指定で書き出す
  entry: {
    'js/bandle': `${SRC_ROOT}/js/index.js`
  },
  output: {
    // ファイルネームにハッシュをつける
    filename: '[name].[hash].js',
    publicPath: './',
    path: BUILD_ROOT,
    // ライブラリの作り方による差異を吸収
    globalObject: 'this'
  },
  plugins: [
    // distフォルダをビルド毎に削除
    new CleanWebpackPlugin(),
    // 変数
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        BASE_URL: '"/"'
      }
    })
  ]
});
