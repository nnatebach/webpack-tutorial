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
        filename: 'hello-world.html',
        chunks: ['hello-world'], // specify which bundle for which file, the chunk file here is defined at the 'entrypoint'
        title: 'Hello World',
        template: './src/page-template.hbs', // rename 'index.hbs' to 'page-template.hbs'
        description: 'Hello World',
        minify: false // By default, the generated HTML file is minified in Webpack => Disable it to see all the HTML contents
      }
    ),
    // Include this plugin twice to generate two HTML files
    new HtmlWebpackPlugin(
      {
        filename: 'kiwi.html',
        chunks: ['kiwi'], // specify which bundle for which file, the chunk file here is defined at the 'entrypoint'
        title: 'Kiwi',
        template: './src/page-template.hbs', // rename 'index.hbs' to 'page-template.hbs'
        description: 'Kiwi',
        minify: false
      }
    ),
  ]
}

//// NOTES:
//  As we first tried to generate different CSS and JS files and the image (npm run build) with one 'index.html' file, we got the following WARNING:
// WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
// This can impact web performance.
// Assets:
//   23de234a71129d9c860b.jpg (1.99 MiB)

// WARNING in webpack performance recommendations:
// You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
// For more info visit https://webpack.js.org/guides/code-splitting/

//// As we include the plugin 'HtmlWebpackPlugin' twice, with the second build the 'index.html' is now replaced with two new HTML files, 'hello-world' and 'kiwi.html'.