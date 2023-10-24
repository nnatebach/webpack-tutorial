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
        type: 'asset', // asset bundle.js 4.27 KiB [emitted] => 'bundle.js' is much smaller compared to 2.65 MiB for "asset/inline"
        // (general) asset
        //// - Webpack will automatically choose between either asset/resource or asset/inline based on the size of each file.
        //// if (size < 8 kilobytes) {
        ////    return asset/inline
        ////   } else {
        ////      return asset/resource
        ////   }
        //// - Since the 'kiwi' image comes in big size => asset/resource => a separate file for our image in the dist directory is generated
        //// - By checking the image in the developer's tool, we can see that the 'src' attribute containing the URL to the image file comes from inside the dist folder ('dist/23de234a71129d9c860b.jpg')


        // Changing the preset '8 kilobytes' to something else.
        // Read more:
        //// https://webpack.js.org/configuration/module/#ruleparserdataurlcondition
        //// https://webpack.js.org/guides/asset-modules/#general-asset-type
        parser: {
          dataUrlCondition: { // the condition based on which Webpack decides if it should use asset/inline or asset/resource.
            maxSize: 3 * 1024
            // - now we've set the maximum file size to be 3 kilobytes from the default 8 kilobytes
            // if (size < 3 kilobytes) {
            //   return asset/inline
            // } else {
            //   return asset/resource
            // }
            }
          }
      }
    ]
  }
}