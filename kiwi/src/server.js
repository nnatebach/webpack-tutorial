const express = require('express') // core functionality of Express framework
const app = express() // create an instance of an express application in order to define routes using this variable
const path = require('path') // path is a built-in module inside Node JS => No need to install it via npm
const fs = require('fs')


app.get('/', function (req, res) {
  const pathToHTMLFile = path.resolve(__dirname, '../dist/kiwi.html')
  const contentFromHtmlFile = fs.readFileSync(pathToHTMLFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

// Read more: Serving static files in Express https://expressjs.com/en/starter/static-files.html
app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.listen(9002, function () { // this port needs to be the same with the 'devServer' port used in 'webpack.dev.config.js'
  console.log('Application is running on http://localhost:9002/');
})

// For more info about 'app.use()' and 'app.get': https://expressjs.com/en/guide/using-middleware.html
// For more info about 'app.listen()': https://expressjs.com/en/api.html#app.listen
// Question: Why do we have 'app.listen()' in a different page?