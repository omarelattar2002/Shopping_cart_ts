import { v4 as uuidv4 } from 'uuid';


type Item = {
    readonly id:string
    name:string
    price:number
    description: string
}


type User = {
    readonly id:string
    name:string
    age:number
    cart: Item[]
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
    console.log(`${quantity} ${item.name} have been removed your cart `)
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

