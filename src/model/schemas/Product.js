const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    product_model: String,
    product_value: Number,
    product_stock: Number,
    product_avaiability: Boolean,
    product_onWarning: Boolean,
    product_gender: String
})

module.exports = mongoose.model('Product', Product)