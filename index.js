const express = require('express')
const path = require('path')
const ejs = require('ejs')
const custom = require('./modules/custom')
const PORT = process.env.PORT || 5000

function renderHome(req, res) {
  var navbar = custom.renderNavbar(req, res);
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', renderHome)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
