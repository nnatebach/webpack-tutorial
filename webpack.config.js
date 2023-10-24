// The leading ^ and the trailing $ are known as position anchors, which match the start and end positions of the line, respectively.
// '/\' Escape sequences

const path = require('path')

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
      // Rule for CSS - Read more: https://webpack.js.org/loaders/#styling
      {
        // teach Webpack to read CSS file
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
}

//// NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
// On the other hand, every Webpack loader comes as NPM package => we will need to install two additional NPM packages as 'css-loader' and 'style-loader'