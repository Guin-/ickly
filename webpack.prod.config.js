var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')
const CompressionPlugin = require('compression-webpack-plugin');

var config = require('./webpack.config.js')

  config.mode = 'production'
  config.devtool = 'source-map'

  // location of written bundled files
  config.output.path = path.resolve('./frontend/output/dist/')

  config.plugins =  [
    new BundleTracker({path: __dirname, filename: './webpack-stats-prod.json'}),

    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ]

module.exports = config
