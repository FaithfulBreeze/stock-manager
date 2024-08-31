"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'views', 'index.html'));
});
router.get('/register', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'views', 'register.html'));
});
router.get('/:id', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'views', 'product-page.html'));
});
exports.default = router;
