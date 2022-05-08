
const { Router} = require('express')
const { v4 : uuid } = require('uuid')
const {OAuth2Client} = require('google-auth-library');
// const APP_CLINT_ID="470082525240-e74jps4n35c7d8kufu3ujo6veg77bi3k.apps.googleusercontent.com"
const client = new OAuth2Client(process.env.APP_CLINT_ID);
const User = require('../models/user.model')
const { newToken } = require('../controllers/signinsignup.controller');
const { authenticate } = require('../middleware/auth');
const router = Router()

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.APP_CLINT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    })
    const payload = ticket.getPayload();
    const userid = payload['sub']
    const finalRes = {
        email : payload.email,
        name : payload.name,
        picture: payload.picture,
    }
    return (finalRes)
}
router.post('/login' , async ( req, res)=>{
    try {
        const { token } = req.body
        let finalres = await verify(token).catch(console.error)
        if(finalres.email)
        {
            let user = await User.findOne({ email : finalres.email})
            if(!user)
                user = await User.create({
                    email : finalres.email,
                    name : finalres.name,
                    picture: finalres.picture,
                    password : uuid()
                })
            let new_token = newToken(user)
            return res
            .send({ 
                token : new_token,
                email : user.email,
                name : user.name,
                picture: user.picture
            })
        }
        else
            return res
            .send({ error : "An error occuried"})
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message
        })
    }
})

module.exports = router