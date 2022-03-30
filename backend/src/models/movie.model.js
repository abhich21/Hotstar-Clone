const mongoose = require('mongoose')

const movieShema = new mongoose.Schema(
    {
    title : { type : String, required : true},
    image : { type : String, required : true},
    original_language : { type : String, required : true}
    },
    {
        versionKey : false,
        timestamps : true
    }
)

module.exports = mongoose.connect('movie',movieShema)


