 const express = require('express')
 const app = express()
const mongodbConnect = require('./config/db')


const port = 7000 || PORT

// app.use(express.json())
app.get('/',async (req,res)=>{
    try {
        return res.send('HI ANONYMOUS!')
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message,
            location : "server.js"
        })
    }
})

module.exports = ()=>{
    try {
        app.listen(port, async ()=>{
            await mongodbConnect()
            console.log(`Server is running on the port ${port}`)
        })
    } catch (error) {
        console.log({
            message : error.message,
            location : "server.js"
        })
    }
}