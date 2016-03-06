var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');

var APP_PATH = path.join(__dirname, '/src');
var TARGET = process.env.npm_lifecycle_event;

var common = {
  context: APP_PATH,
  entry: './',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  module: { loaders: [{
    test: /\.js$/,
    loaders: [ 'babel' ],
    exclude: /node_modules/
  }] },
  plugins: []
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      port: 3000,
      stats: { colors: true },
      inline: true,
      publicPath: '/dist/'
    },
    module: {
      loaders: [{
        test: /\.s?css$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
        include: APP_PATH
      }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    module: {
      loaders: [{
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('css!sass'),
        include: APP_PATH
      }]
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        allChunks: true
      }), 
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
