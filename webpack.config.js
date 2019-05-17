const path = require('path');
const webpack = require('webpack');
// エラー表示を綺麗に
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// ファイルパスの大文字と小文字を区別できるようにする
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const src = path.resolve(__dirname, 'src');

module.exports = {
  // ビルドの対象ディレクトリ
  context: src,
  module: {
    rules: [
      {
        test: /\.*js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },
  resolve: {
    // モジュール読み込み先フォルダ
    modules: [src, 'node_modules'],
    // importを拡張子無しで読み込めるようにする
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    // コンパイルの経過を表示
    new webpack.ProgressPlugin(),
    //moment.jsを使用する場合enと、ここで指定しているja以外を除去する
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja/)
  ]
};
