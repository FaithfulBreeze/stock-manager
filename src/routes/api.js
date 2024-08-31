"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productContoller_1 = __importDefault(require("../controllers/productContoller"));
const router = express_1.default.Router();
router.get('/loadProducts', productContoller_1.default.loadProducts);
router.get('/loadSingleProduct', productContoller_1.default.loadSingleProduct);
router.post('/registerProduct', productContoller_1.default.registerProduct);
router.put('/updateProduct', productContoller_1.default.updateProduct);
router.delete('/deleteProduct', productContoller_1.default.deleteProduct);
exports.default = router;
