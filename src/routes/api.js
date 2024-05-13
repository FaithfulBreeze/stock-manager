const express = require('express')
const router = express.Router()
const productController = require('../controllers/productContoller.js')


router.get('/loadProducts', productController.loadProducts)
router.get('/loadSingleProduct', productController.loadSingleProduct)
router.post('/registerProduct', productController.registerProduct)
router.put('/updateProduct', productController.updateProduct)

module.exports = router