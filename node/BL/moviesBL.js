const movieModel = require('../models/movieModel')
const  mongoose = require("mongoose")
const subsBL=require("./subscriptionsBL")
const ObjectId=mongoose.Types.ObjectId
const jFaile = require("jsonfile")
const path = require("path")
const jsonFaile = path.join(__dirname, "/../shows.json")
const getAllMoviesFromJson = () => {
    return new Promise((res, rej) => {
        jFaile.readFile(jsonFaile, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}

const getAllMovies = () => {
    return new Promise((res, rej) => {
        movieModel.find({}, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const getMovieByName = async(name) => {
    return new Promise((res, rej) => {
        movieModel.findOne({"name": name }, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
    
}


const createMovies = function (obj) {
    return new Promise((resolve, reject) => {
        obj.forEach(o => {
            const mov = new movieModel({
                name: o.name,
                yearPremiered: o.premiered,
                genres: o.genres,
                imgUrl: o.image.original
            })
            mov.save( (err)=> {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("Created with id : " + mov._id)
                }
            })
        });
    })
}
const createMovie = function (o) {
    return new Promise((resolve, reject) => {
            const mov = new movieModel({
                name: o.name,
                yearPremiered: o.yearPremiered,
                genres: o.genres,
                imgUrl: o.imgUrl
            })
            mov.save( (err,data)=> {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("Created with id : " + data.name)
                }
            })
        
    })
}

 
const updateMovies = async function (id,obj) {
    return new Promise((res, rej) => {
        movieModel.findByIdAndUpdate(ObjectId(id),obj, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}

const deleteMovieById =(id)=> {
    return new Promise((resolve, reject) => {
        movieModel.findOneAndDelete({ _id: ObjectId(id) }, (err) => {
            if (err) {
                reject(err)
            } else {
                subsBL.deleteSubscriptionsByMovieId(id)
                resolve("Movie deleted👌")
            }
        })
    })
}


module.exports = { getAllMovies, getAllMoviesFromJson,createMovie, createMovies ,getMovieByName,updateMovies,deleteMovieById}