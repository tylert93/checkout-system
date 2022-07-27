"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTS = void 0;
const index_js_1 = require("../types/index.js");
// offers work by making the nth item (ProductInfo[ProductId].offer) free
exports.PRODUCTS = [
    { id: index_js_1.ProductId.Apple, unitPrice: 0.6, offer: 2 },
    { id: index_js_1.ProductId.Orange, unitPrice: 0.25, offer: 3 },
];
