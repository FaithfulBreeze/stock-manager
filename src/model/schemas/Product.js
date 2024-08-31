"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    model: String,
    value: Number,
    stock: Number,
    available: Boolean,
    onWarning: Boolean,
    gender: String,
    warningNumber: Number
});
exports.Product = mongoose_1.default.model('Product', ProductSchema);
