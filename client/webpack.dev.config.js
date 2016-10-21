const Path = require('path')
const Config = require('./config')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  src: Path.join(__dirname, 'src'),
  public: Path.join(__dirname, 'public')
}

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?https://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: PATHS.public,
    filename: 'app.bundle.js',
    publicPath: '/'
  },

  target: 'web',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            ['es2015', { 'modules': false }],
            'stage-1',
            'react',
            'react-optimize'
          ],
          plugins: [
            'react-hot-loader/babel',
            'react-html-attrs',
            'transform-runtime',
            'transform-class-properties',
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new Webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.ejs',
      css: false,
      title: `${Config.names.title} (dev)`
    }),
    new Webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets`, to: 'assets' }
    ])
  ]
}