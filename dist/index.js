"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get description() {
        return this._description;
    }
    set name(name) {
        this._name = name;
    }
    set price(price) {
        this._price = price;
    }
    set description(description) {
        this._description = description;
    }
}
class User {
    constructor(name, age, cart = []) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._age = age;
        this._cart = cart;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get cart() {
        return this._cart;
    }
    set name(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
    set cart(cart) {
        this._cart = cart;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        if (this.cart.includes(item)) {
            this.cart = this.cart.filter((cartItem) => cartItem !== item);
        }
        else {
            console.log(`Item ${item.name} not in the cart!`);
        }
    }
    removeQuantityfromcart(user, item, quantity) {
        for (let i = 0; i < quantity; i++) {
            let itemIndex = user.cart.findIndex(cartItem => cartItem.id == item.id);
            user.cart.splice(itemIndex, 1);
        }
        console.log(`${quantity} ${item.name} have been removed your cart `);
    }
    carTotal(user) {
        let total = 0;
        for (let item of user.cart) {
            total += item.price;
        }
        console.log(`Here is the total price of your cart ${total}$`);
    }
    printCart(user) {
        for (let item of user.cart) {
            console.log(item.name);
        }
    }
}
class Shop {
    constructor() { this._items = [new Item('Tshirt', 9.99, 'star wars shirt'), new Item('shoes', 29.99, 'Nike air max'), new Item('pants', 15.99, 'levis')]; }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
// function createUser(name:string, age:number):User{
//     const newUser:User = {
//         id: uuidv4(),
//         name, 
//         age,
//         cart:[]
//     }
//     return newUser
// }
// function createItem(name:string,price:number,description:string):Item{
//     return {
//         id:uuidv4(),
//         name,
//         price,
//         description
//     }
// }
// function addtoCart(user:User,item:Item):void{
//     user.cart.push(item);
// }
// function removefromCart(user:User,item:Item):void{
//     user.cart = user.cart.filter( cartItem => cartItem.id !== item.id)
// }
// function carTotal(user:User):void{
//     let total = 0
//     for (let item of user.cart){
//         total += item.price
//     }
//     console.log(`Here is the total price of your cart ${total}$`)
// }
// function printCart(user:User):void{
//     for(let item of user.cart){
//         console.log(item.name)
//     }
// }
// let customer1 = createUser('Omar',22);
// console.log(customer1)
// let itemA = createItem('Nike Shoes',50,'Air max')
// let itemB = createItem('T-shirt',20,'white stripped adidas')
// let itemC = createItem('Plate',5,'glass plate')
// addtoCart(customer1,itemA)
// console.log(customer1.cart)
// addtoCart(customer1,itemB)
// addtoCart(customer1,itemB)
// addtoCart(customer1,itemB)
// printCart(customer1)
// addtoCart(customer1,itemC)
// addtoCart(customer1,itemC)
// addtoCart(customer1,itemC)
// printCart(customer1)
// carTotal(customer1)
// removefromCart(customer1,itemB)
// printCart(customer1)
const user = new User("omar", 22);
const shop = new Shop();
user.addToCart(shop.items[1]);
user.addToCart(shop.items[2]);
user.printCart(user);
user.carTotal(user);
user.removeFromCart(shop.items[1]);
user.carTotal(user);
