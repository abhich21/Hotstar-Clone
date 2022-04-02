const jwt = require('jsonwebtoken')
require('dotenv').config()

const tokenVerify = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,solution)=>{
            if(err)
                reject(err)
            resolve(solution)
        })
    })
}

const authenticate = async (req,res,next)=>{
    if(!req.headers.authentication)
        return res
        .status(400)
        .send({
            message : "1.Token is not valid or not present"
        })
    if(!req.headers.authentication.startsWith('Bearer ')) 
        return res
        .status(400)
        .send({
            message : "2.Token is not valid or not present"
        })   
    const token = req.headers.authentication.split(" ")[1]
    let result
    try {
        result = await tokenVerify(token)
    } catch (error) {
        return res
        .status(400)
        .send({
            message : "3.Token is not valid or not present"
        })   
    }

    const user = result.user
    req.body.user = result.user
    next()
}


module.exports = { authenticate }