const { writeFileSync } = require('fs')

module.exports = {
  setDevices(req, res) {
    try {
      console.log(req.body)
      writeFileSync('devices.json', JSON.stringify(devices))
      res.send({
        message: 'success'
      })
    } catch (e) {
      console.error(e)
      res.status(500).send(e)
    }
  }
}