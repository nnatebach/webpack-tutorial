const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.get('/', function (req, res) {
  const pathToHTMLFile = path.resolve(__dirname, '../dist/kiwi.html')
  const contentFromHtmlFile = fs.readFileSync(pathToHTMLFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.listen(9002, function () { // this port needs to be the same with the 'devServer' port used in 'webpack.dev.config.js'
  console.log('Application is running on http://localhost:9002/');
})