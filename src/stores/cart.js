import { writable } from "svelte/store";
import localCart from "../localCart";

const cart = writable([...localCart]);

export default cart;