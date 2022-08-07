const mongoose = require('mongoose');

let subscriptionSchema = new mongoose.Schema({
    movie_id:String,
    member_id: String,
    date: String,
});

const model = mongoose.model('subscription', subscriptionSchema)

module.exports = model;