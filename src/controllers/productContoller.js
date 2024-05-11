const Product = require("../model/schemas/Product")

const loadProducts = async (req, res) =>{
    const products_count = await Product.find()
    .count()
    const {page} = req.query
    const skip = (page >= products_count ? products_count : page)
    res.append("maximum-page", products_count-1)
    const products = await Product.find()
    .sort({product_onWarning: 'desc', product_stock: 'asc'})
    .skip(skip)
    .limit(10)
    .select({__v: false})
    res.json(products)
}

const registerProduct = async (req, res) =>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
}

module.exports = {
    loadProducts,
    registerProduct
}