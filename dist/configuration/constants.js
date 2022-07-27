import { ProductId } from '../types/index.js';
// offers work by making the nth item (ProductInfo[ProductId].offer) free
export const PRODUCTS = [
    { id: ProductId.Apple, unitPrice: 0.6, offer: 2 },
    { id: ProductId.Orange, unitPrice: 0.25, offer: 3 },
];
