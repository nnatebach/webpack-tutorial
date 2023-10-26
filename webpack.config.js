const path = require('path')

// Terser - Read more: https://webpack.js.org/plugins/terser-webpack-plugin/
const TerserPlugin = require('terser-webpack-plugin')

// MiniCssExtractPlugin - Read more: https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    // filename: 'bundle.js',

    filename: 'bundle.[contenthash].js', // browser caching
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
          // 'mini-css-extract-plugin'
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        // teach Webpack to read SCSS file
        test: /\.scss$/,
        use: [
          // 'mini-css-extract-plugin'
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    // Minification of the Resulting Webpack Bundle
    new TerserPlugin(),

    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      // filename: 'style.css',

      filename: 'style.[contenthash].css' // browser caching
    })
  ]
}

/*
NOTE: The advantage of using asset modules (e.g. asset/source) is that we do not need to install any additional NPM packages.
On the other hand, every Webpack loader comes as NPM package => we will need to install two additional NPM packages as 'css-loader' and 'style-loader'

------

Browser caching

Problem 1: Every time your browser loads a website, it downloads all the assets (JS,CSS) required by the website => An issue for mobile users with slow internet connection.
Reason 1: Everytime the page loads, they have to wait several minutes until the page is ready.
Solution 1: Browser caching - Read more: https://webpack.js.org/guides/caching/
How browser caching works?? If the file DID NOT change between the page loads, your browser can save it in a specific place, called cache. When you open the page again, browser will take the file from cache => Save time and internet traffic.
This Problem 1 leads to the Problem 2

Problem 2: If the file HAS BEEN CHANGED, your customers will never get the new version.
Reason 2: the browser always takes the file from cache and it will not download the file with the latest updates.
Solution 2: Update the cache => create a new file with the new name.
How to do it?? Add [contenthash] to the output file name.
How it works?? Each time you make a change in your code, browser remembers files by name. Therefore, if the name changes, browsers will download the new file. This is not done manually by us but Webpack can do this automatically.

Example for browser caching: (Do NOT delete the 'dist' folder!!)
Imagine you change something in your CSS code, but you haven't touched your JavaScript code. In this case, Webpack will generate the new name for your CSS file, but it will use the previous name for the JavaScript file. During the next page, reload, your customers will download the new CSS file, but they will get the JavaScript file from cache in order for this to work.
Once we build the Webpack again, there will be two JS files, one is called 'bundle.js' and the other is 'bundle.sequence-number.js'. The sequence number in the newly created bundle.js is call the 'md5' hash. Read more (md4-hash): https://webpack.js.org/concepts/under-the-hood/#output
And if you modify the files again (any files in the project folder), and you build webpack again then you will see another newly created 'bundle.[contenthash].js' file.
Browser caching with [contenthash] works the same for BOTH JS AND CSS.
*/