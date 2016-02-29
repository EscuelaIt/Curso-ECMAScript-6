var path = require('path');
var webpack = require('webpack');

var APP_PATH = path.join(__dirname, '/src');

module.exports = {
  context: APP_PATH,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true,
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};