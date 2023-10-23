const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'none',
  // import image file
  module: {
    rules: [
      // By default
      // Webpack can understand JavaScript and JSON and can import them WITHOUT any additional rules
      // Image files such as JPG are files that Webpack does not understand => additional rules NEEDED!
      {
        // there are at least TWO properties for each rule.
        // If the file passes the 'test' then Webpack will import the file by applying the 'type' we specify for that file

        // 1.
        test: /\.(png|jpg)$/, // checking whether the file name contains either PNG or JPG files
        // 2. This property can be either 'type' or 'use'
        type: 'asset/resource' // this type instructs Webpack to copy the required file into the output directory
      }
    ]
  }
}