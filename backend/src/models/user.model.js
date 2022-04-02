const mongoose = require("mongoose")
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        name : { type: String, required: true },
        picture: { type: String, required: true },
        password: { type: String, required : true }
    },
    {
        versionKey: false
    }
)


userSchema.pre('save', function (next) {
    if (!this.isModified('password')) next()

    this.password = bcryptjs.hashSync(this.password, 6)
    next()
})

userSchema.methods.checkPassword = function (password) {
    return bcryptjs.compareSync(password, this.password)
}

module.exports = mongoose.model('user', userSchema)
