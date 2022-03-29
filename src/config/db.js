const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/hotstar"

module.exports = () => mongoose.connect(db)