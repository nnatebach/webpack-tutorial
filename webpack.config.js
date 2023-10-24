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
      },
      {
        // teach Webpack to read SCSS file
        test: /\.scss$/,
        use: [
          // Processes from Right to Left
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      /*
      // using Babel in JavaScript
      // This can be used as an example of how we can implement and use Webpack with Babel for modern JavaScript
      // As of now the latest version of JavaScript is already fully supported in Webpack, therefore, there is no need for Babel.
      // However, it might still be useful in some cases
      {
        test: /\.js$/,
        exclude: /node_modules/, // applicable to all JavaScript files except those located inside the Node modules folder
        // Read more: https://webpack.js.org/loaders/babel-loader/
        use: {
          loaders: 'babel-loader',
          options: {
            presets: ['@babel/env'], // First option is called 'presets'. We need a special Babel preset, which is called 'env'
            // 'env' preset compiles the latest ECMA Script (For example, ECMA Script 6,7,8,9,...) down to ECMA Script 5
            // In other word, 'env' preset supports the latest JavaScript standard defined in the latest ECMA Script specification.
            plugins: ['@babel/plugin-proposal-class-properties']
            // class properties are not part of the official ECMA Script specification => we need a special Babel plugin (plugin-proposal-class-properties) to support this feature
            // If we run Webpack now, it will use Babel order when importing JavaScript files. And if it happens that our application uses some of the cutting edge features that does not make it to the current ECMA Script specification. Webpack will convert such code to the older JavaScript code, which is well understood by all browsers.
          }
        }
        // ERROR: [webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
        // - configuration.module.rules[4].use has an unknown property 'loaders'. These properties are valid:
        // object { ident?, loader?, options? }
      } */
    ]
  }
}

//// NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
// On the other hand, every Webpack loader comes as NPM package => we will need to install two additional NPM packages as 'css-loader' and 'style-loader'