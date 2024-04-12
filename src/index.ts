import { v4 as uuidv4 } from 'uuid';


class Item {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(name: string, price: number, description: string) {
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get description(): string {
        return this._description;
    }

    set name(name: string) {
        this._name = name;
    }

    set price(price: number) {
        this._price = price;
    }

    set description(description: string) {
        this._description = description;
    }

}

class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];

    constructor(name: string, age: number, cart: Item[] = []) {
        this._id = uuidv4();
        this._name = name;
        this._age = age;
        this._cart = cart;
    }


    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get cart(): Item[] {
        return this._cart;
    }


    set name(name: string) {
        this._name = name;
    }

    set age(age: number) {
        this._age = age;
    }

    set cart(cart: Item[]) {
        this._cart = cart;
    }


    addToCart(item: Item): void {
        this.cart.push(item);
    }
}

    removeFromCart(item: Item): void {
        if (this.cart.includes(item)) {
            this.cart = this.cart.filter((cartItem) => cartItem !== item);
        } else {
            console.log(`Item ${item.name} not in the cart!`);
        }
    }

function createUser(name:string, age:number):User{
    const newUser:User = {
        id: uuidv4(),
        name, 
        age,
        cart:[]
    }
    return newUser
}




function createItem(name:string,price:number,description:string):Item{
    return {
        id:uuidv4(),
        name,
        price,
        description
    }
}



function addtoCart(user:User,item:Item):void{
    user.cart.push(item);
}

function removefromCart(user:User,item:Item):void{
    user.cart = user.cart.filter( cartItem => cartItem.id !== item.id)
}


function removeQuantityfromcart(user:User,item:Item,quantity:number):void{
    for (let i=0; i < quantity; i++){
        let itemIndex = user.cart.findIndex( cartItem => cartItem.id == item.id)
        user.cart.splice(itemIndex,1)
    }
    console.log(`${quantity} ${item._name} have been removed your cart `)
}

function carTotal(user:User):void{
    let total = 0
    for (let item of user.cart){
        total += item.price
    }
    console.log(`Here is the total price of your cart ${total}$`)
}

function printCart(user:User):void{
    for(let item of user.cart){
        console.log(item.name)
    }
}


let customer1 = createUser('Omar',22);
console.log(customer1)

let itemA = createItem('Nike Shoes',50,'Air max')
let itemB = createItem('T-shirt',20,'white stripped adidas')
let itemC = createItem('Plate',5,'glass plate')


addtoCart(customer1,itemA)
console.log(customer1.cart)


addtoCart(customer1,itemB)
addtoCart(customer1,itemB)
addtoCart(customer1,itemB)
printCart(customer1)

addtoCart(customer1,itemC)
addtoCart(customer1,itemC)
addtoCart(customer1,itemC)
printCart(customer1)
carTotal(customer1)

removefromCart(customer1,itemB)
printCart(customer1)

