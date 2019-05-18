// ファイルパスの操作
const path = require('path');
const webpack = require('webpack');
// エラー表示を綺麗に
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// ファイルパスの大文字と小文字を区別できるようにする
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// ソースが置いてあるフォルダー
const SRC_ROOT = path.join(__dirname, 'src');
// 書き出し先フォルダー
const BUILD_ROOT = path.resolve(__dirname, 'dist');

module.exports = {
  // ビルドの対象ディレクトリ
  context: SRC_ROOT,
  // 読み込みファイル
  entry: {
    'js/bandle': path.resolve(SRC_ROOT, 'js/index.js')
  },
  // 書きだし設定
  output: {
    // 書き出しファイル名
    filename: '[name].js',
    // 書きだしフォルダー
    path: BUILD_ROOT,
    // ライブラリの作り方による差異を吸収
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        // 読み込みファイルの正規表現
        test: /\.*js$/,
        // 除外ファイル
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // eslintでコンパイル前にコードをチェック
      {
        // 事前実行
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },
  resolve: {
    // モジュール読み込み先フォルダ
    modules: [SRC_ROOT, 'node_modules'],
    // importを拡張子無しで読み込めるようにする
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    // エラー表示を綺麗に
    new FriendlyErrorsWebpackPlugin(),
    // ファイルパスの大文字と小文字を区別できるようにする
    new CaseSensitivePathsPlugin(),
    // コンパイルの経過を表示
    new webpack.ProgressPlugin(),
    // moment.jsを使用する場合enと、ここで指定しているja以外を除去する
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja/)
  ]
};
