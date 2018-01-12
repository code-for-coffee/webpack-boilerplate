const webpack = require ('webpack');

// use for 3rd party dependencies (vendor)
const extractSharedLibraries = new webpack.optimize.CommonsChunkPlugin({
  name: 'commonLibs',
  filename: 'commonLibs.js'
});

const treeShakenMinifyer = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
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
      /*extractSharedLibraries,*/
      treeShakenMinifyer,
      new webpack.NamedModulesPlugin()
    ],
    devtool: "source-map",
    module: {
      rules: [
        {
          exclude: /(node_modules|bower_components)/,
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ["env"]
          }
        }
      ]
    }
};

module.exports = config;
