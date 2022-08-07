const mongoose = require('mongoose');

let memberSchema = new mongoose.Schema({
    email: String,
    city: String,
});

const model = mongoose.model('member', memberSchema)

module.exports = model;