const express = require('express')
const app = express()
// const mongodbConnect = require('./config/db')
// await mongodbConnect()



const movieController = require('./controllers/movie.controller')
const port = process.env.PORT || 7000
app.use('/', movieController)
app.use(express.json())
app.use('/', async (req, res) => {
    try {
        return res
            .send({
                app: "hotstar"
            })
    } catch (error) {
        return res
            .status(500)
            .send({
                message: error.message,
                location: "movie.controller"
            })
    }
})

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