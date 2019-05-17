const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  // ビルドの対象ディレクトリ
  mode: 'production',
  context: src,
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.*js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  }
};
