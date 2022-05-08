const mongoose = require('mongoose')

db = `mongodb+srv://hotstar:hotstar@cluster0.eavlw.mongodb.net/hotstar?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(db)