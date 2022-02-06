import { writable } from "svelte/store";
import localProducts from '../localProducts'

const store = writable(flattenProduct([...localProducts]));

// pulls out image url from from image object in localProducts,
// creates new array with product info and JUST image url link
function flattenProduct(data) {
    return data.map(item => {
        let image = item.image.url;
        return {...item, image}
    })
}


export default store;