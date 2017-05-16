var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  // app import chain starts here
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './frontend/app/index',
  ],
  // location of written bundled files
  output: {
    path: path.resolve('./frontend/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/static/bundles/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
    new webpack.NoErrorsPlugin(),
  ],

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      { test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.css$/,
        loaders: ['style', 'css']
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
}
