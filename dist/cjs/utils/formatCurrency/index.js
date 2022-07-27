"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatCurrency = (value) => {
    const withTwoDecimalPlaces = value.toFixed(2);
    const withCommas = formatWithCommas(withTwoDecimalPlaces);
    return `£${withCommas}`;
};
const formatWithCommas = (value) => {
    let [leftSide, rightSide] = value.split('.');
    if (leftSide) {
        leftSide = leftSide.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return `${leftSide}.${rightSide}`;
};
exports.default = formatCurrency;
