import { PRICE_LIST } from '@src/configuration/constants';
import { ProductId } from '@src/types';

const checkout = (products: ProductId[]) => {
  let total = 0;

  products.forEach((productId) => {
    total += PRICE_LIST[productId];
  });

  return `£${total}`;
};

export default checkout;
