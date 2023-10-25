const path = require('path')

// Terser - https://webpack.js.org/plugins/terser-webpack-plugin/
const TerserPlugin = require('terser-webpack-plugin')

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
          'style-loader', 'css-loader'
        ]
      },
      {
        // teach Webpack to read SCSS file
        test: /\.scss$/,
        use: [
          // Processes from Right to Left
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  // Minification of the Resulting Webpack Bundle => asset bundle.js 4.88 KiB [emitted] [minimized] in comparison to 19.2 KiB (without minification)
  plugins: [
    new TerserPlugin()
  ]
}

//// NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
// On the other hand, every Webpack loader comes as NPM package => we will need to install two additional NPM packages as 'css-loader' and 'style-loader'