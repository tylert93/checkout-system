export interface ProductInfo {
  id: ProductId;
  unitPrice: number;
  offer: number;
}

export enum ProductId {
  Apple = 'apple',
  Orange = 'orange',
}
