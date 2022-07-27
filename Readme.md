# Checkout System

## Overview

This repository is a simple checkout system which can be used to scan products and calculate the total price.

The current selection of products can be found in `/src/configuration/constants.ts` :

```
export const PRODUCTS = [
  { id: ProductId.Apple, unitPrice: 0.6, offer: 2 },
  { id: ProductId.Orange, unitPrice: 0.25, offer: 3 },
];
```

This variable can be modified to add or remove products from the checkout system, as well as alter their unit price or the their current offer.

The offer for each product is stored as a number and represents the nth item which will be free of charge. For instance, if the offer for apples is `2` then every second apple with be free. Buy one, get one free.

## Making changes

After making any changes to the source files, be sure to compile the updated TypeScript files to JavaScript using the following command:

```
$ yarn compile
```

## Usage

After downloading the repository for the first time, install the node modules required for the project

```
$ yarn

or

$ npm install
```

Use the checkout system by starting the command line interface

```
$ yarn start
```

## Tests

The repository includes some units tests for some key functions. These tests can be run using the following command

```
$ yarn test
```
