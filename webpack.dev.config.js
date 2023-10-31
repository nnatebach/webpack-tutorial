// configurations copied from 'webpack.production.config.js'
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].bundle.js', // No need of browser caching for development configuration (ONLY for production configuration) => No need for contenthash
    path: path.resolve(__dirname, './dist'),

    publicPath: ''
  },

  // Goal: Making the website as fast as possible with as small bundles as possible
  mode: 'development', // Source map is available for 'development' mode. Read more: https://web.dev/articles/source-maps

  devServer: {
    port: 9000, // 1. a port on which this server will be running (e.g. 9000)

    static: {
      // https://webpack.js.org/configuration/dev-server/#directory
      directory: path.resolve(__dirname, './dist') // 2. tell Webpack Dev Server what exactly should be served on that port, simply pointing Webpack to the 'dist' folder.
    },
    // Read more: https://webpack.js.org/configuration/dev-server/#devserverdevmiddleware
    devMiddleware: { // handles webpack assets
      index: 'index.html', // 3. define the index file. In this case, we are going to use 'index.html'

      writeToDisk: true // 4. Have Webpack dev server explicitly writing the generated files to the 'dist' folder
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
          // use 'style-loader' to optimize the build process in DEVELOPMENT phase
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // use 'style-loader' to optimize the build process in DEVELOPMENT phase
          'style-loader', 'css-loader', 'sass-loader'
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
  // Reference: https://webpack.js.org/plugins/
  plugins: [
    new CleanWebpackPlugin(),

    //// Generating multiple HTML pages (2 HTML files)
    new HtmlWebpackPlugin(
      {
        filename: 'hello-world.html',
        chunks: ['hello-world'],
        title: 'Hello world',
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
    )
  ]
}

//// NOTE: While the difference might be subtle when removing 'Terser' and...
// changing from using 'MiniCssExtractPlugin' to using 'style-loader' (we NO longer extract our CSS into a separate file)
// for Development phase in small application
// YET, in larger applications, this difference will be significant!!