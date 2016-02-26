var path = require('path');
var webpack = require('webpack');

const config = {
  entry: path.join(__dirname, '/src'),
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/
    }]
  }, 
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
}

module.exports = config;