import { writable, derived } from "svelte/store";
import localCart from "../localCart";

const cart = writable([...localCart]);

export const cartTotal = derived(cart, ($banana) => {
    let booger =  $banana.reduce((acc, curr) => {
        return (acc += curr.amount * curr.price)
    }, 0)
    return booger.toFixed(2)
})

export default cart;