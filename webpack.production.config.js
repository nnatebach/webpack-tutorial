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
    filename: '[name].[contenthash].js', // multiple JS bundles
    // we need different filenames for the different files => replace 'bundle' with '[name]'

    path: path.resolve(__dirname, './dist'),

    publicPath: ''
  },

  // Read more: https://webpack.js.org/configuration/mode/
  mode: 'production', // this enables different kind of plugins including 'terser'
  // due to the huge size of the loader included in both JS files by Webpack
  // hello-world.ac43e74a15f8d29b4cf6.js 70 KiB
  // kiwi.437ff70dba3cf5bb0f94.js 69.7 KiB
  // we can use the Webpack built-in optimization option with the 'splitChunks' delimiter. This indicates which chunks will be selected for optimization
  // Read more: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // Result with 'optimization' option
  // hello-world.4545a24c1727a40f5959.js 2.01 KiB
  // kiwi.3fe4982e8008ce5871af.js 1.65 KiB
  // this bundle '486.10f8d22fb0c099d84f45.js 68.8 KiB' contains 'lodash' which will be cached separately
  // now our users don't need to download it
  // when we change something in our code, Webpack will automatically include this bundle into every HTML page that depends on it.
  // in our current application, both our pages need it so Webpack will include it into both HTML files.
  // 'lodash' will ONLY be included in the generated HTML file if we import it inside the JS file.
  // Otherwise, as we disable it in the JS file then Webpack will NOT include the bundle in the generated HTML file.
  // if the 'lodash' was NOT changed between your deployments, your user will NOT download this bundle every time you deploy your code.
  // the users will download ONLY your code.
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
      filename: '[name].[contenthash].css' // multiple CSS bundles
      // we need different filenames for the different files => replace 'bundle' with '[name]'
    }),
    new CleanWebpackPlugin(),

    //// Generate multiple HTML files
    // Webpack plugin for creating new HTML file
    new HtmlWebpackPlugin( // for more options: https://www.npmjs.com/package/html-webpack-plugin/v/4.5.1
      {
        filename: 'hello-world.html',
        chunks: ['hello-world'], // specify which bundle for which file, the chunk file here is defined at the 'entrypoint'
        title: 'Hello World',
        template: './src/page-template.hbs', // rename 'index.hbs' to 'page-template.hbs'
        description: 'Hello World',
        // minify: false // By default, the generated HTML file is minified in Webpack => Disable it to see all the HTML contents
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
        // minify: false
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