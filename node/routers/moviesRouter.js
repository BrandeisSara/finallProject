const express = require('express')
const moviesBL = require('../BL/moviesBL')
const { ObjectId } = require("mongodb");
const router = express.Router()

const getMovies = async (req, res, next) => {
    let movies = []
    if (movies.length > 0) {
        console.log("ther are a movies")
        next()
    }
    else {
        movies = await moviesBL.getAllMoviesFromJson()
        // console.log(movies)
        let status = await moviesBL.createMovies(movies);
         res.json(status)
        next()
    }
}
// getMovies,
router.get('/',async function (req, resp) {
    let pers = await moviesBL.getAllMovies();
     resp.json(pers);
})
router.get('/:name', async function (req, resp) {
    let name=req.params.name
    let pers = await moviesBL.getMovieByNameד(name);
     resp.json(pers);
})
router.post('/', async function (req, resp) {
    let obj = req.body
    let status = await moviesBL.createMovie(obj);
     resp.json(status);
})
router.delete('/:id', async function(req, resp)
{
    let id = req.params.id;
    let status = await moviesBL.deleteMovieById(id);
    return resp.json(status);
})
router.put('/:id', async function(req, resp)
{
    let id = req.params.id;
    let obj = req.body
    let status = await moviesBL.updateMovies(id,obj);
    return resp.json(status);
})
module.exports = router;