
const { Router} = require('express')
const express= require('express');
const app=express();
const { authenticate } = require('../middleware/auth')
const WishList = require('../models/wishlist.model')
const router = Router()


router.get('/', authenticate , async ( req, res)=>{
    try {
        const user_id = req.body.user._id
        const movies = await WishList.find({ user_id :user_id}).lean().exec()
        return res
        .send(movies)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message,
            location : "wishlist.controller.js",
            method : 'get'
        })
    }
})

router.post('/', authenticate ,async ( req, res)=>{
    try {
        const user_id = req.body.user._id
        const body = { ...req.body, user_id: user_id}
        const movie = await WishList.create(body)
        return res.send(movie)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message,
            location : "wishlist.controller.js",
            method : 'post'
        })
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const item = await WishList.findByIdAndDelete(req.params.id);
    
        return res.send(item);
      } catch (err) {
        return res.status(500).send(err.message);
      }
})

module.exports = router