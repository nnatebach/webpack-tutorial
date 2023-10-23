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
    // property 'rules' contains an array of specific rules
    rules: [
      // each rule is an object.
      // Webpack will go through every single rule, it will ignore the rule that does not seem to work for the file and it will use the rule that is applicable to the file that we want to use it with.
      // JavaScript and JSON are files that Webpack can understand by default and import WITHOUT specifying any additional rules
      // Image files such as JPG are files that, by default, Webpack does NOT know how to import => Webpack will check if it has a rule for it => additional rules NEEDED!
      {
        // This first rule is for demonstration purpose
        test: /\.(ttf)$/,
        type: 'asset/resource'
      },
      {
        // there are at least TWO properties for each rule.
        // If the file passes the 'test' then Webpack will import the file by applying the 'type' we specify for that file

        // 1.
        test: /\.(png|jpg)$/, // the Regular Expression checking whether the file name contains either PNG or JPG files
        // 2. This property can be either 'type' or 'use' => we are talking about asset modules which requires the 'type'
        // when we're talking about 'loaders', 'type' property can accept one of four values which are
        //// asset resource
        //// asset inline
        //// asset source
        //// asset
        // => we'll use 'asset resource' this time
        type: 'asset/resource' // this type instructs Webpack to copy the required file into the output directory
        // in this case the output directory is called 'least'???
        // by default, the name of the resulting file is the default hash of the contents of this file with the regional extension
      }
    ]
  }
}