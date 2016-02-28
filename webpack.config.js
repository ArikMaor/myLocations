var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: "index.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|assets)/,
        loader: 'babel',
        query: {presets: ['es2015', 'stage-0']}
      }, {
        test: /html5shiv|webcomponents/,
        exclude: /ttf|eot|woff|svg|ico/,
        loader: 'file?name=assets/js/[name].[ext]'
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }, {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }, {
        test: /\.(ttf|eot|woff)(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file",
        query: {
          mimetype: 'application/font-[ext]',
          name: 'assets/font/[name].[ext]'
        }
      }, {
        test: /\.(jpg|svg|png|jpeg|gif|ico)$/,
        loader: 'file?name=assets/img/[name].[ext]'
      }, {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^jquery/, path.join(__dirname, './node_modules/jquery/dist/jquery.min')),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico',
    })

  ],
  resolve: {
    extensions: [ '', '.js', '.scss', '/style.scss' ]
  }
};
