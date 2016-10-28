var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.config')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var webpackConfig = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new HtmlWebpackPlugin({
      title: 'App', // title is not working for template
      // filename: 'app.html', // default is index html, no matter what's the name of template file
      template: path.join(__dirname, '../src/index.html'),
      hash: false
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})

module.exports = webpackConfig
