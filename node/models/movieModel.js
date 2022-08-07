const mongoose = require('mongoose');


let movieSchema = new mongoose.Schema({
    name: String,
    yearPremiered: String,
    genres: [String],
    imgUrl: String
});

const model = mongoose.model('movies', movieSchema)

module.exports = model;