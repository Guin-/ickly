var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.config.js')

  // use the webpack dev server
  config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './frontend/app/index',
  ]

  // override django's STATIC_URL for webpack bundles
  config.output.publicPath = 'http://localhost:3000/static/bundles/'

  config.plugins =  [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
    new webpack.NoErrorsPlugin(),
  ]

module.exports = config
