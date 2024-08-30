import { Product } from '../model/schemas/Product'
import { Request, Response } from 'express'

const loadProducts = async (req: Request, res: Response) =>{
    try {
        const products_count = await Product.countDocuments()
        const page: number = Number(req.query.page) || 0
        const skip = (page >= products_count ? products_count : page*10)
        res.append("maximum-page", String(products_count - 1))
        const products = await Product.find()
        .sort({ onWarning: 'desc', stock: 'asc' })
        .skip(skip)
        .limit(10)
        .select({__v: false})
        res.json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}

const loadSingleProduct = async (req: Request, res: Response) =>{
    try {
        const id = req.query.id
        const product = await Product.findById(id)
        .select({__v: false, onWarning: false, available: false})
        res.json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const registerProduct = async (req: Request, res: Response) =>{
    try {
        const { body } = req
        body.onWarning = +body.stock <= +body.warningNumber
        body.available = body.stock > 0
        const product = new Product(body)
        await product.save()
        res.status(301).redirect('/')
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateProduct = async (req: Request, res: Response) =>{
    try {
        const { body } = req
        let product = await Product.findById(req.query.id)
        if(!product) return res.status(404).end()
        if(!product.stock || !product.warningNumber) return res.status(400).end()
        product.value = body.value
        product.stock = body.stock
        product.gender = body.gender
        product.warningNumber = body.warningNumber
        product.onWarning = +product.stock! < +product.warningNumber!
        product.available = +product.stock! > 0
        product.save()
        res.status(204).end()
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProduct = async (req: Request, res: Response) =>{
    try {
        await Product.deleteMany({ _id: req.query.id })
        res.status(204).end()
    } catch (error) {
        res.status(500).json(error)
    }
}

export default {
    loadProducts,
    loadSingleProduct,
    registerProduct,
    updateProduct,
    deleteProduct
}
