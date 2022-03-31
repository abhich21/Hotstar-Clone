const express = require('express')
const app = express()
const mongodbConnect = require('./config/db')
const {register,logIn}=require("./controllers/user.auth");
const passport=require("./config/google.oath");

const port = 2345 || PORT

app.use(express.json())
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
});

// User Auth and Google AuthController

app.post("/register",register);
app.post("/login",logIn);

// GOOGLE OATH 2.0

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        // successRedirect: 'http://localhost:3000',
        failureRedirect: '/auth/google/failure'
}),(req,res)=>{
    return res.status(203).send({name:req.user.name,email:req.user.email})
}
);

passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });



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