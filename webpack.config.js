const path = require('path')

// Terser - Read more: https://webpack.js.org/plugins/terser-webpack-plugin/
const TerserPlugin = require('terser-webpack-plugin')

// MiniCssExtractPlugin - Read more: https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// CleanWebpackPlugin - Read more: https://www.npmjs.com/package/clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// HtmlWebpackPlugin - Read more: https://webpack.js.org/plugins/html-webpack-plugin/#root
const HtmlWebpackPlugin = require('html-webpack-plugin');
// As we use 'webpack caching' and 'clean', the new files in the 'dist' folder now have been updated and renamed => the page is now broken due to the old files are no longer there.
// 'HtmlWebpackPlugin' creates HTML files for us

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js', // browser caching
    path: path.resolve(__dirname, './dist'),

    // publicPath: 'dist/',
    publicPath: '' // since the 'index.html' is in the same folder with other CSS and JS files, there is no need for the prefix 'dist' anymore => change the path according to 'HtmlWebpackPlugin'
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
        // tell Webpack to treat the text file we import with 'asset/source'
        test: /\.txt/,
        type: 'asset/source'
      },
      // Rule for styling (CSS) - Read more: https://webpack.js.org/loaders/#styling
      {
        // teach Webpack to read CSS file
        test: /\.css$/,
        use: [
          // 'mini-css-extract-plugin'
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        // teach Webpack to read SCSS file
        test: /\.scss$/,
        use: [
          // 'mini-css-extract-plugin'
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
    new HtmlWebpackPlugin()
  ]
}

/*
NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
On the other hand, every Webpack loader comes as NPM package => we will need to install two additional NPM packages as 'css-loader' and 'style-loader'
*/