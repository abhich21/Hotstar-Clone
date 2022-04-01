const mongoose = require('mongoose')

const wishListSchema = new mongoose.Schema(
    {
        user_id : { type : String},
        id:{type:String},
        imageUrl : { type : String, required : true},
        title : { type : String, required : true},
        overview : { type : String, required : true},
    }
)

module.exports = mongoose.model('wishlist', wishListSchema)