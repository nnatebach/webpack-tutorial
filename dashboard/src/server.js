const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.get('*', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/dashboard.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile)
})

app.listen(9000, function () {
  console.log('Application is running on http://localhost:9000');
})

// webpack, webpack-cli, mini-css-extract-plugin, html-webpack-plugin, clean-webpack-plugin are development dependencies because we are using them only during the build process
// However, express.js is a production dependency because we are using it in order to solve all regenerator files

// Read more:
// fs - https://www.w3schools.com/nodejs/nodejs_filesystem.asp
// app.get(), app.listen() - https://expressjs.com/en/starter/hello-world.html
// app.use() - https://expressjs.com/en/guide/using-middleware.html
// express.static - static file - https://expressjs.com/en/starter/static-files.html
// path.resolve() - absolute path - https://nodejs.org/api/path.html#pathresolvepaths
// __dirname - absolute path - https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname