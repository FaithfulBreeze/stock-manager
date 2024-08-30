import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    model: String,
    value: Number,
    stock: Number,
    available: Boolean,
    onWarning: Boolean,
    gender: String,
    warningNumber: Number
})

export const Product = mongoose.model('Product', ProductSchema)