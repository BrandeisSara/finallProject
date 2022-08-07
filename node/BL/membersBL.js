const memberModel = require('../models/memberModel');
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const Subs = require('../models/subscriptionModel')
const Movies = require('../models/movieModel')
const subsBL =require('./subscriptionsBL')

const getMembers = () => {
    return new Promise((res, rej) => {
        memberModel.find({}, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const createMember = function (o) {
    return new Promise((resolve, reject) => {
        const use = new memberModel({
            email: o.email,
            city: o.city

        })
        use.save((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Created with id : " + data.fullName)
            }
        })

    })
}
const deleteMember = async function (id) {
    return new Promise((res, rej) => {
        memberModel.findByIdAndDelete({ _id: ObjectId(id) }, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const updateMember = async function (id,obj) {
    return new Promise((res, rej) => {
        memberModel.findByIdAndUpdate((id),obj, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const deleteMemberById =(id)=> {
    return new Promise((resolve, reject) => {
        memberModel.findOneAndDelete({ _id: ObjectId(id) }, (err) => {
            if (err) {
                reject(err)
            } else {
                subsBL.deleteSubscriptionsByMovieId(id)
                resolve("Movie deleted👌")
            }
        })
    })
}
const getMemberByName = async (email) => {
    return new Promise((res, rej) => {
        memberModel.findOne({ "email": email }, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })


}

const getMemberById = async (id) => {
    return new Promise((res, rej) => {
        let subs = []
        let subsMov = []
        Subs.find({}, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                console.log(data)
                subs = data.filter(s => s.member_id == id)
                subs.map((su) => {
                    Movies.findById({ _id: su.movie_id }, (err, data) => {
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


module.exports = { getMemberByName, deleteMember, createMember, getMembers, getMemberById ,updateMember,deleteMemberById}