// configurations copied from 'webpack.production.config.js'
const path = require('path')

// Terser - minify/minimize your JavaScript - Read more: https://webpack.js.org/plugins/terser-webpack-plugin/
const TerserPlugin = require('terser-webpack-plugin')

// MiniCssExtractPlugin - Read more: https://webpack.js.org/plugins/mini-css-extract-plugin/
// use 'style-loader' instead of 'MiniCssExtractPlugin' to optimize the build process in DEVELOPMENT phase
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// CleanWebpackPlugin - Read more: https://www.npmjs.com/package/clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// HtmlWebpackPlugin - Read more: https://webpack.js.org/plugins/html-webpack-plugin/#root
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // filename: 'bundle.[contenthash].js', // we do not need browser caching in 'development' mode => remove it
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),

    publicPath: ''
    // since 'index.html' is now in the same directory path with 'style' (css) and 'bundle' (js)
    // => No need for prefix 'dist' anymore
  },

  // Production vs Development
  // Goal: Making the website as fast as possible with as small as possible bundles
  // Read more: https://webpack.js.org/configuration/mode/
  // This 'mode' option is available starting from Webpack 4, for earlier versions it requires much more configuration
  // mode: 'none', // 'none' - no kind of built in optimizations
  // mode: 'production', // this enables different kind of plugins including 'terser'
  mode: 'development', // Source map is available for 'development' mode. Read more: https://web.dev/articles/source-maps

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
          // use 'style-loader' instead of 'MiniCssExtractPlugin' to optimize the build process in DEVELOPMENT phase
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // use 'style-loader' instead of 'MiniCssExtractPlugin' to optimize the build process in DEVELOPMENT phase
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        // teach Webpack how to handle HBS file
        // two things to install for this package: handlebars-loader and handlebars package itself.
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  // Reference: https://webpack.js.org/plugins/
  plugins: [
    // new TerserPlugin(), // Code minification takes time, we only needs it in 'production' mode in order to optimize the page load time => improve customer experience.
    // during the DEVELOPMENT phase, we should optimize the PERFORMANCE of the BUILD process in order to improve the developer experience.

    // Extract CSS into a separate file
    // Due to the same reason in DEVELOPMENT phase, it is not necessary to extract all our CSS into a separate file.
    // We can safely use 'style-loader' instead of 'MiniCssExtractPlugin'
    // new MiniCssExtractPlugin({
    //   filename: 'style.[contenthash].css' // browser caching
    // }),
    new CleanWebpackPlugin(),

    // Webpack plugin for creating new HTML file
    new HtmlWebpackPlugin( // for more options: https://www.npmjs.com/package/html-webpack-plugin/v/4.5.1
      {
        title: 'Hello World', // specify a custom <title> for the page
        template: './src/index.hbs',
        description: 'Some description' // description method - this should be on the same level as 'title'
      }
    ),
  ]
}

//// NOTE: While the difference might be subtle when removing 'Terser' and...
// changing from using 'MiniCssExtractPlugin' to using 'style-loader' (we NO longer extract our CSS into a separate file)
// for Development phase in small application
// YET, in larger applications, this difference will be significant!!