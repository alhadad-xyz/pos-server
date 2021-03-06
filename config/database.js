const mongoose = require('mongoose')
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('./config')
const url = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}`
mongoose.connect(url)
const db = mongoose.connection

module.exports = db