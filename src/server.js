const express = require('express') // core functionality of Express framework
const app = express() // create an instance of an express application in order to define routes using this variable
const path = require('path') // path is a built-in module inside Node JS => No need to install it via npm
const fs = require('fs')

// Goal: We need to send the contents of all static files back to the browser every time we get a Http request for those files.
// Solution: We create a separate route specifically designed to handle static files. All our static files are located in the dist folder.
// Define a separate URL for all our static files
app.use('/static', express.static(path.resolve(__dirname, '../dist')))

// first argument defines the URL
// second argument: this function will be called every time our NodeJS application receives an HTTP request to the route specified in the first argument
// We are telling Express that every time it gets an Http request to the home URL (the slash '/'), it needs to send the contents of HTML file back to the browser => Express framework is working well at this point. That is why we saw the blank page.
app.get('/', function (req, res) {
  // res.send('Some dummy content')
  const pathToHTMLFile = path.resolve(__dirname, '../dist/index.html')

  // Read content of the 'index.html' into a variable using 'fs'
  // 'readFileSync' reads the contents of the file synchronously and returns the contents of the file as a JavaScript string.
  // utf-8 - the content of the file will be stored in Unicode
  // Read more: https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
  const contentFromHtmlFile = fs.readFileSync(pathToHTMLFile, 'utf-8')
  // send the content to the browser
  res.send(contentFromHtmlFile)
})

// start a web server
// have it to listen on a specific port: 3000
// The second argument is a function that is invoked right after the application starts.
app.listen(3000, function () {
  console.log('Application is running on http://localhost:3000/');
})


////// Problem:
// Refused to apply style from 'http://localhost:3000/styles.058b997e46e350b6336b.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
// GET http://localhost:3000/bundle.a2731903669050dbda51.js net::ERR_ABORTED 404 (Not Found)
// Refused to execute script from 'http://localhost:3000/bundle.a2731903669050dbda51.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.

////// Reason: We did not teach Express framework how to load our assets
// However, inside that HTML content there are links to CSS and JavaScript bundles, and when Express gets a request for a CSS bundle, it does NOT know what to do with this request.
// We did NOT tell Express yet what it should do when it gets a request to a CSS bundle.