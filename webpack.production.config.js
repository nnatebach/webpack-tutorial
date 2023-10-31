const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js',
  },
  output: {
    filename: '[name].[contenthash].js', // multiple JS bundles

    path: path.resolve(__dirname, './dist'),

    publicPath: ''
  },

  mode: 'production', // this enables different kind of plugins including 'terser'
  optimization: {
    splitChunks: {
      chunks: 'all',

      // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksminsize
      minSize: 3000 // specify this option in order to extract React as a separate bundle
    }
  },
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
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),

    //// Generate multiple HTML files
    new HtmlWebpackPlugin(
      {
        filename: 'hello-world.html',
        chunks: ['hello-world'],
        title: 'Hello World',
        template: './src/page-template.hbs',
        description: 'Hello World'
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'kiwi.html',
        chunks: ['kiwi'],
        title: 'Kiwi',
        template: './src/page-template.hbs',
        description: 'Kiwi'
      }
    ),
  ]
}

//// As we include the plugin 'HtmlWebpackPlugin' twice, two new HTML files 'hello-world' and 'kiwi.html' are generated