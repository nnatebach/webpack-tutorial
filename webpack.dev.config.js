// configurations copied from 'webpack.production.config.js'
const path = require('path')

// CleanWebpackPlugin - Read more: https://www.npmjs.com/package/clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// HtmlWebpackPlugin - Read more: https://webpack.js.org/plugins/html-webpack-plugin/#root
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),

    publicPath: ''
  },

  // Goal: Making the website as fast as possible with as small bundles as possible
  // Read more: https://webpack.js.org/configuration/mode/
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