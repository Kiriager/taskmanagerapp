import dotenv = require('dotenv')
dotenv.config()

import app from './app'

function start() {
  app.listen(process.env.PORT)
}

start()