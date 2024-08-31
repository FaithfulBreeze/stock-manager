"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../model/schemas/Product");
const loadProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products_count = yield Product_1.Product.countDocuments();
        const page = Number(req.query.page) || 0;
        const skip = (page >= products_count ? products_count : page * 10);
        res.append("maximum-page", String(products_count - 1));
        const products = yield Product_1.Product.find()
            .sort({ onWarning: 'desc', stock: 'asc' })
            .skip(skip)
            .limit(10)
            .select({ __v: false });
        res.json(products);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
const loadSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const product = yield Product_1.Product.findById(id)
            .select({ __v: false, onWarning: false, available: false });
        res.json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
const registerProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        body.onWarning = +body.stock <= +body.warningNumber;
        body.available = body.stock > 0;
        const product = new Product_1.Product(body);
        yield product.save();
        res.status(301).redirect('/');
    }
    catch (error) {
        res.status(500).json(error);
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        let product = yield Product_1.Product.findById(req.query.id);
        if (!product)
            return res.status(404).end();
        if (!product.stock || !product.warningNumber)
            return res.status(400).end();
        product.value = body.value;
        product.stock = body.stock;
        product.gender = body.gender;
        product.warningNumber = body.warningNumber;
        product.onWarning = +product.stock < +product.warningNumber;
        product.available = +product.stock > 0;
        product.save();
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json(error);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Product_1.Product.deleteMany({ _id: req.query.id });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.default = {
    loadProducts,
    loadSingleProduct,
    registerProduct,
    updateProduct,
    deleteProduct
};
