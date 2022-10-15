const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    name : String,
    price: Number,
    drinkavailable: Boolean,
    drinkcofein: Boolean,
    volume : Number,
    descriptiondrink: String
})

const Coffee = mongoose.model('Coffee', mongooseSchema);
module.exports = Coffee
