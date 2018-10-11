const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/joytailor/goit-fe-course/tree/master/js/module-13/build'
    },
    module: {
   rules: [{
       test: /\.css$/,
       exclude: /node-modules/,
       use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
   },
   {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        {loader: 'url-loader',
        options: {name: '[name].[ext]',
                  outputPath: 'img',
                  limit:10000}
  },
  'img-loader',
]},
{ test: /\.handlebars$/, exclude: /node-modules/, use: "handlebars-loader" }
]
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
          }),
        new HtmlWebpackPlugin({
          inject: true,
          hash: true,
          template: './src/index.html',
          filename: 'index.html'
        }),
        new CleanWebpackPlugin('bulid')
      ]
   };