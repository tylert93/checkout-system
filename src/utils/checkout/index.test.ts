import { ProductId } from '../../types/index.js';

import checkout from '.';

const productListOne = [];
const productListTwo = [ProductId.Apple];
const productListThree = [ProductId.Orange];
const productListFour = [ProductId.Apple, ProductId.Orange];
const productListFive = [
  ProductId.Apple,
  ProductId.Apple,
  ProductId.Apple,
  ProductId.Apple,
];

const productListSix = [
  ProductId.Orange,
  ProductId.Orange,
  ProductId.Orange,
  ProductId.Orange,
  ProductId.Orange,
  ProductId.Orange,
];
const productListSeven = [
  ProductId.Apple,
  ProductId.Apple,
  ProductId.Apple,
  ProductId.Orange,
  ProductId.Orange,
  ProductId.Orange,
  ProductId.Orange,
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
  expect(checkout(products)).toBe(total);
});
