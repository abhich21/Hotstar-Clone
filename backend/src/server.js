const express = require('express')
const app = express()
// const mongodbConnect = require('./config/db')
// await mongodbConnect()


const cors = require('cors')
app.use(cors())
const movieController = require('./controllers/movie.controller')
const port = process.env.PORT || 7000
app.use('/', movieController)
app.use(express.json())

module.exports = () => {
    try {
        app.listen(port, async () => {
            console.log(`Server is running on the port ${port}`)
        })
    } catch (error) {
        console.log({
            message: error.message,
            location: "server.js"
        })
    }
}