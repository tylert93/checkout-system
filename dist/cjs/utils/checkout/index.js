"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_js_1 = require("../../configuration/constants.js");
const index_js_1 = require("../../utils/formatCurrency/index.js");
const checkout = (basket) => {
    let total = 0;
    constants_js_1.PRODUCTS.forEach((productInfo) => {
        const arrayOfSingleProductType = basket.filter((x) => x === productInfo.id);
        total += costOfSingleProductType(arrayOfSingleProductType, productInfo);
    });
    return (0, index_js_1.default)(total);
};
const costOfSingleProductType = (products, productInfo) => {
    let cost = 0;
    products.forEach((_, idx) => {
        const productNumber = idx + 1;
        if (productNumber % productInfo.offer === 0) {
            return;
        }
        cost += productInfo.unitPrice;
    });
    return cost;
};
exports.default = checkout;
