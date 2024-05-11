const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    model: String,
    value: Number,
    stock: Number,
    available: Boolean,
    onWarning: Boolean,
    gender: String,
    warningNumber: Number
})

module.exports = mongoose.model('Product', Product)