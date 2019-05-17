// const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonWebpackConfig = require('./webpack.config.js');

module.exports = merge(commonWebpackConfig, {
  plugins: [
    // 変数
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        BASE_URL: '"/"'
      }
    })
  ]
});
