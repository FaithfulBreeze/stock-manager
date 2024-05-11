const express = require('express')
const router = express.Router()
const productController = require('../controllers/productContoller.js')


router.get('/loadProducts', productController.loadProducts)
router.post('/registerProduct', productController.registerProduct)

module.exports = router