// Fix absolute path for "dist"
const path = require('path')

module.exports = {
  // Entrypoint
  entry: './src/index.js',
  // Output
  output: {
    filename: 'bundle.js', // the output file => the result of the build process
    path: path.resolve(__dirname, './dist') // the directory of the output file
  },
  // The last mandatory option
  mode: 'none'
}