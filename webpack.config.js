var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  // app import chain starts here
  entry: './frontend/app/index',

  // location of written bundled files
  output: {
    path: path.resolve('./frontend/bundles/'),
    filename: '[name]-[hash].js'
  },

  plugins: [
  ],

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      { test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      { test: /\.(png|jpg|jpeg)$/,
        use: [
           {
            loader: 'url-loader',
            options: {
              name: '[name]-[ext]'
            }
           }
        ]
      },
      { test: /\.(svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'static/images/'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: ['node_modules' , path.resolve(__dirname, 'frontend')],
    extensions: ['.js', '.jsx']
  },
}
