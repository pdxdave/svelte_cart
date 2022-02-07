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


// local && reusable
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

// global && feeds local functions

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

// local storage



export default cart;