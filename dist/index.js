"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return newUser;
}
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
}
function addtoCart(user, item) {
    user.cart.push(item);
}
function removefromCart(user, item) {
    user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
}
function removeQuantityfromcart(user, item, quantity) {
    for (let i = 0; i < quantity; i++) {
        let itemIndex = user.cart.findIndex(cartItem => cartItem.id == item.id);
        user.cart.splice(itemIndex, 1);
    }
    console.log(`${quantity} ${item.name} have been removed your cart `);
}
function carTotal(user) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }
    console.log(`Here is the total price of your cart ${total}$`);
}
function printCart(user) {
    for (let item of user.cart) {
        console.log(item.name);
    }
}
let customer1 = createUser('Omar', 22);
console.log(customer1);
let itemA = createItem('Nike Shoes', 50, 'Air max');
let itemB = createItem('T-shirt', 20, 'white stripped adidas');
let itemC = createItem('Plate', 5, 'glass plate');
addtoCart(customer1, itemA);
console.log(customer1.cart);
addtoCart(customer1, itemB);
addtoCart(customer1, itemB);
addtoCart(customer1, itemB);
printCart(customer1);
addtoCart(customer1, itemC);
addtoCart(customer1, itemC);
addtoCart(customer1, itemC);
printCart(customer1);
carTotal(customer1);
removefromCart(customer1, itemB);
printCart(customer1);
