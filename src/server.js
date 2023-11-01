const express = require('express') // core functionality of Express framework
const app = express() // define routes

// first argument defines the URL
// second argument: this function will be called every time our NodeJS application receives an HTTP request to the route specified in the first argument
app.get('/', function (req, res) {
  res.send('Some dummy content')
})

// start a web server
// have it to listen on a specific port: 3000
// The second argument is a function that is invoked right after the application starts.
app.listen(3000, function () {
  console.log('Application is running on http://localhost:3000/');
})