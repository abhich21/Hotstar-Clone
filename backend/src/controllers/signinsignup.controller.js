


const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require('dotenv').config()

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}

const register = async (req, res) => {
    try {

        let user = await User.findOne({ email: req.body.email }).lean().exec()
        if (user)
            return res
            .send({status: 0})
        user = await User.create(req.body)
        const token = newToken(user)

        return res
        .send({ token, status : 1 })
    } catch (error) {
        res.status(500).send({register : error.message})
    }
}

const login = async (req, res) => {
    try {

        console.log({user :  req.body})
        let user = await User.findOne({ email: req.body.email })
        if (!user)
            return res
            .send({ status : 0 })


        const isRightFlag = user.checkPassword(req.body.password)
        if (isRightFlag == false)
            return res
            .send({ status : 0 })


        const token = newToken(user)
        res.send({token ,status : 1})
    } catch (error) {
        res.status(500).send({register : error.message})
    }
}

module.exports = { register, login, newToken }