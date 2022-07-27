#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

import { PRODUCTS } from './configuration/constants.js';
import checkout from './utils/checkout/index.js';

let currentProduct = null;
let shoppingBasket = [];

const availableProducts = PRODUCTS.map(({ id }) => id);

const mainMenu = async () => {
  outputShoppingBasket();

  const choices = ['Scan item', 'Checkout'];

  if (shoppingBasket.length) {
    choices.push('Clear basket');
  }

  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Which action would you like to take?',
    choices,
  });

  if (answer.action === 'Checkout') {
    return outputTotal();
  }

  if (answer.action === 'Scan item') {
    return selectProduct();
  }

  if (answer.action === 'Clear basket') {
    shoppingBasket = [];
  }

  return mainMenu();
};

const selectProduct = async () => {
  const answer = await inquirer.prompt({
    name: 'product',
    type: 'list',
    message: 'Which product do you want to scan?',
    choices: [...availableProducts],
  });

  currentProduct = answer.product;

  selectQuantity();
};

const selectQuantity = async () => {
  const answer = await inquirer.prompt({
    name: 'quantity',
    type: 'input',
    message: 'How many do you want to scan?',
    validate: (answer) => {
      if (isNaN(answer)) {
        return 'please enter a number';
      }

      if (answer < 1) {
        return 'please enter a number greater than 1';
      }
      return true;
    },
  });

  addToBasket(answer.quantity);

  mainMenu();
};

const addToBasket = async (quantity: number) => {
  for (let i = 0; i < quantity; i++) {
    shoppingBasket.push(currentProduct);
  }

  currentProduct = null;
};

const outputProductTotals = () => {
  availableProducts.forEach((product) => {
    const numberInShoppingBasket = shoppingBasket.filter(
      (x) => x === product
    ).length;

    if (numberInShoppingBasket > 0) {
      console.log(`   ${product} (${numberInShoppingBasket})`);
    }
  });
};

const outputShoppingBasket = () => {
  console.log(`\n   ${chalk.bold.cyan('Current shopping basket:')}`);

  if (shoppingBasket.length) {
    outputProductTotals();
  } else {
    console.log('   empty');
  }

  console.log('\n');
};

const outputTotal = () => {
  console.log(`
   ${chalk.bold.green('Amount payable:')}
   ${chalk.bold(`${checkout(shoppingBasket)}`)}
    
    `);
};

const init = async () => {
  await mainMenu();
};

init();
