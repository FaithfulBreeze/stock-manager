import express from 'express'
import productController from '../controllers/productContoller'
const router = express.Router()

router.get('/loadProducts', productController.loadProducts)
router.get('/loadSingleProduct', productController.loadSingleProduct)
router.post('/registerProduct', productController.registerProduct)
router.put('/updateProduct', productController.updateProduct)
router.delete('/deleteProduct', productController.deleteProduct)

export default router