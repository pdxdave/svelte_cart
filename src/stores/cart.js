import { writable, derived } from "svelte/store";
import localCart from "../localCart";

const cart = writable([...localCart]);

// returns total dollar amount to the cart
export const cartTotal = derived(cart, ($banana) => {
    let booger =  $banana.reduce((acc, curr) => {
        return (acc += curr.amount * curr.price)
    }, 0)
    return booger.toFixed(2)
})


// local - reusable
const remove = (id, items) => {
    return items.filter(item => item.id !== id)
}

const toggleAmount = (id, items, action) => {
    return items.map(item => {
        let newAmount;
        if(action === 'inc'){
           newAmount = item.amount + 1; 
        } else if (action === 'dec'){
            newAmount = item.amount - 1
        } else {
            newAmount = item.amount
        }
        return item.id === id
        ? {...item, amount: newAmount}
        : {...item}
    })
}

// global - feeds local functions

    // 
export const removeItem = (id) => {
    cart.update(storeValue => {
        return remove(id, storeValue)
    })
}
    // 
export const increaseAmount = (id) => {
    cart.update(storeValue => {
        return toggleAmount(id, storeValue, 'inc')
    })
}
    // if decreasing makes item 0 in cart, we want to remove it
export const decreaseAmount = (id) => {
    cart.update(storeValue => {
        let item = storeValue.find(item => item.id === id);
        let cart; // will be new value for cart
        if(item.amount === 1){
            cart = remove(id, storeValue)
        } else {
            cart = toggleAmount(id, storeValue, 'dec')
        }
        return [...cart]
    })
}

    // adding to the cart we'll pass the whole product.
    // called in productTemplate
export const addToCart = (product) => {
    cart.update(storeValue => {
        const {id, image, title, price} = product;
        // see if item is already in the cart
        let item = storeValue.find(item => item.id === id);
        let cart;
        if(item){
            cart = toggleAmount(id, storeValue, 'inc')
        } else {
            // creating a new object with data we brought it
            let newItem = {id, image, title, price, amount: 1};
            cart = [...storeValue, newItem]
        }
        return cart;
    })
}

// local storage



export default cart;