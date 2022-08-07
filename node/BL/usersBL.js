const UserModel = require('../models/userModel');
const  mongoose = require("mongoose")
const ObjectId=mongoose.Types.ObjectId
const getUsers = () => {
    return new Promise((res, rej) => {
        UserModel.find({}, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const createUser = function (o) {
    return new Promise((resolve, reject) => {
            const use = new UserModel({
                fullName: o.fullName,
                userName: o.userName,
                password: o.password 
                
            })
            use.save( (err,data)=> {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("Created with id : " + data.fullName)
                }
            })
        
    })
}
const deleteUser = async function (id) {
    return new Promise((res, rej) => {
        UserModel.findByIdAndDelete({_id:ObjectId(id)}, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
}
const getUserByName = async(name) => {
    return new Promise((res, rej) => {
        UserModel.findOne({"fullName": name }, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
            }
        })
    })
    
}
module.exports = { getUsers,deleteUser,createUser,getUserByName}