module.exports = {
  // Entrypoint
  entry: './src/index.js',
  // Output
  output: {
    filename: 'bundle.js', // The generated file which is the result of the build process
    path: './dist' // the directory where this file should be generated
    // Error: 'The provided value "./dist" is not an absolute path!'
  },
  // The last mandatory option
  mode: 'none' // use 'none' for now
}