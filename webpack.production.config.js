const path = require('path')

// MiniCssExtractPlugin - Read more: https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// CleanWebpackPlugin - Read more: https://www.npmjs.com/package/clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// HtmlWebpackPlugin - Read more: https://webpack.js.org/plugins/html-webpack-plugin/#root
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js',
  },
  output: {
    filename: '[name].[contenthash].js', // we need different filenames for the different files => replace 'bundle' with '[name]'
    path: path.resolve(__dirname, './dist'),

    publicPath: ''
  },

  // Read more: https://webpack.js.org/configuration/mode/
  mode: 'production', // this enables different kind of plugins including 'terser'

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
      {
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
    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css' // browser caching
    }),
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

// First build (npm run build):
// WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
// This can impact web performance.
// Assets:
//   23de234a71129d9c860b.jpg (1.99 MiB)

// WARNING in webpack performance recommendations:
// You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
// For more info visit https://webpack.js.org/guides/code-splitting/