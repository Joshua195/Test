const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.set('port', process.env.PORT || 3000)
app.use(cors())

require('./routes/index') (app)

const server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
