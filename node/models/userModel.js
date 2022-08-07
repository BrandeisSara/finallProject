const mongoose=require('mongoose')
let UserSchema=new mongoose.Schema({
    fullName: String,
    userName:String,
    password: String


})
const model = mongoose.model('user',UserSchema)

module.exports = model;