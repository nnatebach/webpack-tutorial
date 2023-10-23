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
        type: 'asset/inline' // asset bundle.js 2.65 MiB [emitted]
        // asset inline
        //// - it inlines a file into the bundle as a data URI.
        //// - it will generate a Base64 algorithm for a representation of your file and bake it directly into the JavaScript bundle.
        //// - it does NOT generate a new file
        //// - asset inline can be used when importing small asset files like SVG.
        /// - importing large files DOES work as well, YET it will enlarge the JS bundle by A LOT! => Why?? Because of the Base64 string converted image that has been injected directly into the JavaScript bundle (data:image/jpeg;base64 in 'bundle.js')
        // Question: When is it better to use asset/inline than asset/resource?
        // Answer: If those images come in huge files.
        // Reason: As we use asset/resource, Webpack generates a separate file for every image we are using => the more images we are using, the more HTTP requests the browser needs to make => it is more beneficial for requests on huge files.
      }
    ]
  }
}