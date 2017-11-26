var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.config.js')

  // location of written bundled files
  config.output.path = path.resolve('./frontend/dist/')

  config.plugins =  [
    new BundleTracker({path: __dirname, filename: './webpack-stats-prod.json'}),

    // removes logging and debugging code in React
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }}),

    // minifies code
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]

module.exports = config
