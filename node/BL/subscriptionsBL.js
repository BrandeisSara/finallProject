const subscriptionModel = require('../models/subscriptionModel');
const member = require('../models/memberModel')
const movieModel = require('../models/movieModel')
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId


const getMemberById = async (id) => {
    return new Promise((res, rej) => {

        const subsMov = []
        subscriptionModel.find({ movie_id: id }, (err, subs) => {
            if (err) {
                rej(err)
            }
            else {
                subs.map((su) => {
                    return member.findOne({ _id: su.member_id }, (err, data) => {
                        if (err) {
                            rej(err)
                        }
                        else {

                            data && subsMov.push(data)
                            subsMov.length >= subs.length && res(subsMov)

                        }
                    })
                })
            }
        })
    })
}
const getsubscription = () => {
    return new Promise((res, rej) => {
        subscriptionModel.find({}, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const updatesubscriptionsRouter = async function (id, obj) {
    return new Promise((res, rej) => {
        subscriptionModel.findByIdAndUpdate(ObjectId(id), obj, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}

const createsubscription = function (o) {
    return new Promise((resolve, reject) => {
        movieModel.findOne({ name: o.movie_id }, (err, data) => {
            if (err)
                reject(err)
            else {
                const use = new subscriptionModel({
                    movie_id: data._id,
                    member_id: o.member_id,
                    date: o.date

                })
                use.save((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data)
                    }
                })
            }
        })

        
    })
}
const deleteSubscriptionsByMovieId = (movieID) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.deleteMany({ "movieID": movieID }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Subscription deleted👌")
            }
        })
    })
}


const deletesubscription = function (id) {
    return new Promise((res, rej) => {
        subscriptionModel.find({ "member_id": ObjectId(id) }, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                data.map((d) => {
                    subscriptionModel.findOneAndDelete({ "member_id": ObjectId(d.member_id) }
                        , (err) => {
                            if (err) {
                                rej(err)
                            }
                            else {
                                res("delited")
                            }
                        })
                })
            }
        })
    })
}

module.exports = { createsubscription, updatesubscriptionsRouter, deletesubscription, getsubscription, getMemberById , deleteSubscriptionsByMovieId}