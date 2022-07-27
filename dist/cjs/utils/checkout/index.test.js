"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../types/index.js");
const _1 = require(".");
const productListOne = [];
const productListTwo = [index_js_1.ProductId.Apple];
const productListThree = [index_js_1.ProductId.Orange];
const productListFour = [index_js_1.ProductId.Apple, index_js_1.ProductId.Orange];
const productListFive = [
    index_js_1.ProductId.Apple,
    index_js_1.ProductId.Apple,
    index_js_1.ProductId.Apple,
    index_js_1.ProductId.Apple,
];
const productListSix = [
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
];
const productListSeven = [
    index_js_1.ProductId.Apple,
    index_js_1.ProductId.Apple,
    index_js_1.ProductId.Apple,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
    index_js_1.ProductId.Orange,
];
it.each([
    { products: productListOne, total: '£0.00' },
    { products: productListTwo, total: '£0.60' },
    { products: productListThree, total: '£0.25' },
    { products: productListFour, total: '£0.85' },
    { products: productListFive, total: '£1.20' },
    { products: productListSix, total: '£1.00' },
    { products: productListSeven, total: '£1.95' },
])('Checkout should correctly calculate total %s', ({ products, total }) => {
    expect((0, _1.default)(products)).toBe(total);
});
