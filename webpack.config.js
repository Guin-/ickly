var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  // app import chain starts here
  entry: './frontend/app/app',

  // location of written bundled files
  output: {
    path: path.resolve('./frontend/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:8000/static/bundles/',
  },

  plugins: [
    new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
}
