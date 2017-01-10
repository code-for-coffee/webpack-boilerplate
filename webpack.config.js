const path = require('path');
const webpack = require ('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/js'),
    entry: {
      app: './app.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './src')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }
      ]
    }
};