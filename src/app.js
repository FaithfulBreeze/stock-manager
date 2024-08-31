"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./model/connection"));
const cors_1 = __importDefault(require("cors"));
const root_1 = __importDefault(require("./routes/root"));
const api_1 = __importDefault(require("./routes/api"));
exports.app = (0, express_1.default)();
(0, connection_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.static(`${__dirname}/public`));
exports.app.use('/', root_1.default);
exports.app.use('/api/', api_1.default);
