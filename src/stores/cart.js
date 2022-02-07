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


// local

    // reusable
const remove = (id, items) => {
    return items.filter(item => item.id !== id)
}

// global

    // feeds local function
export const removeItem = (id) => {
    cart.update(storeValue => {
        return remove(id, storeValue)
    })
}


// local storage



export default cart;