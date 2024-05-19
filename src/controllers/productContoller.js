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

const loadSingleProduct = async (req, res) =>{
    const id = req.query.id
    const product = await Product.findById(id)
    .select({__v: false, onWarning: false, available: false})
    res.json(product)
}

const registerProduct = async (req, res) =>{
    const {body} = req
    body.onWarning = body.stock < body.warningNumber
    body.available = body.stock > 0
    const product = new Product(body)
    await product.save()
    res.status(301).redirect('/')
}

const updateProduct = async (req, res) =>{
    const {body} = req
    let product = await Product.findById(req.query.id)
    product.value = body.value
    product.stock = body.stock
    product.gender = body.gender
    product.warningNumber = body.warningNumber
    product.onWarning = product.stock < product.warningNumber
    product.available = product.stock > 0
    product.save()
    res.status(301)
}

const deleteProduct = async (req, res) =>{
    await Product.deleteMany({_id: req.query.id})
    res.status(200)
}

module.exports = {
    loadProducts,
    loadSingleProduct,
    registerProduct,
    updateProduct,
    deleteProduct
}
