const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),

    // 'publicPath' tells Webpack which URL to use in order to load all the generated files in the browser => NO longer the problem in Webpack 5
    // if you are using Webpack 4 then the previous lessons would have not worked for you as you had not specified the 'public path' to your image
    // In Webpack 5, you can see the full path of the image in the developer tool because, by default, Webpack sets 'public path' to 'auto'
    // In Webpack 4, the 'public path' is set as an 'empty string' by default => The image is not loaded automatically => if we set the 'public path' to be an empty string then the image will be gone!
    // publicPath: ''
    // We can put the full URL here.
    // publicPath: 'file:///Users/nhanbach/Documents/Fastcoding-Vietnam/webpack-tutorial/dist/'
    // Or if the application is sourced from the same domain as the static files, we can put a relative path.
    // publicPath: 'dist/'
    // Question: Why should we know about 'publicPath' even for Webpack 5?
    // Reasons:
    //// - serving static files from CDN
    //// - using express server in order to serve the application and use a special URL prefix to serve static files
    //// - module federation feature. https://webpack.js.org/concepts/module-federation/
    //////// NOTE: It is very important to include the ending slash. Reason: When Webpack creates a path to the file it will just concatenate the domain name and then slash and then the file name.

    // CDN demonstration
    publicPath: 'http://some-cdn.com/' // the new path of the image is 'http://some-cdn.com/23de234a71129d9c860b.jpg'
  },
  mode: 'none',

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource'
      }
    ]
  }
}