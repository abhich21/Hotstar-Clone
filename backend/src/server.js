const express = require('express')
const cors = require('cors')
const mongodbConnect = require('./config/db')
const movieController = require('./controllers/movie.controller')
const { register, login } = require('./controllers/signinsignup.controller')
const wishlistController = require('./controllers/wishlist.controller')
const googleController = require('./controllers/google.controller')
const app = express()
app.use(express.json())
app.use(cors())



app.use('/', movieController)
app.use('/signup',register)
app.use('/signin',login)
app.use('/watchlist',wishlistController)
app.use('/google', googleController)


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