import { PRODUCTS } from '@src/configuration/constants';
import { ProductId, ProductInfo } from '@src/types';

const checkout = (basket: ProductId[]) => {
  let total = 0;

  PRODUCTS.forEach((productInfo) => {
    const arrayOfSingleProductType = basket.filter((x) => x === productInfo.id);

    total += costOfSingleProductType(arrayOfSingleProductType, productInfo);
  });

  return `£${total}`;
};

const costOfSingleProductType = (
  products: ProductId[],
  productInfo: ProductInfo
) => {
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
