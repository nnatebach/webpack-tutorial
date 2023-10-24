// The leading ^ and the trailing $ are known as position anchors, which match the start and end positions of the line, respectively.
// Read more: https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html#zz-2.11
// '/\' Escape sequences - Read more: https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html#zz-2.2

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
      },
      // Rule for CSS - Read more: https://webpack.js.org/loaders/#styling
      {
        // Webpack, by default, does not know how to read CSS file
        // We are creating a rule here to teach Webpack to do that
        test: /\.css$/,
        // we already used 'type' for the text file rule => we'll go with 'use' for this rule for CSS

        // Not only can we use different loaders but we can ALSO combine multiple loaders inside a single rule
        // We're telling Webpack here that it needs to use BOTH 'style-loader' AND 'css-loader' when it tries to import a CSS file.
        use: [
          'style-loader', 'css-loader'
        ]
        // Detailed explanations:
        //// - 'css-loader' ONLY reads and returns the contents of the CSS file contents
        //// - 'style-loader' takes the CSS and INJECTS it into the page using <style>.
        //// - 'style-loader' bundles your CSS together with your JavaScript into a single resulting bundle.js file
      }
    ]
  }
}

//// NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
// Why?? Because Webpack includes asset modules out of the box.
// On the other hand, we need to install them EXPLICITLY.
// Every Webpack loader comes as NPM package that you can add as a dependency to your application.
// In this case, we will need to install two additional NPM packages as 'css-loader' and 'style-loader'