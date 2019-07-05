const router = require("express").Router()
const devices = require('./devices')

module.exports = function(app) {
  app.use('/devices', devices)
  app.use(router)
}