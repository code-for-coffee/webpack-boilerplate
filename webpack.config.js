const webpack = require ('webpack');

const extractSharedLibraries = new webpack.optimize.CommonsChunkPlugin({
  name: 'commonLibs',
  filename: 'commonLibs.js'
});

const config = {
  context: __dirname + '/src/js',
    entry: {
      app: './app.js'
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js'
    },
    devServer: {
      contentBase: __dirname //+ '/src/'
    },
    plugins: [
      extractSharedLibraries,
      new webpack.NamedModulesPlugin()
    ],
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
};

module.exports = config;
