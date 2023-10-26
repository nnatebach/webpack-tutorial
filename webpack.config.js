const path = require('path')

// Terser - Read more: https://webpack.js.org/plugins/terser-webpack-plugin/
const TerserPlugin = require('terser-webpack-plugin')

// MiniCssExtractPlugin - Read more: https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),

    publicPath: 'dist/'
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
          // 'style-loader', 'css-loader'

          // modify code to use 'mini-css-extract-plugin'
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        // teach Webpack to read SCSS file
        test: /\.scss$/,
        use: [
          // Processes from Right to Left
          // 'style-loader', 'css-loader', 'sass-loader'

          // modify code to use 'mini-css-extract-plugin'
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    // Minification of the Resulting Webpack Bundle => asset bundle.js 4.88 KiB [emitted] [minimized] in comparison to 19.2 KiB (without minification)
    new TerserPlugin(),

    // Extract CSS into a separate file
    // AND we can specify the file name if we want
    // It creates a CSS file per JS file which contains CSS.
    // asset bundle.js 953 bytes [emitted] [minimized] (name: main)
    // asset style.css 176 bytes [emitted] (name: main)
    // Entrypoint main 1.1 KiB = style.css 176 bytes bundle.js 953 bytes
    // orphan modules 2.91 KiB (javascript) 937 bytes (runtime) [orphan] 7 modules
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}

//// NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
// On the other hand, every Webpack loader comes as NPM package => we will need to install two additional NPM packages as 'css-loader' and 'style-loader'