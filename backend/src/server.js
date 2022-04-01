const express = require('express')
const cors = require('cors')


const mongodbConnect = require('./config/db')
const movieController = require('./controllers/movie.controller')
const { register, login } = require('./controllers/account.controller')
const wishlistController = require('./controllers/wishlist.controller')
const app = express()
app.use(express.json())
app.use(cors())



app.use('/', movieController)
app.use('/resister',register)
app.use('/login',login)
app.use('wishlist',wishlistController)


const port = process.env.PORT || 7000
module.exports = () => {
    app.listen(port, async () => {
        try {
            await mongodbConnect()
            console.log(`Server is running on the port ${port}`)
        } catch (error) {
            console.log({
                message: error.message,
                location: "server.js"
            })
        }
    })
}