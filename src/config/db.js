const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/hostar"

module.exports = () => mongoose.connect(db)