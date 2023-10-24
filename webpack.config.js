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
        // this rule targets text file
        // we're telling Webpack to treat the text file we import as 'asset/source' => Webpack will give us a JavaScript string with the contents from the text file.
        test: /\.txt/,
        type: 'asset/source'
      }
    ]
  }
}