// Error: 'The provided value "./dist" is not an absolute path!'
// Reason: We specified a relative path in the output path configuration option
// Solution: Use Node.js package for generating an absolute path - Docs: https://nodejs.org/api/path.html

// This is the OLD way of importing common JS modules
// Reason: we cannot use script modules inside the configuration file
const path = require('path')

module.exports = {
  // Entrypoint
  // NOTE: Without a specified 'entrypoint', webpack generates 'main.js' as the default output file
  entry: './src/index.js',
  // Output
  output: {
    filename: 'bundle.js', // The generated file which is the result of the build process
    path: path.resolve(__dirname, './dist') // the directory where this file should be generated
    // path.resolve() method is used to resolve a sequence of path-segments to an absolute path
    // first argument: current folder (directory)
    // second argument: relative path to the dist folder
  },
  // The last mandatory option
  mode: 'none' // use 'none' for now
}