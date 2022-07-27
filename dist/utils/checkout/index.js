import { PRODUCTS } from '../../configuration/constants.js';
import formatCurrency from '../../utils/formatCurrency/index.js';
const checkout = (basket) => {
    let total = 0;
    PRODUCTS.forEach((productInfo) => {
        const arrayOfSingleProductType = basket.filter((x) => x === productInfo.id);
        total += costOfSingleProductType(arrayOfSingleProductType, productInfo);
    });
    return formatCurrency(total);
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
export default checkout;
