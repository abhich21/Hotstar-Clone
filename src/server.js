 const express = require('express')
 const app = express()
const mongodbConnect = require('./config/db')



const movieController = require('./controllers/movie.controller')
app.use('/', movieController)


const port = 7000 || PORT
module.exports = ()=>{
    try {
        app.listen(port, async ()=>{
            // await mongodbConnect()
            console.log(`Server is running on the port ${port}`)
        })
    } catch (error) {
        console.log({
            message : error.message,
            location : "server.js"
        })
    }
}