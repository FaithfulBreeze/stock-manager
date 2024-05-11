const Product = require("../model/schemas/Product")

const loadProducts = async (req, res) =>{
    const products_count = await Product.find()
    .count()
    const {page} = req.query
    const skip = (page >= products_count ? products_count : page*10)
    res.append("maximum-page", products_count-1)
    const products = await Product.find()
    .sort({onWarning: 'desc', stock: 'asc'})
    .skip(skip)
    .limit(10)
    .select({__v: false})
    res.json(products)
}

const registerProduct = async (req, res) =>{
    const {body} = req
    body.value = Number(body.value)
    body.stock = Number(body.stock)
    body.warningNumber = Number(body.warningNumber)
    body.onWarning = body.stock <= body.warningNumber
    body.available = body.stock > 0
    const product = new Product(body)
    await product.save()
    res.status(301).redirect('/')
}

module.exports = {
    loadProducts,
    registerProduct
}