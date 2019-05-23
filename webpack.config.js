const webpack = require("webpack");
const pkg = require("./package.json"); // reach to root of app && outside of node_modules
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const treeShakenMinifier = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
});

const config = {
  context: __dirname + "/src", // reach to root of app && outside of node_modules
  entry: {
    app: "./js/app.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js"
  },
  devServer: {
    contentBase: __dirname //+ '/src/'
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: "app.bundle.css" }),
    treeShakenMinifier,
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: [/\.css$/],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?sourceMap!sass-loader?sourceMap&outputStyle=compact"
          ]
        }),
        exclude: /node_modules/
      },
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"]
        }
      }
    ]
  }
};

module.exports = config;
