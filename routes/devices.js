const router = require('express').Router({ mergeParams: true })
const devices = require('../controllers/devices')

router.route('/').post(devices.setDevices)

module.exports = router

