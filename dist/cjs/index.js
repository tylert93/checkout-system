#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const chalk_1 = require("chalk");
const constants_js_1 = require("./configuration/constants.js");
const index_js_1 = require("./utils/checkout/index.js");
let currentProduct = null;
let shoppingBasket = [];
const availableProducts = constants_js_1.PRODUCTS.map(({ id }) => id);
const mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    outputShoppingBasket();
    const choices = ['Scan item', 'Checkout'];
    if (shoppingBasket.length) {
        choices.push('Clear basket');
    }
    const answer = yield inquirer_1.default.prompt({
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
});
const selectProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt({
        name: 'product',
        type: 'list',
        message: 'Which product do you want to scan?',
        choices: [...availableProducts],
    });
    currentProduct = answer.product;
    selectQuantity();
});
const selectQuantity = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt({
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
});
const addToBasket = (quantity) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < quantity; i++) {
        shoppingBasket.push(currentProduct);
    }
    currentProduct = null;
});
const outputProductTotals = () => {
    availableProducts.forEach((product) => {
        const numberInShoppingBasket = shoppingBasket.filter((x) => x === product).length;
        if (numberInShoppingBasket > 0) {
            console.log(`   ${product} (${numberInShoppingBasket})`);
        }
    });
};
const outputShoppingBasket = () => {
    console.log(`\n   ${chalk_1.default.bold.cyan('Current shopping basket:')}`);
    if (shoppingBasket.length) {
        outputProductTotals();
    }
    else {
        console.log('   empty');
    }
    console.log('\n');
};
const outputTotal = () => {
    console.log(`
   ${chalk_1.default.bold.green('Amount payable:')}
   ${chalk_1.default.bold(`${(0, index_js_1.default)(shoppingBasket)}`)}
    
    `);
};
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mainMenu();
});
init();
