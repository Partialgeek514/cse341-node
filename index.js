const express = require('express')
const path = require('path')
const ejs = require('ejs')
const { body, validationResult, query } = require('express-validator')
const custom = require('./modules/custom')
const PORT = process.env.PORT || 5000

function renderHome(req, res) {
  custom.renderNavbar(req, res);
}

function getProfileData(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  id = req.query.id;
  custom.sendProfileData(res, id)
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', renderHome)
  .get('/getProfileData', query('id').isInt(), getProfileData)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
