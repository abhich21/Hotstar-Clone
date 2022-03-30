const router = require('express').Router()
const axios = require('axios')

router.get('/movies',async(req, res)=>{
    try {
        const language = req.query.language
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&with_original_language=${language}&language=${language}&sort_by=original_title.asc&year=2022&page=1`
        const response = await axios.get(url)
        return res
        .send(response.data)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message,
            location : "movie.controller"
        })
    }
})
router.get('/tv',async(req, res)=>{
    try {
        const language = req.query.language
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&with_original_language=${language}&language=${language}&page=1`
        const response = await axios.get(url)
        return res
        .send(response.data)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message,
            location : "movie.controller"
        })
    }
})
router.get('/search',async(req, res)=>{
    try {
        const q = req.query.q
        const language = "en-US" || req.query.language
        url = `https://api.themoviedb.org/3/search/movie?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=${language}&query=${q}&page=1&include_adult=false`
        const response = await axios.get(url)
        return res
        .send(response.data)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message,
            location : "movie.controller"
        })
    }
})
module.exports = router

