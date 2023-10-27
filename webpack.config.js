const path = require('path')

// Terser - Read more: https://webpack.js.org/plugins/terser-webpack-plugin/
const TerserPlugin = require('terser-webpack-plugin')

// MiniCssExtractPlugin - Read more: https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// CleanWebpackPlugin - Read more: https://www.npmjs.com/package/clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// HtmlWebpackPlugin - Read more: https://webpack.js.org/plugins/html-webpack-plugin/#root
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js', // browser caching
    path: path.resolve(__dirname, './dist'),

    publicPath: ''
    // there is no need for the prefix 'dist' => change the path according to 'HtmlWebpackPlugin'
  },
  mode: 'none',

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024
            }
          }
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      // Rule for styling (CSS) - Read more: https://webpack.js.org/loaders/#styling
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new TerserPlugin(),

    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css' // browser caching
    }),
    new CleanWebpackPlugin(),

    // Webpack plugin for creating new HTML file during the build process
    new HtmlWebpackPlugin( // for more options: https://www.npmjs.com/package/html-webpack-plugin/v/4.5.1
      {
        title: 'Hello World', // specify a custom <title> for the page
        meta: { // provide an additional meta tag
          description: 'Some description' // this tells Webpack to add a description method to the page
        }
      }
    ),
  ]
}